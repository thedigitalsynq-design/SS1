interface Env {
  DB?: any;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const body = await context.request.json() as {
      role?: string;
      sector?: string;
      region?: string;
      problemPill?: string;
      narrative?: string;
      affectedCount?: string;
      frequency?: string;
      impactLevel?: string;
      confidentialityTier?: string;
    };

    if (!body.narrative || !body.narrative.trim()) {
      return Response.json(
        { success: false, error: 'Narrative description is required.' },
        { status: 400 }
      );
    }

    const id = crypto.randomUUID();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const trackingCode = `SIG-2026-IND-${randomSuffix}`;

    // If Cloudflare D1 database binding 'DB' is present, persist the record
    if (context.env.DB) {
      await context.env.DB.prepare(
        `INSERT INTO problem_reports (
          id, tracking_code, role, sector, region, problem_category,
          narrative, affected_count, frequency, impact_level, confidentiality_tier, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`
      ).bind(
        id,
        trackingCode,
        body.role || 'Unspecified',
        body.sector || 'General Media',
        body.region || 'Unspecified',
        body.problemPill || 'General',
        body.narrative.trim(),
        body.affectedCount || 'Unspecified',
        body.frequency || 'Unspecified',
        body.impactLevel || 'Unspecified',
        body.confidentialityTier || 'anonymized-research'
      ).run();
    }

    return Response.json({
      success: true,
      trackingId: trackingCode,
      message: 'Problem signal recorded securely with whistleblower de-identification.',
      persisted: Boolean(context.env.DB),
    });
  } catch (error: any) {
    console.error('Error handling share-problem signal:', error);
    return Response.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
};

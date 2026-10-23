interface Env {
  DB?: any;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const body = await context.request.json() as {
      fullName?: string;
      organization?: string;
      roleCategory?: string;
      sector?: string;
      region?: string;
      participationType?: string;
      email?: string;
      phone?: string;
      notes?: string;
    };

    if (!body.fullName || !body.email) {
      return Response.json(
        { success: false, error: 'Full name and email are required.' },
        { status: 400 }
      );
    }

    const id = crypto.randomUUID();

    // If Cloudflare D1 database binding 'DB' is present, persist the record
    if (context.env.DB) {
      await context.env.DB.prepare(
        `INSERT INTO network_applications (
          id, full_name, organization, role_category, sector,
          region, participation_type, email, phone, notes, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`
      ).bind(
        id,
        body.fullName.trim(),
        body.organization || '',
        body.roleCategory || 'Independent Contributor',
        body.sector || 'General Media',
        body.region || 'National',
        body.participationType || 'General Membership',
        body.email.trim().toLowerCase(),
        body.phone || '',
        body.notes || ''
      ).run();
    }

    return Response.json({
      success: true,
      message: `Welcome to the Founding Network, ${body.fullName.trim()}. Your application has been recorded.`,
      persisted: Boolean(context.env.DB),
    });
  } catch (error: any) {
    console.error('Error handling join network application:', error);
    return Response.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
};

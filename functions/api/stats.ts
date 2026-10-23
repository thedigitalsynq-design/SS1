interface Env {
  DB?: any;
}

export const onRequestGet = async (context: { env: Env }) => {
  try {
    if (!context.env.DB) {
      return Response.json({
        totalReports: 0,
        totalMembers: 0,
        hasDatabase: false,
      });
    }

    const reportsCount = await context.env.DB.prepare(
      'SELECT COUNT(*) as count FROM problem_reports'
    ).first('count') || 0;

    const membersCount = await context.env.DB.prepare(
      'SELECT COUNT(*) as count FROM network_applications'
    ).first('count') || 0;

    return Response.json({
      totalReports: reportsCount,
      totalMembers: membersCount,
      hasDatabase: true,
    });
  } catch (error: any) {
    return Response.json({
      totalReports: 0,
      totalMembers: 0,
      error: error.message,
    });
  }
};

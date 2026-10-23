interface Env {
  DB?: any;
}

export const onRequestGet = async (context: { env: Env }) => {
  return Response.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'SolutionSynq Cloudflare Pages API',
    hasDatabaseBinding: Boolean(context.env.DB),
  });
};

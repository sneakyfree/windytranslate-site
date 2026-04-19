// Pre-launch gate — HTTP Basic Auth
const REALM = 'Pre-Launch';
export async function onRequest(context) {
  const { request, env, next } = context;
  const u = env.GATE_USER || 'windybaby';
  const p = env.GATE_PASS;
  if (!p) return new Response('Gate misconfigured: GATE_PASS missing.', { status: 500 });
  const auth = request.headers.get('Authorization') || '';
  if (auth.startsWith('Basic ')) {
    try {
      const d = atob(auth.slice(6));
      const i = d.indexOf(':');
      if (i >= 0 && d.slice(0, i) === u && d.slice(i + 1) === p) return next();
    } catch (_) {}
  }
  return new Response('Authentication required', {
    status: 401, headers: { 'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"` }
  });
}

import { OAuth2Client, TokenPayload } from 'google-auth-library';

export async function verifyGoogleLogin(token: string): Promise<TokenPayload | undefined> {
  const client = new OAuth2Client(
    process.env.GOOGLE_AUTH_WEB_CLIENT_ID,
    process.env.GOOGLE_AUTH_WEB_CLIENT_SECRET,
    process.env.GOOGLE_AUTH_REDIRECT_URI
  );
  const res_token = await client.getToken(token);
  const id_token = res_token.tokens.id_token;
  const ticket = await client.verifyIdToken({
    idToken: id_token || '',
    audience: process.env.GOOGLE_AUTH_WEB_CLIENT_ID || ''
  });
  const payload = ticket.getPayload();
  return payload;
}

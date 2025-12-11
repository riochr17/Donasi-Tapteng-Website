export function maskThree(s: string) {
  return s.length <= 6 ? s : s.slice(0,3) + '*'.repeat(s.length - 6) + s.slice(-3);
}

export function maskEmail(email: string): string {
  const [user, domain] = email.split('@');
  if (!user || !domain) {
    return 'anonim';
  }
  if (user.length <= 2) return user[0] + '*@' + domain;

  const masked = user[0] + '*'.repeat(user.length - 2) + user[user.length - 1];
  return masked + '@' + domain;
}

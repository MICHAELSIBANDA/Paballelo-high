export function verifyAdminToken(token: string): boolean {
  if (!token) return false;
  
  try {
    // Simple token verification (in production, use proper JWT verification)
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    return decoded.includes(':');
  } catch {
    return false;
  }
}

export function getAdminToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('adminToken');
}

export function isAdminAuthenticated(): boolean {
  const token = getAdminToken();
  return verifyAdminToken(token || '');
}

export function logoutAdmin(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('adminToken');
  }
}

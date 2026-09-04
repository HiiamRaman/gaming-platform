export interface UserSession {
  id: string;
  username: string;
  email: string;
  credit: number;
  balance:number;
  currency: string;
  isVerified: boolean;
  isLoggedIn: boolean;
}

export interface LoginCredentials {
  identifier: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  role: string;
  firstName: string;
  lastName: string;
  cin: string;
  email: string;
  nationality: string;
  joinDate: string;
  licenseExpirationDate: string;
}

export interface PaginatedResponse {
  users: User[];
  total: number;
}

export interface UserState {
  users: User[];
  total: number;
  loading: boolean;
  error: string | null;
}

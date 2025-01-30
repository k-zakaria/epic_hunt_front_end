export interface Course {
  id?: number;
  title: string;
  url: string;
  price: number;
  content: string;
  createdAt?: string;
  publishedAt?: string;
  active: boolean;
}

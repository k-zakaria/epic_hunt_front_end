export interface Article {
  id?: number;
  title: string;
  body: string;
  views?: number;
  reaction?: Reaction;
  image: string;
  category: Category;
  author?: number;
}

export interface Reaction {
  likes: number;
  dislikes: number;
}

export interface Category {
  id: string;
  name: string;
  category: string;
  minimumWeight?: number;
  difficulty: string;
  points?: number;
}

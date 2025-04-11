export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  image_url?: string;
  tags: string[];
  created_at: string;
  updated_at: string;
  published: boolean;
  excerpt?: string;
  author?: string;
}

export interface BlogPostForm {
  title: string;
  content: string;
  image_url?: string;
  tags: string[];
  published: boolean;
  excerpt?: string;
  author?: string;
} 
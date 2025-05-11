export interface FrontMatterType {
  title: string;
  date: string;
  category: string;
  tags: string[];
  slug: string;
  description: string;
}

export interface PostType {
  content: string;
  data: FrontMatterType;
}

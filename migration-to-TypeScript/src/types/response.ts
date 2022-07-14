export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
}

export interface Source {
  id: string;
  name: string;
}

export interface HeadlinesNews {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface ResponseSourse {
  status: string;
  sources: NewsBlock[];
}

export interface Errors {
  status: number;
  code: string;
  message: string;
  testPartial: string;
}

interface NewsBlock {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

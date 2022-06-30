export interface Headlines {
    status: string;
    totalResults: number;
    articles: [];
}

export interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export interface Source {
    id: string;
    name: string;
}

export interface Errors {
    status: string;
    code: string;
    message: string;
}

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

export interface Headlines {
    status: string;
    totalResults: number;
    articles: [
        {
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
    ];
}

export interface ResponseObj {
    status: string;
    sources: [
        {
            id: string;
            name: string;
            description: string;
            url: string;
            category: string;
            language: string;
            country: string;
        }
    ];
}

export interface Everything {
    status: string;
    totalResults: number;
    articles: [
        {
            source: {
                id: string;
                name: string;
            };
            author: string;
            title: string;
            description: string;
            url: string;
            urlToImage: string;
            publishedAt: string;
            content: string;
        }
    ];
}

export interface LoadClass {
    baseLink: string;
    options?: {
        apiKey?: string;
    };
}

export interface Errors {
    status: number;
    code: string;
    message: string;
}

export type Callback<T> = (data?: T) => void;

export interface Options {
    sources?: string;
    apiKey?: string | never;
}

export interface Responce {
    ok: boolean;
    redirected: boolean;
    status: number;
    statusText: string;
    type: string;
    url: string;
}

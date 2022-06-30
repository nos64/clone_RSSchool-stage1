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
};

export interface Source {
    id: string;
    name: string;
};

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
        },
    ];
};

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
};

export interface Errors {
    status: string;
    code: string;
    message: string;
}

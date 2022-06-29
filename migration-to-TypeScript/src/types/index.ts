export interface Sources {
    status: string;
    sources: Array<string>;
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface Errors {
    status: string;
    code: string;
    message: string;
}

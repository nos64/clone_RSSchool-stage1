export interface Card {
    id: string,
    image: string,
    brand: string,
    model: string,
    year: string,
    color: string,
    colorID: string
    favorite: boolean,
    doors:  string,
    volume: string,
    quantity: string,
    inBasket?: boolean
}

// export type HTMLInput<T extends HTMLElement> = HTMLInputElement & {
//     type: string;
//     value: string;
//     dataset: T | string;
// }
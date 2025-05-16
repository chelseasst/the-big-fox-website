import { giftCard } from "./giftCard";

export interface basketItem {
    id: string,
    title:string
    price: number,
    pieces?: number,
    color?: string,
    quantity: number,
    images?: string[]
    giftCard?: giftCard
}

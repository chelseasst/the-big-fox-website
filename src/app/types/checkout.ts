export interface checkoutItem {
    id: string;
    quantity: number,
    type: string;
    images: string[],
    price: number
    color?: string
}
export interface giftCard {
    recipName: string,
    recipEmail?: string,
    recipAdress?: string,
    recipAdress2?: string,
    city: string,
    state?: string,
    zipCode?: number,
    country?: string,
    deliveryDate?: string,
    senderName: string,
    senderEmail?: string,
    message?: string,
    design:string,
    images?:string[]
}

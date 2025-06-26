import { giftCard } from "./giftCard";

export interface itemDetails {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  ingredients?: string;
  price: number;
  pieces?: number;
  materials?: string;
  images: string[];
  size?:string;
  color?: string;
  quantity?: number;
  giftCard?:giftCard
}


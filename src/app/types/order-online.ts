export interface orderItems {
  id: string;
  type: string;
  description: string;
  excessivedescription: string;
  ingredients?: string;
  price: number;
  peaces?: number;
  link:string;
  images: string[];
  color?:string
}
//remove the optional id

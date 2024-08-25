export interface orderItems {
  id?: string;
  type: string;
  description: string;
  excessivedescription: string;
  ingredients?: string;
  price: number;
  peaces?: number;
  pictures: string[];
}
//remove the optional id

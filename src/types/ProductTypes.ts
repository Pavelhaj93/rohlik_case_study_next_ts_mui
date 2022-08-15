export interface Product {
    name: string;
    id: string;
    image: string;
    price: {
      currency: string;
      full: number;
    };
    quantity?: number;
  }
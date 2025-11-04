
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';
declare module '*.svg';

export interface Product {
  id: number;
  name: string;
  price: number;
  discount?: number;
  imageUrl: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Country {
  name: string;
  code: string;
  flag: string;
}

export interface Foods {
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface FoodsResponse extends Foods {
  id: number;
  available: boolean;
}
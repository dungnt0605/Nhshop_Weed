export interface IProduct {
  details: {
    weight: string;
    color: string;
    origin: string;
    legal_age: number;
    expiry_date: string;
    usage_instructions: string;
  };
  _id: string;
  productName: string;
  slug: string;
  categoryId: string;
  original_price: number;
  stock_quantity: number;
  main_image: string;
  additional_images: Array<string>;
  description: string;
  featured: true;
}

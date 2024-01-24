// Type for a single product
export interface ProductType {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    quantity?: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}
  
// Type for an array of products
export type ProductsType = ProductType[];

export interface ProductState {
    product: ProductType;
    loading: boolean;
    currentImageIndex: number;
    limit: number;
}

export interface ProductsState {
    products: ProductsType;
    bestSellerProduct: ProductsType;
    page: number; 
    loading: boolean;
}

export interface RootType  {
    products: ProductsState;
    product: {
        product: ProductType;
        loading: boolean;
        currentImageIndex: number;
        limit: number;
    }
}
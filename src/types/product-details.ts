import { Product } from "./product";

export interface ProductDetails extends Product {
  brand: string,
  isStockAvailable: boolean,
  offerValidity: string,
  SKU: string,
  model: string,
  featureList: string[],

  options: {
    exchangeDevice: boolean
  },
  warranty: {
    warrentyText: string,
    warrentyType: string,
  }
}
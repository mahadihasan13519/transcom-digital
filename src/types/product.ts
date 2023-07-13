import { ProductInfo } from "./product-info";

export interface Product extends ProductInfo {
  isEmiAvailable: boolean,
  emiDuration?: number,
  emiPerMonth?: number,
  exchangeOffer: number,
}
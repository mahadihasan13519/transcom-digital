export interface ProductInfo {
  id: number,
  category: string,
  name: string,
  img: string,
  isDiscountAvaiable: boolean,
  discountPercentage: number,
  price: number,
  priceAfterDiscount: number,
  savedAmount?: number,
}
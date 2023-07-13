import cartData from "@/data/cart";
import { ProductInfo } from "@/types/product-info";
import { createContext } from "react";

export const CartContext = createContext<ProductInfo[]>([]);
export const SetCartContext = createContext((arg0: ProductInfo[]) => {});

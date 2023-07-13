"use client";

import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import { CartContext, SetCartContext } from "@/shared/cart-context";
import { ProductInfo } from "@/types/product-info";
import React from "react";
import { useState } from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<ProductInfo[]>([]);

  return (
    <CartContext.Provider value={cart}>
      <SetCartContext.Provider value={setCart}>
        <Header />
        {children}
        <Footer />
      </SetCartContext.Provider>
    </CartContext.Provider>
  );
}

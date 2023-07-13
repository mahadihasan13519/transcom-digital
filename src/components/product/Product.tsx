"use client";

import { Product } from "@/types/product";
import { addNumberSeparator } from "@/util/addNumberSeparator";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductModal from "./ProductModal";

export default function Product({ product }: { product: Product }) {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalShow(false);
    }, 3000);
  });

  return (
    <>
      <div className="col-6 col-md-4 col-lg-3 p-0">
        <div className="product-item">
          <div className="product-inner p-3 transition border-end">
            <div className="product-category mb-2 fs-12 text-muted">
              {product.category}
            </div>
            <Link
              href={
                `/product/` + product.category.toLowerCase() + `/` + product.id
              }
            >
              <h4 className="product-title fs-14">{product.name}</h4>
              <div className="product-image text-center position-relative">
                <picture>
                  <img src={product.img} alt="" className="img-fluid" />
                </picture>
                {product.isEmiAvailable && (
                  <div className="product-badge position-absolute d-block rounded-circle top-0 end-0 text-center shadow bg-white text-danger">
                    <span className="fs-12">EMI</span>
                    <div className="fw-bold">{product.emiDuration}</div>
                  </div>
                )}
              </div>
            </Link>
            <div className="product-policy mb-2 fs-12">
              {product.isEmiAvailable && (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                    />
                  </svg>
                  EMI From {product.emiPerMonth} Tk/month
                </span>
              )}
              <br />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  />
                </svg>
                Get Exchange up to {product.exchangeOffer} Tk
              </span>
            </div>
            <div className="product-price mb-2">
              {product.isDiscountAvaiable ? (
                <>
                  <span className="main-price fs-20 fw-bold">
                    &#2547;{addNumberSeparator(product.priceAfterDiscount)}
                  </span>
                  <del className="discount-price text-danger fs-12">
                    &#2547; {addNumberSeparator(product.price)}
                  </del>
                  <span className="discount-total badge bg-danger">
                    {product.discountPercentage} %
                  </span>
                </>
              ) : (
                <>
                  <span className="main-price fs-20 fw-bold">
                    &#2547; {addNumberSeparator(product.price)}
                  </span>
                </>
              )}
            </div>
          </div>
          <div
            className="product-action opacity-0 transition border-top p-2 mt-2"
            onClick={() => setModalShow(true)}
          >
            <div className="btn col-12 bg-dark text-white">Quick View</div>
            <ProductModal product={product} show={modalShow} />
          </div>
        </div>
      </div>
    </>
  );
}

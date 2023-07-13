import { Product } from "@/types/product";
import { addNumberSeparator } from "@/util/addNumberSeparator";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ProductModalProps {
  product: Product;
  show: boolean;
}

export default function ProductModal(props: ProductModalProps) {
  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.product.category}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
        <picture>
          <img src={props.product.img} alt="" className="img-fluid" />
        </picture>
        <div className="product-price mb-2">
          <h3 style={{ marginBottom: "10px" }}>{props.product.name}</h3>
          {props.product.isDiscountAvaiable ? (
            <>
              <span className="main-price fs-20 fw-bold">
                &#2547;{addNumberSeparator(props.product.priceAfterDiscount)}
              </span>
              <del className="discount-price text-danger fs-12">
                &#2547; {addNumberSeparator(props.product.price)}
              </del>
              <span className="discount-total badge bg-danger">
                {props.product.discountPercentage} %
              </span>
            </>
          ) : (
            <>
              <span className="main-price fs-20 fw-bold">
                &#2547; {addNumberSeparator(props.product.price)}
              </span>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

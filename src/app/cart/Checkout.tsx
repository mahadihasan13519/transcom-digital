import { addNumberSeparator } from "@/util/addNumberSeparator";

interface CheckoutProps {
  subTotal: number;
  total: number;
  totalSaving: number;
}

export default function Checkout(props: CheckoutProps) {
  return (
    <>
      <div className="col-lg-4 mt-5 mt-md-0">
        <div className="section-title border-bottom pb-3 mb-3">
          <h3 className="d-inline align-bottom fs-20 fw-bold">Order Summary</h3>
        </div>
        <div className="cart-summary d-block border rounded p-4 mb-3">
          <div className="row fs-16 border-bottom pb-3">
            <div className="col-6">Subtotal:</div>
            <div className="col-6 text-end">
              &#2547;{addNumberSeparator(props.subTotal)}
            </div>
          </div>
          <div className="row fs-16 mb-3 pt-3 fw-bold">
            <div className="col-6">Total:</div>
            <div className="col-6 text-end">
              &#2547;{addNumberSeparator(props.total)}
            </div>
          </div>
          <div className="row fs-16 border-top pt-3 fw-bold">
            <div className="col-6 fs-14">Total Saving:</div>
            <div className="col-6 text-end fs-14">
              &#2547;{addNumberSeparator(props.totalSaving)}
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="fs-12">
              By clicking this button, you agree with the{" "}
              <a href="" className="text-primary fw-bold">
                Terms & Conditions
              </a>
              .
            </span>
            {/* <Link
              href="/checkout"
              className="btn bg-red d-block text-white fw-bold mt-2"
            >
              Checkout
            </Link> */}
            <button
              className="btn bg-red col-12 text-white fw-bold mt-2"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

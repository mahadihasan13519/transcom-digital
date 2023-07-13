export default function Home() {
  return (
    <>
      <section className="cart-area my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title border-bottom pb-3 mb-3">
                <h3 className="d-inline align-bottom fs-20 fw-bold">
                  Checkout Process
                </h3>
              </div>
              <div className="checkout-process mb-5">
                <div className="row justify-content-center align-items-center">
                  <div className="col-6 col-lg-4 text-end d-flex justify-content-end fw-bold">
                    <span className="step-icon text-white fs-18">
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
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <span className="step-title text-start mx-2 fs-16">
                      01. <br />
                      Customer Info
                    </span>
                  </div>
                  <div className="col-lg-1 text-center d-none d-lg-block">
                    <span className="d-block border-top border-2 border-danger"></span>
                  </div>
                  <div className="col-6 col-lg-4 text-end d-flex">
                    <span className="step-icon text-white fs-18">
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
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <span className="step-title text-start mx-2 fs-16">
                      02. <br />
                      Shipping Info
                    </span>
                  </div>
                </div>
              </div>
              <div className="billing-info mb-5">
                <div className="section-title border-bottom pb-3 mb-3">
                  <h3 className="d-inline align-bottom fs-20 fw-bold">
                    Billing Information
                  </h3>
                </div>
                <a
                  href=""
                  className="info p-5 d-block rounded bg-light fs-20"
                  data-bs-toggle="modal"
                  data-bs-target="#billingModal"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-20 h-20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                  Add New Address
                </a>

                <div className="my-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label fw-bold"
                    htmlFor="exampleCheck1"
                  >
                    Shipping address will same as billing address
                  </label>
                </div>
              </div>
              <div className="shipping-info mb-5">
                <div className="section-title border-bottom pb-3 mb-3">
                  <h3 className="d-inline align-bottom fs-20 fw-bold">
                    Shipping Information
                  </h3>
                </div>
                <a
                  href=""
                  className="info p-5 d-block rounded bg-light fs-20"
                  data-bs-toggle="modal"
                  data-bs-target="#shippingModal"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-20 h-20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                  Add New Address
                </a>
              </div>
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 fs-10">
                  By clicking the next button, you agree with the{" "}
                  <a href="" className="text-primary fw-bold">
                    Terms & Conditions.
                  </a>
                </div>
                <div className="col-lg-3 text-center">
                  <a href="" className="text-red">
                    Back
                  </a>
                </div>
                <div className="col-lg-3">
                  <a href="" className="btn bg-red d-block text-white">
                    Next
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5 mt-md-0">
              <div className="section-title border-bottom pb-3 mb-3">
                <h3 className="d-inline align-bottom fs-20 fw-bold">
                  Order Summary
                </h3>
              </div>
              <div className="cart-summary d-block border rounded p-4 mb-3">
                <ul
                  className="border-bottom mb-3"
                  style={{ listStyleType: "circle" }}
                >
                  <li className="mb-3 d-flex">
                    <div className="col-8">
                      Hitachi Stylish Bottom Freezer | R-BG410P6PBX (XGR) | 366L
                    </div>
                    <div className="col-1">x1</div>
                    <div className="col-3 fw-bold">&#2547;1,03,500</div>
                  </li>
                  <li className="mb-3 d-flex">
                    <div className="col-8">
                      Hitachi Stylish Bottom Freezer | R-BG410P6PBX (XGR) | 366L
                    </div>
                    <div className="col-1">x1</div>
                    <div className="col-3 fw-bold">&#2547;1,03,500</div>
                  </li>
                </ul>
                <div className="row fs-16 mb-3">
                  <div className="col-6">Subtotal:</div>
                  <div className="col-6 text-end">&#2547;2,53,400</div>
                </div>
                <div className="row fs-16 mb-3">
                  <div className="col-6">Delivery Charge:</div>
                  <div className="col-6 text-end">&#2547;0</div>
                </div>
                <div className="row fs-16 mb-3 border-top pt-3 fw-bold">
                  <div className="col-6">Total:</div>
                  <div className="col-6 text-end">&#2547;0</div>
                </div>
                <div className="row fs-16 mb-3 border-top pt-3 fw-bold">
                  <div className="col-6 fs-14">Total Saving:</div>
                  <div className="col-6 text-end fs-14">&#2547;4,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

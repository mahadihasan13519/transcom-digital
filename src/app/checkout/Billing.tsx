function BillingModal() {
  return (
    <>
      <div
        className="modal fade"
        id="billingModal"
        tabIndex={-1}
        aria-labelledby="billingModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="billingModalLabel">
                Billing Address
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="" className="form-label fw-bold">
                        Address Label
                        <span className="text-black">
                          <sup>*</sup>
                        </span>
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select..</option>
                        <option value="1">Home</option>
                        <option value="2">Office</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="" className="form-label fw-bold">
                        First Name
                        <span className="text-black">
                          <sup>*</sup>
                        </span>
                      </label>
                      <input
                        type="text"
                        name=""
                        placeholder=""
                        id=""
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="" className="form-label fw-bold">
                        Last Name
                        <span className="text-black">
                          <sup>*</sup>
                        </span>
                      </label>
                      <input
                        type=""
                        name=""
                        placeholder=""
                        id=""
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="" className="form-label fw-bold">
                        Phone Number
                        <span className="text-black">
                          <sup>*</sup>
                        </span>
                      </label>
                      <input
                        type="text"
                        name=""
                        placeholder=""
                        id=""
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="" className="form-label fw-bold">
                        Email Address
                      </label>
                      <input
                        type=""
                        name=""
                        placeholder=""
                        id=""
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="" className="form-label fw-bold">
                        Division
                        <span className="text-black">
                          <sup>*</sup>
                        </span>
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select..</option>
                        <option value="1">Barisal</option>
                        <option value="2">Chittagong</option>
                        <option value="3">Dhaka</option>
                        <option value="4">Khulna</option>
                        <option value="5">Mymensingh</option>
                        <option value="6">sylhtet</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label fw-bold">
                      District
                      <span className="text-black">
                        <sup>*</sup>
                      </span>
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select..</option>
                      <option value="1">Barisal</option>
                      <option value="2">Chittagong</option>
                      <option value="3">Dhaka</option>
                      <option value="4">Khulna</option>
                      <option value="5">Mymensingh</option>
                      <option value="6">sylhtet</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="" className="form-label fw-bold">
                        Thana/Upazilla
                        <span className="text-black">
                          <sup>*</sup>
                        </span>
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select..</option>
                        <option value="1">Barisal</option>
                        <option value="2">Chittagong</option>
                        <option value="3">Dhaka</option>
                        <option value="4">Khulna</option>
                        <option value="5">Mymensingh</option>
                        <option value="6">sylhtet</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="" className="form-label fw-bold">
                        Postal Code
                      </label>
                      <input
                        type=""
                        name=""
                        placeholder="Type here"
                        id=""
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="" className="form-label fw-bold">
                        Land Mark
                      </label>
                      <input
                        type=""
                        name=""
                        placeholder="Type here"
                        id=""
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="" className="form-label fw-bold">
                        Road Number/Number
                        <span className="text-black">
                          <sup>*</sup>
                        </span>
                      </label>
                      <input
                        type="text"
                        name=""
                        placeholder="Type here"
                        id=""
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="" className="form-label fw-bold">
                        House Number/Block Number
                        <span className="text-black">
                          <sup>*</sup>
                        </span>
                      </label>
                      <input
                        type="text"
                        name=""
                        placeholder="Type here"
                        id=""
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="" className="form-label fw-bold">
                        Flat Number
                      </label>
                      <input
                        type=""
                        name=""
                        placeholder="Type here"
                        id=""
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn bg-red text-white">
                Add New
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CheckoutModal() {
  return (
    <>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex={-1}
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="loginModalLabel">
                Log In
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="mb-3">
                Welcome back! Enter your mobile phone number to log in to your
                account. If you are a new user, your account will be created.
              </p>
              <form action="" method="" autoComplete="off">
                <div className="form-group mb-3">
                  <label htmlFor="" className="form-label d-block fw-bold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name=""
                    id="phone"
                    className="form-control"
                    placeholder="Enter phone number here..."
                  />
                </div>
                <button type="submit" className="btn bg-red text-white col-12">
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

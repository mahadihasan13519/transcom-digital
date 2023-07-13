import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//TODO: products dropdown menu

export default function Navigation() {
  return (
    <>
      <div className="header-bottom-area py-3 border-bottom fw-bold d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <ul className="menu">
                <li className="d-inline">
                  <a href="#" className="p-3">
                    Products{" "}
                    <span>
                      <FontAwesomeIcon icon={faChevronDown} size="lg" />
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#" className="d-flex justify-between">
                        <div className="col">Refrigaretors</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-between">
                        <div className="col">TV | AV</div>
                        <div className="col-3 text-end">
                          <FontAwesomeIcon icon={faChevronRight} size="sm" />
                        </div>
                      </a>
                      <ul className="sub-menu-2">
                        <li>
                          <a href="#" className="d-flex justify-between">
                            <div className="col">Samsung</div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-flex justify-between">
                            <div className="col">Sony</div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-flex justify-between">
                            <div className="col">Walton</div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-flex justify-between">
                            <div className="col">Hitachi</div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-flex justify-between">
                            <div className="col">Rangs</div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-flex justify-between">
                            <div className="col">LG</div>
                            <div className="col-3 text-end">
                              <FontAwesomeIcon
                                icon={faChevronRight}
                                size="sm"
                              />
                            </div>
                          </a>
                          <ul className="sub-menu-3">
                            <li>
                              <a href="#" className="d-flex justify-between">
                                <div className="col">M-2023</div>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="d-flex justify-between">
                                <div className="col">M-6590</div>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="d-flex justify-between">
                                <div className="col">M-6549</div>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="d-flex justify-between">
                                <div className="col">M-3915</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-between">
                        <div className="col">Smart Phones</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="d-inline">
                  <a href="#" className="p-3">
                    Brands
                  </a>
                </li>
                <li className="d-inline">
                  <a href="#" className="p-3">
                    Shohoj Kisti
                  </a>
                </li>
                <li className="d-inline">
                  <a href="#" className="p-3">
                    Exchange
                  </a>
                </li>
                <li className="d-inline">
                  <a href="#" className="p-3">
                    Gift Voucher
                  </a>
                </li>
                <li className="d-inline">
                  <a href="#" className="p-3">
                    Campaign
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="actions text-end">
                <a href="#" className="px-3">
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Wishlist
                </a>
                <a href="/login" className="px-3">
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
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Log In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

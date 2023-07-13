"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "@/shared/cart-context";

//TODO: fix responsive icon show and hide

export const Search = () => {
  const toggleMenu = () => {};
  const cart = useContext(CartContext);

  return (
    <>
      <div className="header-middle-area py-3 border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-1 d-lg-none">
              <div onClick={toggleMenu} id="open-menu-icon">
                <FontAwesomeIcon icon={faBars} size="lg" />
              </div>
              <div onClick={toggleMenu} id="close-menu-icon" className="d-none">
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </div>
            </div>
            <div className="col-5 col-lg-2">
              <Link href="/" className="header-logo">
                <picture>
                  <img
                    src="https://transcomdigital.com/_next/image?url=%2Ficons%2Ftranscom_logo.svg&w=1500&q=100"
                    alt=""
                  />
                </picture>
              </Link>
            </div>
            <div className="col-6 col-lg-8 d-none d-lg-block">
              <form action="" className="search position-relative">
                <div className="form-group">
                  <input type="text" name="" id="" className="form-control" />
                  <button
                    type="submit"
                    className="position-absolute top-0 end-0 d-block bg-danger text-white rounded border-0"
                  >
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
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-4 offset-2 col-lg-2 offset-lg-0 text-end">
              <div className="row">
                <Link href="/" className="col">
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
                </Link>
                <Link href="/cart" className="col">
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
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <span>{cart.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import Product from "@/components/product/Product";
import products from "@/data/products";

export default function RelatedProducts() {
  return (
    <>
      <section className="related-products-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title border-middle pb-3 mb-3">
                <h3 className="d-inline fs-20 fw-bold align-middle">
                  Related Products
                </h3>
                <a href="" className="btn btn-default btn-sm text-danger">
                  See All
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
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            {/* products coming from data folder */}
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

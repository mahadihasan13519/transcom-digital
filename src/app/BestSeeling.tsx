import SeeAllBtn from "@/components/SeeAllBtn";
import Product from "@/components/product/Product";
import products from "@/data/products";

export default function BestSelling() {
  return (
    <>
      <section className="best-deals-area mb-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title border-middle pb-3 mb-3">
                <h3 className="d-inline fs-20 fw-bold align-middle">
                  Best Selling
                </h3>
                <SeeAllBtn href="/best-selling" />
              </div>
            </div>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

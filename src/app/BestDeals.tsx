import SeeAllBtn from "@/components/SeeAllBtn";
import Product from "@/components/product/Product";
import products from "@/data/products";

export default function BestDeals() {
  return (
    <>
      <section className="best-deals-area mb-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title border-middle pb-3 mb-3">
                <h3 className="d-inline fs-20 fw-bold align-middle">
                  Best Deals
                </h3>
                <SeeAllBtn href="/best-deals" />
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

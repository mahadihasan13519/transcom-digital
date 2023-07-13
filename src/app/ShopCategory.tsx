import SeeAllBtn from "@/components/SeeAllBtn";
import categories from "@/data/shop-category";

export default function ShopCategory() {
  return (
    <>
      <section className="category-area mb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title border-middle pb-3 mb-3">
                <h3 className="d-inline align-middle fs-20 fw-bold">
                  Shop By Category
                </h3>
                <SeeAllBtn href="/shop-category" />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {categories.map((category, index) => (
              <div className="category-item text-center p-3" key={index}>
                <picture>
                  <img
                    src={category.imageSrc}
                    alt=""
                    className="img-fluid mx-auto"
                  />
                </picture>
                <h4 className="fs-15">{category.categoryName}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

//TODO: Move Next Button Doesn't Work

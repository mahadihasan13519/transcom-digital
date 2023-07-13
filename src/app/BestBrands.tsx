import SeeAllBtn from "@/components/SeeAllBtn";

export default function Brands({ brands }: { brands: string[] }) {
  return (
    <>
      <section className="brands-area mb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title border-middle pb-3 mb-3">
                <h3 className="d-inline fs-20 fw-bold align-middle">
                  Explore Brands
                </h3>
                <SeeAllBtn href="/brands" />
              </div>
            </div>
            {brands.map((brand, index) => {
              return (
                <div key={index} className="col-lg-2">
                  <div className="brand-item text-center">
                    <picture>
                      <img src={brand} alt="" className="img-fluid" />
                    </picture>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

import brands from "@/data/brands";
import BestBrands from "./BestBrands";
import BestDeals from "./BestDeals";
import BestSelling from "./BestSeeling";
import Slider from "./Slider";
import sliderImages from "@/data/slider-images";
import ShopCategory from "./ShopCategory";
import About from "./About";

export default function Home() {
  return (
    <>
      <Slider sliderImages={sliderImages} />
      <BestDeals />
      <ShopCategory />
      <BestSelling />
      <BestBrands brands={brands} />
      <About />
    </>
  );
}

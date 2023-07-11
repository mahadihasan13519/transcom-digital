"use client";

import Carousel from "react-bootstrap/Carousel";

export default function Slider({ sliderImages }: { sliderImages: string[] }) {
  return (
    <>
      <section className="slider-area my-5">
        <div className="container">
          <Carousel>
            <Carousel.Item>
              <picture>
                <img
                  className="d-block w-100"
                  src={sliderImages[0]}
                  alt="First slide"
                />
              </picture>
            </Carousel.Item>
            <Carousel.Item>
              <picture>
                <img
                  className="d-block w-100"
                  src={sliderImages[1]}
                  alt="First slide"
                />
              </picture>
            </Carousel.Item>
            <Carousel.Item>
              <picture>
                <img
                  className="d-block w-100"
                  src={sliderImages[2]}
                  alt="First slide"
                />
              </picture>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}

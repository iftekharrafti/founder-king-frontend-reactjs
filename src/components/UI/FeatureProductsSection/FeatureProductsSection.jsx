import React from "react";
import Section from "../../templates/Section/Section";
import GridTemplate from "../GridTemplate/GridTemplate";
import ProductCard from "../../atoms/PorductCard/PorductCard";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import { Swiper, SwiperSlide } from "swiper/react";

const FeatureProductsSection = ({
  products,
  heading,
  ProductCardComponent,
}) => {
  return (
    <section className="py-1 md:px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Section heading={heading}>
          {/* <GridTemplate columns={4} gap={6} className="mt-8"> */}
          <SwiperSlider
            lg={4}
            md={4}
            sm={2}
            icon={true}
            autoplay={true}
            paginationBtn={false}
            slidesPerView={2}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                {/* <ProductCard key={product.id} product={product} /> */}
                <ProductCardComponent key={product.id} product={product} />
              </SwiperSlide>
            ))}
          </SwiperSlider>

          {/* </GridTemplate> */}
        </Section>
      </div>
    </section>
  );
};

export default FeatureProductsSection;

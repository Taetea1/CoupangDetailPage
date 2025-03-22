import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // 네비게이션 모듈 가져오기
import "swiper/css";
import "swiper/css/navigation";
import "./SwiperProduct.css";
import AdditionalProduct from "./element/AdditionalProduct";
import { todayProduct } from "./data/todayProduct";

const shuffleData = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const SwiperProduct = (props) => {
  const { type, title, colorText } = props;
  return (
    <div className="today-box">
      <div className={type === "deleteEl" ? "deleteEl-title" : "product-title"}>
        {title}
        <span className={type === "red" ? "red" : "purple"}>{colorText}</span>
      </div>
      <div className="swiper-wrap">
        <Swiper
          modules={[Navigation]} // 네비게이션 모듈 추가
          spaceBetween={50}
          slidesPerView={5}
          slidesPerGroup={5}
          navigation={{
            nextEl: ".swiper-button-next", // 다음 버튼
            prevEl: ".swiper-button-prev", // 이전 버튼
          }}
        >
          {shuffleData(todayProduct).map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <AdditionalProduct type={type} item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* 네비게이션 버튼 */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default SwiperProduct;

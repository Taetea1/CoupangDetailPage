import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // 네비게이션 모듈 가져오기
import "swiper/css";
import "swiper/css/navigation";
import "./SwiperProduct.css";
import AdditionalProduct from "./element/AdditionalProduct";
import { todayProduct } from "./data/todayProduct";
import { useRef, useState, useEffect } from "react";

const shuffleData = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const SwiperProduct = (props) => {
  const { type, title, sub, colorText, scale, slice } = props;

  // 네비게이션 버튼을 위한 useRef
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null); // Swiper 인스턴스 저장

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]); // Swiper 인스턴스가 설정될 때만 실행

  return (
    <div className="today-box">
      <div className={type === "deleteEl" ? "deleteEl-title" : "product-title"}>
        {title}
        <span className={type === "red" ? "red" : "purple"}>{colorText}</span>
        <span className="ad">{sub}</span>
      </div>
      <div className="swiper-wrap">
        <Swiper
          modules={[Navigation]} // 네비게이션 모듈 추가
          spaceBetween={50}
          slidesPerView={5}
          slidesPerGroup={5}
          onSwiper={setSwiperInstance} // Swiper 인스턴스를 상태로 저장
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }} // ref 연결
        >
          {shuffleData(todayProduct).map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <AdditionalProduct type={type} scale={scale} item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* 네비게이션 버튼 */}
        <div
          ref={prevRef}
          className={`swiper-button-prev ${
            type === "deleteEl"
              ? "swiper-delete-prev"
              : type === "red"
              ? "swiper-red-prev"
              : "swiper-remain-prev"
          }`}
        ></div>
        <div
          ref={nextRef}
          className={`swiper-button-next ${
            type === "deleteEl"
              ? "swiper-delete-next"
              : type === "red"
              ? "swiper-red-next"
              : "swiper-remain-next"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default SwiperProduct;

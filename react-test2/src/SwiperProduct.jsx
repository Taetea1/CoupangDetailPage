import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // 네비게이션 모듈 가져오기
import "swiper/css";
import "swiper/css/navigation";
import "./SwiperProduct.css";
import AdditionalProduct from "./element/AdditionalProduct";
import { todayProduct } from "./data/todayProduct";
import { useRef, useState, useEffect } from "react";
import brandimg from "./img/brandLogo.png";

const shuffleData = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const SwiperProduct = (props) => {
  const { type, title, sub, colorText, scale, num } = props;

  // 네비게이션 버튼을 위한 useRef
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null); // Swiper 인스턴스 저장

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      setTimeout(() => {
        if (swiperInstance?.params?.navigation) {
          swiperInstance.params.navigation.prevEl = prevRef.current;
          swiperInstance.params.navigation.nextEl = nextRef.current;
          swiperInstance.navigation.init();
          swiperInstance.navigation.update();
        }
      }, 100); // Swiper가 완전히 생성된 후 실행
    }
  }, [swiperInstance]);

  return (
    <div className="today-box">
      <div
        className={
          type === "deleteEl" || type === "deleteEl-dif"
            ? "deleteEl-title"
            : "product-title"
        }
      >
        {title}
        <span className={type === "red" ? "red" : "purple"}>{colorText}</span>
        <span className="ad">{sub}</span>
      </div>
      <div className="swiper-wrap">
        <Swiper
          modules={[Navigation]} // 네비게이션 모듈 추가
          spaceBetween={14}
          breakpoints={{
            480: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            645: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            900: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1024: {
              slidesPerView: num === 7 ? 7 : 5, // 조건부 적용
              slidesPerGroup: num === 7 ? 7 : 5,
            },
          }}
          onSwiper={setSwiperInstance} // Swiper 인스턴스를 상태로 저장
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }} // ref 연결
        >
          <>
            {shuffleData(todayProduct)
              .slice(0, type === "deleteEl-dif" ? 4 : todayProduct.length)
              .map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <AdditionalProduct type={type} scale={scale} item={item} />
                  </SwiperSlide>
                );
              })}
            {type === "deleteEl-dif" ? (
              <SwiperSlide>
                <div className="brand-info">
                  <div className="brand-info-img">
                    <img src={brandimg} alt="브랜드로고" />
                  </div>
                  <div className="brand-info-text">
                    같은 브랜드 상품을 한곳에서 모아볼 수 있어요!
                  </div>
                  <div className="brand-info-num">
                    총 <span>162</span> 개
                  </div>
                  <div className="brand-info-btn">브랜드샵 구경할까요?</div>
                </div>
              </SwiperSlide>
            ) : (
              <></>
            )}
          </>
        </Swiper>

        {/* 네비게이션 버튼 */}
        <div
          ref={prevRef}
          className={`swiper-button-prev ${
            type === "deleteEl"
              ? "swiper-delete-prev"
              : type === "red"
              ? "swiper-red-prev"
              : type !== "deleteEl-dif"
              ? "swiper-remain-prev"
              : "swiper-none"
          }`}
        ></div>
        <div
          ref={nextRef}
          className={`swiper-button-next ${
            type === "deleteEl"
              ? "swiper-delete-next"
              : type === "red"
              ? "swiper-red-next"
              : type !== "deleteEl-dif"
              ? "swiper-remain-next"
              : "swiper-none"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default SwiperProduct;

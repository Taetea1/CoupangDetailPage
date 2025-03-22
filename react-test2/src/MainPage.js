import "./App.css";
import MainTop from "./MainTop";
import SwiperProduct from "./SwiperProduct";
import Category from "./category/Category";

const MainPage = () => {
  return (
    <div className="main-wrap">
      <div className="flexbox">
        {/* 메인 탑부분 */}
        <MainTop />
      </div>

      {/* 쿠팡 오늘의 판매자 특가 */}
      <SwiperProduct type="red" title="오늘의 " colorText="판매자 특가" />

      {/* 해당 상품 카테고리 */}
      <Category />

      {/* 글로벌 특가 */}
      <div className="global-sale">
        <SwiperProduct title="다른 고객이 함께 구매한 상품" type="deleteEl" />
      </div>

      {/* 글로벌 특가 */}
      <div className="global-sale">
        <SwiperProduct
          type="purple"
          title="전세계 핫딜 "
          colorText="로켓직구 글로벌특가"
        />
      </div>
    </div>
  );
};

export default MainPage;

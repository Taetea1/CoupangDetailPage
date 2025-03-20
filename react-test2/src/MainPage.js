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
      <SwiperProduct />

      {/* 해당 상품 카테고리 */}
      <Category />
    </div>
  );
};

export default MainPage;

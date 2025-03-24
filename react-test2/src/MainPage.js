import "./App.css";
import MainTop from "./MainTop";
import SwiperProduct from "./SwiperProduct";
import Category from "./category/Category";
import CoupangTag from "./element/CoupangTag";
import { tagCategory } from "./data/tagCategory";

const MainPage = () => {
  return (
    <div className="main-wrap">
      {/* 종류 카테고리 */}
      <ul className="coupang-tag-box">
        {tagCategory.map((cate, i) => (
          <CoupangTag key={i} name={cate.name} type={cate.type} />
        ))}
      </ul>

      <div className="flexbox">
        {/* 메인 탑부분 */}
        <MainTop />
      </div>

      {/* 함께 비교하면 좋을 상품 */}
      <div className="global-sale">
        <SwiperProduct
          title="함께 비교하면 좋을 상품"
          sub="광고"
          type="deleteEl"
        />
      </div>

      {/* 쿠팡 오늘의 판매자 특가 */}
      <div className="toygate-sale">
        <SwiperProduct type="red" title="오늘의 " colorText="판매자 특가" />
      </div>

      {/* 해당 상품 카테고리 */}
      <Category />

      <div className="with-product">
        {/* 다른 고객이 함께 구매한 상품 */}
        <div className="global-sale">
          <SwiperProduct title="다른 고객이 함께 구매한 상품" type="deleteEl" />
        </div>

        {/* 토이게이트의 다른 상품들->**이거 컴포넌트 다시 만들기 */}
        <div className="toygate-sale">
          <SwiperProduct
            title="토이게이트의 다른 상품들"
            type="deleteEl-dif"
            scale="false"
          />
        </div>
      </div>

      {/* 연관 추천 상품광고 */}
      <div className="global-sale">
        <SwiperProduct title="연관 추천 상품" sub="광고" type="deleteEl" />
      </div>

      {/* 글로벌 특가 */}
      <div className="global-sale">
        <SwiperProduct
          type="purple"
          title="전세계 핫딜 "
          colorText="로켓직구 글로벌특가"
          num={7}
        />
      </div>

      <div className="relation-product-box">
        <div className="relation-product-title">이 상품과 관련된 카테고리</div>
        <div className="link-box">
          <a href="https://www.coupang.com/np/categories/333113">
            업라이트피아노
          </a>
          <div className="relation-product-link"></div>
          <a href="https://www.coupang.com/np/categories/333114">
            그랜드피아노
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

import product from "./img/product1.jpg";

const AdditionalProduct = () => {
  return (
    <div>
      <img src={product} alt="상품이미지" />
      <div>특가진행중</div>
      <div>상품이름</div>
      <div>
        <div>와우할인가</div>
        <div>상품 원래 가격</div>
      </div>
      <div>모레(토) 도착 예정</div>
      <div>무료배송</div>
    </div>
  );
};

export default AdditionalProduct;

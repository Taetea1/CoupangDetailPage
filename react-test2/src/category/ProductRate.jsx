import { Rate } from "antd";

const ProductRate = () => {
  return (
    <div>
      <div>상품펑</div>
      <div>
        동일한 상품에 대해 작성된 상품평으로, 판매자는 다를 수 있습니다.
      </div>
      <Rate disabled value={4.5} className="my-custom-rate" />
    </div>
  );
};

export default ProductRate;

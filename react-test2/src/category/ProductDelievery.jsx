import "./ProductDelievery.css";
import ProductDelieveryTable from "../element/ProductDeliveryTable";
import DelieveryTable from "../element/DelieveryTable";
import ConfirmInfo from "../element/ConfirmInfo";
import { delieveryInfo } from "../data/ProductDeliveryInfo";
import { confirmData } from "../data/confirmData";

const ProductDelievery = () => {
  return (
    <>
      <DelieveryTable />
      {delieveryInfo.map((item, i) => {
        return (
          <div key={i}>
            <ProductDelieveryTable item={item} />
          </div>
        );
      })}
      <div className="cancel-info">
        미성년자가 체결한 계약은 법정대리인이 동의하지 않는 경우 본인 또는
        법정대리인이 취소할 수 있습니다.
      </div>
      <div className="confirm-title">상품인증정보</div>
      {confirmData.map((item, i) => (
        <ConfirmInfo key={i} item={item} />
      ))}
    </>
  );
};

export default ProductDelievery;

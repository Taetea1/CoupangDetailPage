import { Rate, Progress } from "antd";
import "./AdditionalProduct.css";

// 각 이미지 컴포넌트
const AdditionalProduct = (props) => {
  const { type, item } = props;
  return (
    <div>
      <img className="image-box" src={item.src} alt="상품이미지" />
      <div className={type === "deleteEl" ? "deleteElement" : "badge"}>
        특가진행중
      </div>
      <div className="product-name">{item.title}</div>
      <div className={type === "deleteEl" ? "deleteElement" : "percent-price"}>
        <div className="wow">와우할인가</div>
        <div className="origin-price">
          {item.sale}% <span>{item.orginPrice}</span>
        </div>
      </div>
      <div className="now-price">{item.price}원</div>
      <div className={type === "deleteEl" ? "deleteElement" : "arrive"}>
        {item.arriveDate} 도착 예정
      </div>
      <div className={type === "deleteEl" ? "deleteElement" : "free-delievery"}>
        무료배송
      </div>
      {item.rate ? (
        <>
          <Rate allowHalf defaultValue={2.5} disabled />
          <span className="rate-text">({item.rate})</span>
        </>
      ) : (
        ""
      )}
      <br />
      <Progress
        className={type === "deleteEl" ? "deleteElement" : ""}
        percent={50}
        strokeColor="#454f5b"
        format={() => (
          <span className="custom-progress-text">{item.percent}% 남음</span>
        )}
        style={{ width: 160 }}
      />
    </div>
  );
};

export default AdditionalProduct;

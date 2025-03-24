import { Rate, Progress } from "antd";
import "./AdditionalProduct.css";

// 각 이미지 컴포넌트
const AdditionalProduct = (props) => {
  const { type, scale, item } = props;
  return (
    <div>
      <div className="image-wrap">
        <img
          className={`image-box ${
            scale === "false" || type !== "deleteEl" ? "" : "image-box-scale"
          }`}
          src={item.src}
          alt="상품이미지"
        />
      </div>

      <div
        className={
          type === "deleteEl" || type === "deleteEl-dif"
            ? "deleteElement"
            : "badge"
        }
      >
        특가진행중
      </div>
      <div
        className={`product-name ${
          type === "deleteEl"
            ? "product-name-blue"
            : scale === "false"
            ? "title-botton-line"
            : ""
        }`}
      >
        {item.title}
      </div>
      <div
        className={
          type === "deleteEl" || type === "deleteEl-dif"
            ? "deleteElement"
            : "percent-price"
        }
      >
        <div className="wow">와우할인가</div>
        <div className="origin-price">
          {item.sale}% <span>{item.orginPrice}</span>
        </div>
      </div>
      <div className="now-price">{item.price}원</div>
      <div
        className={
          type === "deleteEl" || type === "deleteEl-dif"
            ? "deleteElement"
            : "arrive"
        }
      >
        {item.arriveDate} 도착 예정
      </div>
      <div
        className={
          type === "deleteEl" || type === "deleteEl-dif"
            ? "deleteElement"
            : "free-delievery"
        }
      >
        무료배송
      </div>
      {item.rate ? (
        <>
          <Rate allowHalf defaultValue={item.rateStar} disabled />
          <span className="rate-text">({item.rate})</span>
        </>
      ) : (
        ""
      )}
      <br />
      <Progress
        className={
          type === "deleteEl" || type === "deleteEl-dif" ? "deleteElement" : ""
        }
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

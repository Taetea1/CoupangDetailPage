import "./ProductQnA.css";
import ProductAnswer from "./ProductAnswer";
import { QnAData } from "../data/QnA";

const ProductQnA = () => {
  return (
    <div className="product-qna-box">
      <div className="product-qna">
        <div className="title-box">
          <div className="title-text">상품문의</div>
          <div className="qnaBtn">문의하기</div>
        </div>
        <ul className="qna-info-box">
          <li>
            구매한 상품의{" "}
            <strong>취소/반품은 마이쿠팡 구매내역에서 신청</strong> 가능합니다.
          </li>
          <li>
            상품문의 및 후기게시판을 통해 취소나 환불, 반품 등은 처리되지
            않습니다.
          </li>
          <li>
            <strong>
              가격, 판매자, 교환/환불 및 배송 등 해당 상품 자체와 관련 없는
              문의는 고객센터 내 1:1 문의하기
            </strong>
            를 이용해주세요.
          </li>
          <li>
            <strong>
              "해당 상품 자체"와 관계없는 글, 양도, 광고성, 욕설, 비방, 도배
              등의 글은 예고 없이 이동, 노출제한, 삭제 등의 조치가 취해질 수
              있습니다.
            </strong>
          </li>
          <li>
            공개 게시판이므로 전화번호, 메일 주소 등 고객님의 소중한 개인정보는
            절대 남기지 말아주세요.
          </li>
        </ul>
        <div className="product-qna-border">
          {QnAData.map((x, i) => (
            <div key={i}>
              <ProductAnswer item={x} />
            </div>
          ))}
        </div>

        <div className="product-declare-box">
          <div className="declare-text">
            판매 부적격 상품 또는 허위과장광고 및 지식재산권을 침해하는 상품의
            경우 신고하여 주시기 바랍니다.
          </div>
          <div className="declare-btn">신고하기</div>
        </div>
      </div>
    </div>
  );
};

export default ProductQnA;

const RightInfo = (props) => {
  const { productNumber } = props;
  return (
    <div>
      <div className="savePoint">
        <div className="save">적립</div>
        <div className="saveinfo">
          최대 3,050원 쿠팡캐시 적립 · 쿠페이 머니 결제시{" "}
        </div>
        <div className="benefit">혜택보기 {">"}</div>
      </div>

      <div className="rightinfo">
        <ul>
          <li>건반 수: 61건반</li>
          <li>건반 종류: 하드건반</li>
          <li>쿠팡상품번호: {productNumber}</li>
        </ul>
      </div>
    </div>
  );
};

export default RightInfo;

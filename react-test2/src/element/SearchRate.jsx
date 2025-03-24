import { Input, Select, Rate } from "antd";
import "./SearchRate.css";
const { Search } = Input;

const SearchRate = () => {
  const option = [
    {
      label: <span className="rate-label">모든별점보기</span>,
      value: "all",
    },
    {
      label: (
        <span className="rate-label">
          최고 <Rate disabled value={5} />
        </span>
      ),
      value: "excellent",
    },
    {
      label: (
        <span className="rate-label">
          좋음 <Rate disabled value={4} />
        </span>
      ),
      value: "good",
    },
    {
      label: (
        <span className="rate-label">
          보통 <Rate disabled value={3} />
        </span>
      ),
      value: "notbed",
    },
    {
      label: (
        <span className="rate-label">
          별로 <Rate disabled value={2} />
        </span>
      ),
      value: "notreally",
    },
    {
      label: (
        <span className="rate-label">
          나쁨 <Rate disabled value={1} />
        </span>
      ),
      value: "bed",
    },
  ];

  return (
    <div className="search-box">
      <div className="order-text">
        <div className="order-text-best">베스트순</div>
        <div className="order-stick"></div>
        <div className="order-text-recent">최신순</div>
      </div>

      <div>
        <Search
          placeholder="상품평을 검색해보세요."
          allowClear
          style={{
            width: 200,
          }}
        />
        <Select
          defaultValue="모든 별점 보기"
          style={{
            width: 300,
          }}
          options={option}
        />
      </div>
    </div>
  );
};

export default SearchRate;

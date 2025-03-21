import { Tabs } from "antd";
import ProductDetail from "./ProductDetail";
import ProductRate from "./ProductRate";
import ProductQnA from "./ProductQnA";
import ProductDelievery from "./ProductDelievery";
import "./Category.css";

const Category = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: <span className="custom-tab-label">상품상세</span>,
      children: <ProductDetail />,
    },
    {
      key: "2",
      label: <span className="custom-tab-label">상품평(121)</span>,
      children: <ProductRate />,
    },
    {
      key: "3",
      label: <span className="custom-tab-label">상품문의</span>,
      children: <ProductQnA />,
    },
    {
      key: "4",
      label: <span className="custom-tab-label">배송/교환/반품 안내</span>,
      children: <ProductDelievery />,
    },
  ];

  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      className="custom-tabs"
    />
  );
};

export default Category;

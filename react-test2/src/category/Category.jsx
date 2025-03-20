import { Tabs } from "antd";
import ProductDetail from "./ProductDetail";
import ProductRate from "./ProductRate";
import ProductQnA from "./ProductQnA";
import ProductDelievery from "./ProductDelievery";

const Category = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "상품상세",
      children: <ProductDetail />,
    },
    {
      key: "2",
      label: "상품평(121)",
      children: <ProductRate />,
    },
    {
      key: "3",
      label: "상품문의",
      children: <ProductQnA />,
    },
    {
      key: "4",
      label: "배송/교환/반품 안내",
      children: <ProductDelievery />,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default Category;

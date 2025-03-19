import "./left.css";
import { useState } from "react";
import apple from "./img/apple.jpg";
import LeftSubImg from "./LeftSubImg";
import LeftMainImg from "./LeftMainImg";

const Left = () => {
  // 이미지 저장용
  const [image, setImage] = useState(apple);

  return (
    <div>
      <LeftSubImg image={image} />
      <LeftMainImg setImage={setImage} />
    </div>
  );
};

export default Left;

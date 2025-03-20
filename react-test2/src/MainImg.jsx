import "./MainImg.css";

const MainImg = (props) => {
  const { mainImage } = props;
  return <img src={mainImage} alt="Main" className="main-img" />;
};

export default MainImg;

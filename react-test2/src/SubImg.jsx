import SubElement from "./SubElement";

const SubImg = (props) => {
  const { setImage } = props;
  const imgArray = [apple1, apple2, apple3];
  return (
    <div className="applebox">
      {imgArray.map((item, i) => {
        return <SubElement key={i} item={item} setImage={setImage} />;
      })}
    </div>
  );
};

export default SubImg;

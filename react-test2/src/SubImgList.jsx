import "./SubImgList.css";

const SubImgList = (props) => {
  const { lists, hoverList, hoveredIndex, setHoveredIndex } = props;

  return (
    <div className="thumbnail-container">
      {lists.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Thumbnail ${index}`}
          className={`thumbnail ${hoveredIndex === index ? "hovered" : ""}`}
          onMouseEnter={() => {
            hoverList(img);
            setHoveredIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default SubImgList;

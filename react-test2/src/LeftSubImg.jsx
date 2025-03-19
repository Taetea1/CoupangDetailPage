const LeftSubImg = (props) => {
  const { lists, hoverList } = props;
  return (
    <div className="thumbnail-container">
      {lists.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Thumbnail ${index}`}
          className="thumbnail"
          onMouseEnter={() => hoverList(img)}
        />
      ))}
    </div>
  );
};

export default LeftSubImg;

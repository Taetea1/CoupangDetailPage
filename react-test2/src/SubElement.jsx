const subElement = (props) => {
  const { item, setImage } = props;
  return (
    <img
      className="eachimage"
      onClick={() => setImage(item)}
      style={{ width: 200, height: 200 }}
      src={item}
      alt="피아노"
    />
  );
};

export default subElement;

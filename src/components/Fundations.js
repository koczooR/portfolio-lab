export const Fundations = (props) => {
  return (
    <div className="carousel_box">
      <div className="carousel_left">
        <span className="carousel_left-title">{props.title}</span>
        <span className="carousel_left-text">{props.text}</span>
      </div>
      <div className="carousel_right">
        <span>{props.items}</span>
      </div>
    </div>
  );
};

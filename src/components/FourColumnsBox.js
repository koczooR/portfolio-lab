export const FourColumnsBox = (props) => {
  return (
    <div className="oneColumn">
      <img src={props.image} className="oneColumn__icon" alt="T-shirt Icon"></img>
      <span className="oneColumn__title">{props.columnTitle}</span>
      <hr></hr>
      <span className="oneColumn__text">{props.columnText}</span>
    </div>
  );
};

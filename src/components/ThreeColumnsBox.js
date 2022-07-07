export const ThreeColumnsBox = (props) => {
  return (
    <div className="oneColumn">
      <span className="oneColumn__number">{props.number}</span>
      <span className="oneColumn__title">{props.columnTitle}</span>
      <span className="oneColumn__text">
        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
      </span>
    </div>
  );
};

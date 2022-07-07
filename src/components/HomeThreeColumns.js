import { ThreeColumnsBox } from "./ThreeColumnsBox";

export const HomeThreeColumns = () => {
  return (
    <section className="threeColumns">
      <div className="threeColumnsContainer">
        <ThreeColumnsBox number={10} columnTitle="ODDANYCH WORKÓW" />
        <ThreeColumnsBox number={5} columnTitle="WSPARTYCH ORGANIZACJI" />
        <ThreeColumnsBox number={7} columnTitle="ZORGANIZOWANY ZBIÓREK" />
      </div>
    </section>
  );
};

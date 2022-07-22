import { HeaderNav } from "./HeaderNav";
import { OddajRzeczyHeader } from "./OddajRzeczyHeader";
import { OddajRzeczyYellowHeader } from "./OddajRzeczyYellowHeader";

export const OddajRzeczy = () => {
  return (
    <>
      <header>
        <HeaderNav />
        <OddajRzeczyHeader />
        <OddajRzeczyYellowHeader />
      </header>
    </>
  );
};

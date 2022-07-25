import { Form } from "./Form";
import { HeaderNav } from "./HeaderNav";
import { HomeContact } from "./HomeContact";
import { OddajRzeczyHeader } from "./OddajRzeczyHeader";

export const OddajRzeczy = () => {
  return (
    <>
      <header>
        <HeaderNav />
        <OddajRzeczyHeader />
        <Form />
        <HomeContact />
      </header>
    </>
  );
};

import { useState } from "react";
import { FormPodsumowanie } from "./FormPodsumowanie";
import { FormStep1 } from "./FormStep1";
import { FormStep2 } from "./FormStep2";
import { FormStep3 } from "./FormStep3";
import { FormStep4 } from "./FormStep4";
import { FormThankYou } from "./FormThankYou";
import { OddajRzeczyYellowHeader } from "./OddajRzeczyYellowHeader";
import { YellowHeader2 } from "./YellowHeader2";
import { YellowHeader3 } from "./YellowHeader3";
import { YellowHeader4 } from "./YellowHeader4";

export const Form = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const prevStep = () => {
    setStepNumber((prevState) => prevState - 1);
  };

  const nextStep = () => {
    setStepNumber((prevState) => prevState + 1);
  };

  switch (stepNumber) {
    case 0:
      return (
        <>
          <OddajRzeczyYellowHeader nextStep={nextStep} />
          <FormStep1 nextStep={nextStep} />
        </>
      );
    case 1:
      return (
        <>
          <YellowHeader2 prevStep={prevStep} nextStep={nextStep} />
          <FormStep2 prevStep={prevStep} nextStep={nextStep} />
        </>
      );
    case 2:
      return (
        <>
          <YellowHeader3 prevStep={prevStep} nextStep={nextStep} />
          <FormStep3 prevStep={prevStep} nextStep={nextStep} />
        </>
      );
    case 3:
      return (
        <>
          <YellowHeader4 prevStep={prevStep} nextStep={nextStep} />
          <FormStep4 prevStep={prevStep} nextStep={nextStep} />
        </>
      );
    case 4:
      return (
        <>
          <FormPodsumowanie prevStep={prevStep} nextStep={nextStep} />
        </>
      );
    case 5:
      return (
        <>
          <FormThankYou />
        </>
      );

    default:
  }
  return;
};

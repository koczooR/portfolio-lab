export const FormPodsumowanie = ({ prevStep, nextStep }) => {
  return (
    <section className="formStep1">
      <p className="step2Title">Podsumowanie Twojej darowizny</p>

      <div className="btn_container">
        <button onClick={prevStep}>Wstecz</button>
        <button onClick={nextStep}>Potwierdzam</button>
      </div>
    </section>
  );
};

export const FormStep4 = ({ prevStep, nextStep }) => {
  return (
    <section className="formStep1">
      <p className="step">Krok 4/4</p>
      <p className="step2Title">Podaj adres oraz termin odbioru rzeczy przez kuriera</p>
      <div className="btn_container">
        <button onClick={prevStep}>Wstecz</button>
        <button onClick={nextStep}>Dalej</button>
      </div>
    </section>
  );
};

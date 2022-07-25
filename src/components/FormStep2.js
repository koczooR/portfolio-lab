export const FormStep2 = ({ prevStep, nextStep }) => {
  return (
    <section className="formStep1">
      <p className="step">Krok 2/4</p>
      <p className="step2Title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
      <div className="selectForm2Container">
        <label className="selectForm2">
          Liczba 60l worków:
          <select name="bags">
            <option value="— wybierz —" disabled selected style={{ display: "none" }}>
              — wybierz —
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
      </div>
      <div className="btn_container">
        <button onClick={prevStep}>Wstecz</button>
        <button onClick={nextStep}>Dalej</button>
      </div>
    </section>
  );
};

export const FormStep3 = ({ prevStep, nextStep }) => {
  return (
    <section className="formStep1">
      <p className="step">Krok 3/4</p>
      <p className="step2Title">Lokalizacja:</p>
      <div className="selectForm3Container">
        <select name="bags">
          <option value="— wybierz —" disabled selected style={{ display: "none" }}>
            — wybierz —
          </option>
          <option value="Poznań">Poznań</option>
          <option value="Warszawa">Warszawa</option>
          <option value="Kraków">Kraków</option>
          <option value="Wrocław">Wrocław</option>
          <option value="Katowice">Katowice</option>
        </select>
      </div>
      <p>Komu chcesz pomóc?</p>
      <label>
        <input type="checkbox" />
        dzieciom
      </label>
      <label>
        <input type="checkbox" />
        samotnym matkom
      </label>
      <label>
        <input type="checkbox" />
        bezdomnym
      </label>
      <label>
        <input type="checkbox" />
        niepełnosprawnym
      </label>
      <label>
        <input type="checkbox" />
        osobom starszym
      </label>
      <p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
      <input type="text" />
      <div className="btn_container">
        <button onClick={prevStep}>Wstecz</button>
        <button onClick={nextStep}>Dalej</button>
      </div>
    </section>
  );
};

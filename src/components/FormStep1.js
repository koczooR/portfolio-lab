export const FormStep1 = ({ nextStep }) => {
  return (
    <section className="formStep1">
      <p className="step">Krok 1/4</p>
      <form>
        <p>Zaznacz co chcesz oddać:</p>
        <div>
          <label>
            <input type="radio" name="items" value="ubrania" />
            ubrania, które nadają się do ponownego użycia
          </label>

          <label>
            <input type="radio" name="items" value="ubrania2" />
            ubrania, do wyrzucenia
          </label>

          <label>
            <input type="radio" name="items" value="zabawki" />
            zabawki
          </label>

          <label>
            <input type="radio" name="items" value="książki" />
            książki
          </label>

          <label>
            <input type="radio" name="items" value="inne" />
            Inne
          </label>
        </div>
      </form>
      <button onClick={nextStep}>Dalej</button>
    </section>
  );
};

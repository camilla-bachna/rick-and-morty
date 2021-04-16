import Reset from './Reset';

const Filter = (props) => {
  const handleCharacter = (event) => {
    props.handleFilter(event.target.name, event.target.value);
  };

  /* preventDefault for form */

  const handleForm = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleForm}>
      <label htmlFor="name" className="form__label">
        Search by name
        <input
          type="text"
          name="name"
          id="name"
          placeholder="write a name here..."
          value={props.name}
          onChange={handleCharacter}
          className="form__input"
        />
      </label>
      <label htmlFor="species" className="form__label">
        Search by species
        <input
          type="text"
          name="species"
          id="species"
          placeholder="write the species here..."
          value={props.species}
          onChange={handleCharacter}
          className="form__input"
        />
      </label>
      <label htmlFor="status" className="form__label">
        Search by status
        <select
          name="status"
          id="status"
          onChange={handleCharacter}
          value={props.status}
          className="form__select"
        >
          <option value="all">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </label>
      <label className="form__label" htmlFor="origin">
        Origin:
        <div className="form__container">
          <input
            type="checkbox"
            name="origin"
            value="Earth (C-137)"
            onChange={handleCharacter}
            className="form__checkbox"
          />
          <label className="form__label">Earth (C-137)</label>
          <input
            type="checkbox"
            name="origin"
            value="Earth (Replacement Dimension)"
            onChange={handleCharacter}
            className="form__checkbox"
          />
          <label className="form__label">Earth (Replacement Dimension)</label>
          <input
            type="checkbox"
            name="origin"
            value="Abadango"
            onChange={handleCharacter}
            className="form__checkbox"
          />
          <label className="form__label">Abadango</label>
          <input
            type="checkbox"
            name="origin"
            value="unknown"
            onChange={handleCharacter}
            className="form__checkbox"
          />
          <label className="form__label">Unknown</label>
        </div>
      </label>
      <Reset resetInputs={props.resetInputs} />
    </form>
  );
};
export default Filter;

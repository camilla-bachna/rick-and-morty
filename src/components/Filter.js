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
    </form>
  );
};
export default Filter;

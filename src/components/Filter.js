const Filter = (props) => {
  const handleCharacterName = (event) => {
    props.handleFilter(event.target.name, event.target.value);
  };

  const handleForm = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleForm}>
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="write a name here..."
          value={props.name}
          onChange={handleCharacterName}
          className="form__input"
        />
      </label>
    </form>
  );
};
export default Filter;

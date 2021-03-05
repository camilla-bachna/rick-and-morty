const Filter = (props) => {
  const handleCharacterName = (event) => {
    props.handleFilter(event.target.name, event.target.value);
  };

  return (
    <form className="form">
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

function Input(props) {
  const handleInput = (e) => {
    //checking if input is math expression valid characters only
    if (e.target.value === "" || e.target.value.match(/^[0-9+\-*/.)(!%]+$/)) {
      props.setInput(e.target.value);
    }
  };
  return (
    <div className="inputdisplay">
      {props.result === "" ? (
        <input
          type="text"
          placeholder="Input"
          name="input"
          className="input"
          style={{ padding: "20px" }}
          value={props.input}
          onChange={handleInput}
          autoComplete="off"
        />
      ) : (
        <>
          <input
            type="text"
            placeholder="Input"
            name="input"
            className="value"
            style={{ padding: "20px" }}
            value={props.input}
            disabled
          />
          <input
            type="text"
            placeholder="Result"
            name="result"
            className="input1"
            style={{ padding: "20px" }}
            value={props.result}
            disabled
          />
        </>
      )}
    </div>
  );
}
export default Input;

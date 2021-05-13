import "./Input.css";

const Input = (props) => {
  return (
    <div className="Input">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        autoComplete={props.autoComplete}
        maxLength={props.maxLength}
        minLength={props.minLength}
      />
    </div>
  );
};

export default Input;

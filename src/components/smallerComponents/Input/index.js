import "./Input.css";

const Input = (props) => {
  return (
    <div className="Input">
      <label className="field" htmlFor={props.name}>{props.label}<br/></label>
      <input className="takinginput"
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        autoComplete={props.autoComplete}
        maxLength={props.maxLength}
        minLength={props.minLength}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
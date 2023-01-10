import "./style.css";

export default function Button(props) {
  return (
    <div className="Button">
      <button className={props.action} onClick={props.handleEvent}>
        {props.action}
      </button>
    </div>
  );
}

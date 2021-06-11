

 const Button = (props) => {
    return (
        <button
          className={props.name}
          aria-label={props.label}
          onClick={props.func}
        >
          {props.text}
        </button>
    )
}

export default Button;
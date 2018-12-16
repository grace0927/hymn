const Dropdown = (props) => {
  const options = props.options.map((option) =>
    <option key={option.id} value={option.val}>{option.title}</option>
  )

  return (
    <div className="dropdown">
      <label htmlFor={props.name}>{props.label}</label>
      <select id={props.id} name={props.name}>
        <option key="default">{props.default}</option>
        {options}
      </select>
      <style jsx>{`
        label {
          padding-right: 0.625rem;
        }
        select {
          border: 0.0625rem solid black;
          font-size: 1rem;
          height: 2rem;
          width: 7rem;
        }
        .dropdown {
          display: inline-block;
          margin-right: 1rem;
        }
      `}</style>
    </div>
  )
}

export default Dropdown

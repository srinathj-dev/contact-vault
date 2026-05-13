const FormInput = (props) => {

  return (
    <label htmlFor={props.id} className="input-label">{props.label}
      <div className={props.isSubmitted && props.value.trim() === "" ? "alert-input-container" : "input-container"}  >
        <i className= {props.icon}></i>
        <input 
        value = {props.value} 
        type ={props.type} 
        name = {props.type}  
        placeholder={props.placeholder}
        id={props.id}
        className = "input-primary" 
        onChange = {(e) => props.onChange(e.target.value)} />
      </div>
    </label> 
  )
}

export default FormInput

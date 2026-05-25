const FormInput = ({
  label,
  id,
  name,
  type,
  placeholder,
  icon,
  value,
  hasError,
  onChange,
}) => {
  const Icon = icon;
  return (
    <label htmlFor={id} className="input-label">
      {label}
      <div
        className={
          hasError == true ? 'alert-input-container' : 'input-container'
        }
      >
        <Icon className="text-slate-400" size={18} />
        <input
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
          key={id}
          className="input-primary"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </label>
  );
};

export default FormInput;

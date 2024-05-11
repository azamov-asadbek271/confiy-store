function FormSelect({ name, label, size, list, defaultValue }) {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        className={`select select-bordered ${size}`}
        defaultValue={defaultValue}
      >
        {list.map((li) => {
          return (
            <option key={li} value={li}>
              {li}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormSelect;

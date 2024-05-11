
function InputForm({name,type,label,size}) {
  
  return (
    <div className="form-control">
      <label className=" w-full">
        <div className="label">
          <span className="label-text capitalize">{label}</span>
        </div>
        <input
          name={name}
          type={type}
          placeholder="Type here"
          className={`input input-bordered w-full max-w-xs ${size}`}
        />
      </label>
    </div>
  );
}

export default InputForm
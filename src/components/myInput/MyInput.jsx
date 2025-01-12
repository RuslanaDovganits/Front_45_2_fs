import style from './myInput.module.css'
export default function MyInput({ name, type, placeholder, label }) {
  return (
    <div className={style.input_container}>
        <label htmlFor={name}> {label} </label>
      <input className={style.input} id={name} name={name} type={type} placeholder={placeholder} />
      
    </div>
  );
}

import s from './InputField.module.css'

export default function InputField({ placeholder, type, value, onChange }) {
  return (
    <>
      <input className={s.inputText}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  )
}


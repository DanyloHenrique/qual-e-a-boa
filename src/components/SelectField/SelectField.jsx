import s from './selectField.module.scss'
import vectorIcon from '../../assets/icons/Vector.png'

export default function SelectField({
  options = [],
  value,
  onChange,
  placeholder
}) {
  return (
    <div className={s.selectWrapper}>
      <select
        className={s.select}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <img
        src={vectorIcon}
        alt="Abrir opções"
        className={s.vector}
      />
    </div>
  )
}

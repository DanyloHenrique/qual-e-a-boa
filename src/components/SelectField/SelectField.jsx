import s from './selectField.module.scss'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function SelectField({
  options = [],
  placeholder = 'Selecione uma categoria',
  value = '',
  onChange
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

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <MdKeyboardArrowDown
       className={s.vector}
       aria-hidden="true"
       focusable="false"
       />
    </div>
  )
}

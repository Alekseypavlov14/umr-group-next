import { FC } from 'react'
import ReactSelect from 'react-select'
import styles from './Select.module.css'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  options: Option[]
  value?: Option
  onChange: (e: Option) => void
}

const Select: FC<SelectProps> = ({
  options,
  value,
  onChange
}) => {
  return (
    <ReactSelect
      value={value || options[0]}
      options={options}
      instanceId={'option'}
      defaultValue={options[0]}
      className={styles.Select}
      onChange={onChange}
    />
  )
}

export { Select }
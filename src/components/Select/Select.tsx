import { FC } from 'react'
import ReactSelect from 'react-select'
import styles from './Select.module.css'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  options: Option[]
  onChange: (e: Option) => void
}

const Select: FC<SelectProps> = ({
  options,
  onChange
}) => {
  return (
    <ReactSelect
      options={options}
      instanceId={'option'}
      defaultValue={options[0]}
      className={styles.Select}
      onChange={onChange}
    />
  )
}

export { Select }
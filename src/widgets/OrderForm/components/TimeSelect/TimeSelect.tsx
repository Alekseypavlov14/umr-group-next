import { FC } from 'react'
import { useSelectHandler } from './hooks/useSelectHandler'
import { getTimeOptions } from './utils/getTimeOptions'
import styles from './TimeSelect.module.css'

interface TimeSelectProps {}

export const TimeSelect: FC<TimeSelectProps> = () => {
  const options = getTimeOptions()
  const selectHandler = useSelectHandler()
  
  return (
    <select
      className={styles.TimeSelect}
      onChange={selectHandler}
      inputMode='none'
    >
      {options.map(option => (
        <option 
          value={option.value} 
          key={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}
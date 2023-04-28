import { FC } from 'react'
import { useSelectHandler } from './hooks/useSelectHandler'
import { getMinValue } from './utils/getMinValue'
import { useValue } from './hooks/useValue'
import styles from './DateSelect.module.css'

interface DateSelectProps {}

export const DateSelect: FC<DateSelectProps> = () => {
  const value = useValue()
  const selectHandler = useSelectHandler()

  return (
    <input 
      className={styles.DateSelect}
      onChange={selectHandler}
      min={getMinValue()}
      value={value}
      type='date'
    />
  )
}
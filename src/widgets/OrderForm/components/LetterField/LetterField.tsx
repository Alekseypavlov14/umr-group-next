import { ChangeEvent, FC, useState } from 'react'
import styles from './LetterField.module.css'

interface LetterFieldProps {}

export const LetterField: FC<LetterFieldProps> = () => {
  const [value, setValue] = useState('')

  function updateValueHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value)
  }

  return (
    <textarea 
      className={styles.LetterField}
      onChange={updateValueHandler}
      value={value}
      maxLength={500}
      minLength={30}
      wrap='soft'
    />
  )
}
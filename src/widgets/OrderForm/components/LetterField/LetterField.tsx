import { FC } from 'react'
import { useUpdateLetterHandler } from './hooks/useUpdateLetterHandler'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { letterSelector } from '@features/order'
import styles from './LetterField.module.css'

interface LetterFieldProps {}

export const LetterField: FC<LetterFieldProps> = () => {
  const letter = useAppSelector(letterSelector)
  const updateLetterHandler = useUpdateLetterHandler()

  return (
    <textarea 
      className={styles.LetterField}
      onChange={updateLetterHandler}
      value={letter}
      maxLength={500}
      minLength={30}
      wrap='soft'
    />
  )
}
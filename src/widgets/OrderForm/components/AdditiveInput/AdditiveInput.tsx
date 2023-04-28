import { FC } from 'react'
import { useToggleHandler } from './hooks/useToggleHandler'
import { OrderAdditive } from '@features/order'
import styles from './AdditiveInput.module.css'

interface AdditiveInputProps {
  additive: OrderAdditive
}

export const AdditiveInput: FC<AdditiveInputProps> = ({ additive }) => {
  const toggleHandlerCreator = useToggleHandler()

  return (
    <label 
      className={styles.AdditiveContainer}
      htmlFor={additive.name}
    >
      <input 
        id={additive.name}
        className={styles.AdditiveCheckbox}
        onChange={toggleHandlerCreator(additive.id)}
        checked={additive.isChecked}
        name={additive.name} 
        type='checkbox'
      />

      <label 
        className={styles.AdditiveCheckboxVisible}
        htmlFor={additive.name} 
      >
        <div className={styles.AdditiveIndicator} />
      </label>

      <label 
        className={styles.AdditiveText}
        htmlFor={additive.name}
      >
        {additive.label}
      </label>
    </label>
  )
}

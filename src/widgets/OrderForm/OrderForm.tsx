import { FC } from 'react'
import { AdditiveInput } from './components/AdditiveInput'
import { ServiceSelect } from './components/ServiceSelect'
import { useAdditives } from './hooks/useAdditives'
import { LetterField } from './components/LetterField'
import { OrderButton } from './components/OrderButton'
import { DateSelect } from './components/DateSelect'
import { TimeSelect } from './components/TimeSelect'
import { Price } from './components/Price'
import styles from './OrderForm.module.css'

interface OrderFormProps {}

export const OrderForm: FC<OrderFormProps> = () => {
  const additives = useAdditives()

  return (
    <div className={styles.OrderForm}>
      <div className={styles.OrderHeadline}>
        Order translation
      </div>
      <form className={styles.Form}>
        <div className={styles.FormSection}>
          <div className={styles.Description}>
            Select service:
          </div>

          <ServiceSelect />
        </div>

        <div className={styles.FormSection}>
          <div className={styles.Description}>
            Options:
          </div>

          {additives.map(additive => (
            <AdditiveInput 
              additive={additive}
              key={additive.id}
            />
          ))}
        </div>

        <div className={styles.FormSection}>
          <div className={styles.Description}>
            Select the date:
          </div>

          <DateSelect />
        </div>

        <div className={styles.FormSection}>
          <div className={styles.Description}>
            Select the time:
          </div>

          <TimeSelect />
        </div>

        <div className={styles.FormSection}>
          <div className={styles.Description}>
            Describe the need (30-500 symbols):
          </div>
          <div className={styles.LetterTip}>
            * leave your contacts to make us possible to contact you
          </div>

          <LetterField />
        </div>

        <div className={styles.FormSection}>
          <Price />

          <div className={styles.OrderButton}>
            <OrderButton />
          </div>
        </div>
      </form>
    </div>
  )
}

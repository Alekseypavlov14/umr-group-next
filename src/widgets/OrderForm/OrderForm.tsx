import { FC, useState } from 'react'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { AdditiveInput } from './components/AdditiveInput'
import { ServiceSelect } from './components/ServiceSelect'
import { orderSelector } from '@features/order'
import { useAdditives } from './hooks/useAdditives'
import { LetterField } from './components/LetterField'
import { DateSelect } from './components/DateSelect'
import { TimeSelect } from './components/TimeSelect'
import { Button } from '@shared/components/Button'
import { mailer } from '@shared/utils/mailer'
import styles from './OrderForm.module.css'
import { Price } from './components/Price'

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
            <Button
              href=''
              onClick={() => {}}
            >
              Order
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

import { FC } from 'react'
import { Button } from '../Button/Button'
import styles from './OrderForm.module.css'

interface OrderFormProps {}

const OrderForm: FC<OrderFormProps> = () => {
  return (
    <div className={styles.OrderForm}>
      <div className={styles.OrderHeadline}>
        Зробити замовлення
      </div>
      <form className={styles.Form}>
        <div className={styles.FormSection}>
          <div className={styles.Description}>
            Обрати послугу:
          </div>
          {/* <Select
            defaultValue={convertServiceToOption(service)}
            options={services.map(convertServiceToOption)}
            className={styles.Select}
            onChange={(e) => {
              if (!e) return
              uncheckAllAdditives()             
              const service = getServiceByName(e.value)
              setService(service)
              setCurrentPrice(service.startPrice + 20)
              setTime(Date.now())
            }} 
          /> */}
        </div>

        <div className={styles.FormSection}>
          <div className={styles.Description}>Опції:</div>
          {/* {service.additives.map((additive, index) => (
            <AdditiveInput 
              key={index}
              additive={additive}
              onChange={(e) => {
                if (e.target.checked) return setCurrentPrice(price => price + additive.price)
                else return setCurrentPrice(price => price - additive.price)
              }}
            />
          ))} */}
        </div>

        <div className={styles.FormSection}>
          <div className={styles.Description}>
            Оберіть дату:
          </div>
          {/* <input 
            className={styles.Input}
            onChange={(e) => setTime(new Date(e.target.value).getTime())}
            onFocus={(e) => removeInvalidClass(e)}
            min={getInputDateFormat(Date.now())}
            value={getInputDateFormat(time)}
            id='date'
            type='date'
          /> */}
        </div>

        <div className={styles.FormSection}>
          <div className={styles.Description}>
            Опишіть потребу детальніше (30-500 символів):
          </div>
          <div className={styles.LetterTip}>
            * Залишіть контакти, щоб ми могли з Вами зв'язатися
          </div>
          {/* <textarea 
            id='letter'
            wrap='soft'
            minLength={30}
            maxLength={500}
            className={styles.Input}
            onChange={(e) => setLetter(e.target.value)}
            onFocus={(e) => removeInvalidClass(e)}
          /> */}
        </div>

        <div className={styles.FormSection}>
          <div className={styles.CurrentPrice}>
            Вартість: 
            {/* <span>{currentPrice}</span>  */}
            лей за годину
          </div>
          <div className={styles.OrderButton}>
            <Button
              href=''
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              Замовити
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export { OrderForm }
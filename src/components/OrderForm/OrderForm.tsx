import { FC, useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { AdditiveInput } from '../AdditiveInput/AdditiveInput'
import { useDispatch, useSelector } from 'react-redux'
import { Order } from '../../types/Order.type'
import { countPrice } from '../../business/countOrderPrice/CountPrice'
import { 
  additivesSelector, 
  changeOrder, 
  orderSelector, 
  updateAdditive, 
  updateDate, 
  updateHour 
} from '../../features/order/orderSlice'
import { Select } from './../Select/Select'
import styles from './OrderForm.module.css'

interface OrderFormProps {
  orders: Order[]
}

const OrderForm: FC<OrderFormProps> = ({ orders }) => {
  const dispatch = useDispatch()
  const order = useSelector(orderSelector)
  const additives = useSelector(additivesSelector)
  const [letter, setLetter] = useState('')

  useEffect(() => {
    dispatch(changeOrder(orders[0]))
  }, [])

  const convertOrderToOption = (order: Order) => ({
    label: order.label,
    value: order.name
  })

  function getOrderByName(name: string): Order {
    return orders.find(order => order.name === name)
  }

  function getInputDateFormatted(time: number) {
    const now = new Date(time)

    let day = now.getDate().toString()
    if (day.length === 1) day = '0' + day

    let month = (now.getMonth() + 1).toString()
    if (month.length === 1) month = '0' + month

    return `${now.getFullYear()}-${month}-${day}`
  }

  function uncheckAdditives() {
    const additiveInputs = additives.map(additive => {
      return document.getElementById(additive.name) as HTMLInputElement
    })

    additiveInputs.forEach(additiveInput => {
      additiveInput.checked = false
    })
  }

  function timeOptions() {
    return Array.from(new Array<Number>(24))
      .map((number, index) => index)
      .map(option => createHourOption(option))
  }

  function createHourOption(hour: number) {
    const labelTemplate = hour < 10 ? `0${hour}` : String(hour)
    return ({
      label: `${labelTemplate}:00`,
      value: labelTemplate
    })
  }

  const addInvalid = (id: string) => {
    document.getElementById('letter')
    .classList.add(styles.InputInvalid)
  }

  const removeInvalid = (id: string) => {
    document.getElementById('letter')
    .classList.remove(styles.InputInvalid)
  }
  
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
          <Select
            options={orders.map(convertOrderToOption)}
            value={convertOrderToOption(order)}
            onChange={(e) => {
              if (!e) return
              dispatch(changeOrder(getOrderByName(e.value)))
              uncheckAdditives()
              dispatch(updateHour(0))
            }} 
          />
        </div>

        <div className={styles.FormSection}>
          <div className={styles.Description}>Опції:</div>
          {additives.map((additive) => (
            <AdditiveInput 
              key={additive.name}
              additive={additive}
              onChange={(e) => {
                dispatch(updateAdditive({
                  name: additive.name,
                  label: additive.label,
                  price: additive.price,
                  isChecked: e.target.checked
                }))
              }}
            />
          ))}
        </div>

        <div className={styles.FormSection}>
          <div className={styles.Description}>
            Оберіть дату:
          </div>
          <input 
            className={styles.Input}
            onChange={(e) => {
              dispatch(updateDate(new Date(e.target.value).getTime()))
            }}
            min={getInputDateFormatted(Date.now())}
            value={getInputDateFormatted(order.date)}
            id='date'
            type='date'
          />
        </div>

        <div className={styles.FormSection}>
          <div className={styles.Description}>
            Оберіть час:
          </div>
          <Select
            options={timeOptions()}
            value={createHourOption(order.hour)}
            onChange={(e) => dispatch(updateHour(Number(e.value)))}
          />
        </div>

        <div className={styles.FormSection}>
          <div className={styles.Description}>
            Опишіть потребу детальніше (30-500 символів):
          </div>
          <div className={styles.LetterTip}>
            * Залишіть контакти, щоб ми могли з Вами зв'язатися
          </div>
          <textarea 
            id='letter'
            wrap='soft'
            minLength={30}
            maxLength={500}
            className={styles.Input}
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
            onFocus={() => removeInvalid('letter')}
          />
        </div>

        <div className={styles.FormSection}>
          <div className={styles.CurrentPrice}>
            Вартість: <span>{countPrice(order)}</span> лей за годину
          </div>
          <div className={styles.OrderButton}>
            <Button
              href=''
              onClick={(e) => {
                e.preventDefault()
                if (letter.length > 500 || letter.length < 30) {
                  addInvalid('letter')
                }
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
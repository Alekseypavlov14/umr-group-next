import { FC, useEffect, useState } from 'react'
import { Select } from './components/Select'
import { mailer } from '../../utils/Mailer/Mailer'
import { countPrice } from '../../utils/CountPrice/CountPrice'
import { AdditiveInput } from './components/AdditiveInput'
import { useDispatch } from 'react-redux'
import { Order } from '../../types/Order.type'
import { Button } from '@shared/components/Button'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { 
  additivesSelector, 
  changeOrder, 
  orderSelector, 
  updateAdditive, 
  updateDate, 
  updateHour 
} from '@features/order'
import styles from './OrderForm.module.css'

interface OrderFormProps {
  orders: Order[]
}

export const OrderForm: FC<OrderFormProps> = ({ orders }) => {
  const dispatch = useDispatch()
  const order = useAppSelector(orderSelector)
  const additives = useAppSelector(additivesSelector)
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
    document.getElementById(id)
    .classList.add(styles.InputInvalid)
  }

  const removeInvalid = (id: string) => {
    document.getElementById(id)
    .classList.remove(styles.InputInvalid)
  }
  
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
          <div className={styles.Description}>Options:</div>
          {additives.map((additive, index) => (
            <AdditiveInput 
              key={index}
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
            Select the date:
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
            Select the time:
          </div>
          <select
            onChange={(e) => dispatch(updateHour(Number(e.target.value)))}
            className={styles.Input}
            inputMode='none'
          >
            {timeOptions().map((option, index) => (
              <option 
                value={option.value} 
                key={index}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.FormSection}>
          <div className={styles.Description}>
            Describe the need (30-500 symbols):
          </div>
          <div className={styles.LetterTip}>
            * leave your contacts to make us possible to contact you
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
            Price: <span>{countPrice(order)}</span> lei per hour
          </div>
          <div className={styles.OrderButton}>
            <Button
              href=''
              onClick={(e) => {
                e.preventDefault()
                if (letter.length > 500 || letter.length < 30) {
                  return addInvalid('letter')
                }
                mailer.send(letter)
              }}
            >
              Order
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

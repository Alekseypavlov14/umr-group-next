import { FC, useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { AdditiveInput } from '../AdditiveInput/AdditiveInput'
import { useDispatch, useSelector } from 'react-redux'
import { Order } from '../../types/Order.type'
import { OrderAdditive } from '../../types/OrderAdditive.type'
import { countPrice } from '../../business/countOrderPrice/CountPrice'
import { additivesSelector, changeOrder, orderSelector, updateAdditive, updateDate } from '../../features/order/orderSlice'
import { Select } from './../Select/Select'
import styles from './OrderForm.module.css'

interface OrderFormProps {
  orders: Order[]
}

const OrderForm: FC<OrderFormProps> = ({ orders }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeOrder(orders[0]))
  }, [])

  const order = useSelector(orderSelector)
  const additives = useSelector(additivesSelector)

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
            onChange={(e) => {
              if (!e) return
              dispatch(changeOrder(getOrderByName(e.value)))
              uncheckAdditives()
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
            onFocus={(e) => {}}
            min={getInputDateFormatted(Date.now())}
            value={getInputDateFormatted(order.date)}
            id='date'
            type='date'
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
            onChange={(e) => {}}
            onFocus={(e) => {}}
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
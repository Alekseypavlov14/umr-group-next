import { TextBlock } from "../../components/TextBlock/TextBlock"
import { Container } from "../../components/Container/Container"
import { OrderForm } from "../../components/OrderForm/OrderForm"
import { APIRequest } from "../../utils/APIRequest/APIRequest"
import { Service } from "../../types/Service.type"
import type { Order } from "../../types/Order.type"
import styles from './Order.module.css'

export default function Order({ orders }) {
  return (
    <div className={styles.Order}>
      <Container>
        <div className={styles.TextContent}>
          <TextBlock>
            <>Як це працює?</>
            <>
              Ви замовляєте перекладача. Коли ми його знаходимо, Ви 
              сплачуєте його роботу, відправляючи гроші до нас. Якщо перекладач роботу виконав,
              він отримає оплату, а інакше ми повертаємо її Вам. Це гарантує якість роботи
              перекладача
            </>
          </TextBlock>

          <TextBlock>
            <>Як ми рахуємо <span>вартість</span>?</>
            <>
              Для кожного виду послуг є початкова вартість за годину роботи перекладача.
              Вартість є більшою, якщо Вам потрібен робітник на найближчі 2 дні, адже знайти
              перекладача буде важче. Також ціна є більшою, якщо Вам потрібен перекладач поза містом.
              Якщо Ви можете підвезти робітника до необхідного місця, вартість замовлення буде нижче
            </>
          </TextBlock>
        </div>
      </Container>
      <div className={styles.OrderContent}>
        <Container>
          <OrderForm orders={orders} />
        </Container>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await APIRequest('/services')
  const services: Service[] = data.services

  const orders = services.map<Order>(service => ({
    name: service.name,
    label: service.label,
    startPrice: service.startPrice,
    additives: service.additives.map(additive => ({
      name: additive.name,
      label: additive.label,
      price: additive.price,
      isChecked: false
    })),
    date: Date.now(),
    hour: 0
  }))
  
  return {
    props: {
      orders: orders
    }
  }
}
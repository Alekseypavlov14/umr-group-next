import { Layout } from "../components/Layout/Layout"
import { TextBlock } from "../components/TextBlock/TextBlock"
import { Container } from "../components/Container/Container"
import styles from './../styles/pages/Order.module.css'
import { OrderForm } from "../components/OrderForm/OrderForm"

export default function Order() {
  return (
    <Layout>
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
            <OrderForm />
          </Container>
        </div>
      </div>
    </Layout>
  )
}

export function getServerSideProps() {
  
}
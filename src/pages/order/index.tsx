import { Service, Order } from '@features/order'
import { TextBlock } from '@shared/components/TextBlock'
import { Container } from '@shared/components/Container'
import { OrderForm } from '@widgets/OrderForm' 
import servicesData from './data/services.json'
import styles from './Order.module.css'


export default function Order({ orders }) {
  return (
    <div className={styles.Order}>
      <Container>
        <div className={styles.TextContent}>
          <TextBlock>
            <>How does it work?</>
            <>
              You order a translator. When we find them, you pay for the work 
              by sending money to us. If the employee does the work, they get 
              the money, else we return the money to you. It will guarantee 
              the quality of the work
            </>
          </TextBlock>

          <TextBlock>
            <>How do we count the price?</>
            <>
              For each type of work there is an especial start price per hour. 
              The price is bigger if you need a translator for nearest two days, 
              because it is harder to find an employee. Also, the price is higher 
              if you need an employee out of the city. If you can to take the 
              employee to the point, the price is less
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
  const services: Service[] = servicesData

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
import { TextBlock } from "@shared/components/TextBlock/TextBlock"
import { Container } from "@shared/components/Container/Container"
import { Service } from "../../types/Service.type"
import { OrderForm } from '@widgets/OrderForm/OrderForm' 
import type { Order } from "../../types/Order.type"
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { contentSelector } from '@features/lang/languageSlice'
import servicesData from '@data/services.json'
import styles from './Order.module.css'


export default function Order({ orders }) {
  const OrderPage = useAppSelector(contentSelector).page.order

  return (
    <div className={styles.Order}>
      <Container>
        <div className={styles.TextContent}>
          {OrderPage.textBlocks.map((block, index) => (
            <TextBlock key={index}>
              <>{block.title}</>
              <>{block.content}</>
            </TextBlock>
          ))}
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
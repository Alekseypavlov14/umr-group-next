import { Suspense, lazy } from 'react'
import { TextBlock } from "../../components/TextBlock/TextBlock"
import { Container } from "../../components/Container/Container"
import { APIRequest } from "../../utils/APIRequest/APIRequest"
import { Service } from "../../types/Service.type"
import type { Order } from "../../types/Order.type"
import { useSelector } from 'react-redux'
import { langSelector } from '../../features/lang/languageSlice'
import styles from './Order.module.css'

const OrderForm = lazy(() => import('../../components/OrderForm/OrderForm'))

export default function Order({ orders }) {
  const OrderPage = useSelector(langSelector).page.order

  return (
    <div className={styles.Order}>
      <Container>
        <div className={styles.TextContent}>
          <TextBlock>
            <>{OrderPage.textBlocks[0].title}</>
            <>{OrderPage.textBlocks[0].content}</>
          </TextBlock>

          <TextBlock>
            <>{OrderPage.textBlocks[1].title}</>
            <>{OrderPage.textBlocks[1].content}</>
          </TextBlock>
        </div>
      </Container>

      <div className={styles.OrderContent}>
        <Container>
          <Suspense fallback={<>loading...</>}>
            <OrderForm orders={orders} />
          </Suspense>
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
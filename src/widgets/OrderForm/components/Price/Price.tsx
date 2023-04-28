import { FC } from 'react'
import { usePrice } from '@features/order'
import styles from './Price.module.css'

interface PriceProps {}

export const Price: FC<PriceProps> = () => {
  const price = usePrice()

  return (
    <div className={styles.Price}>
      Price: <span>{price}</span> RON per hour
    </div>
  )
}
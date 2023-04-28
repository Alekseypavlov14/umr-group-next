import { useAppSelector } from "@shared/hooks/useAppSelector"
import { orderSelector } from "@features/order"
import { formatDate } from '../utils/formatDate'

export function useValue() {
  const order = useAppSelector(orderSelector)
  const value = formatDate(order.date)
  return value
}
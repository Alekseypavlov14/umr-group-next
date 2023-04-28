import { useAppSelector } from '@shared/hooks/useAppSelector'
import { orderSelector } from '@features/order'

export function useAdditives() {
  const order = useAppSelector(orderSelector)
  return order.additives
}
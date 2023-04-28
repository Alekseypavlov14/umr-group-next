import { useMemo } from "react"
import { TWO_DAYS, EARLY_HOUR, LATE_HOUR, TIME_PRICE_ADDITION } from '../const'
import { useSelectedService } from "./useSelectedService"
import { useAppSelector } from "@shared/hooks/useAppSelector"
import { orderSelector } from "../slice"

export function usePrice() {
  const order = useAppSelector(orderSelector)
  const service = useSelectedService()

  return useMemo(() => {
    let price = service.startPrice

    const activeAdditives = order.additives.filter(additive => additive.isChecked)

    activeAdditives.forEach(additive => {
      price += additive.price
    })

    if (order.date - Date.now() < TWO_DAYS) {
      price += TIME_PRICE_ADDITION
    }

    if (order.hour <= EARLY_HOUR || order.hour >= LATE_HOUR) {
      price += TIME_PRICE_ADDITION
    }

    return price
  }, [order, service])
}
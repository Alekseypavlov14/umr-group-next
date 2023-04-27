import { Order } from "@features/order"

export function countPrice(order: Order) {
  // set start price
  let price = order.startPrice

  // add additive prices
  order.additives
    .filter(additive => additive.isChecked)
    .forEach(additive => price += additive.price)

  const TWO_DAYS_IN_MS = 2 * 24 * 60 * 60 * 1000
  if (order.date - Date.now() < TWO_DAYS_IN_MS) {
    price += 20
  }

  if (order.hour >= 22 || order.hour <= 7) {
    price += 20
  }

  return price
}
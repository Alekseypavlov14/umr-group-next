import { FC } from 'react'
import { useSubmit } from './hooks/useSubmit'
import { Button } from '@shared/components/Button'

interface OrderButtonProps {}

export const OrderButton: FC<OrderButtonProps> = () => {
  const submitHandler = useSubmit()

  return (
    <Button
      onClick={submitHandler}
      href=''
    >
      Order
    </Button>
  )
}
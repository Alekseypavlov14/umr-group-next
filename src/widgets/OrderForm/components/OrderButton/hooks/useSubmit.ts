import { letterSelector, resetOrder } from '@features/order'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { mailer } from '@shared/utils/mailer'

export function useSubmit() {
  const dispatch = useAppDispatch()
  const letter = useAppSelector(letterSelector)

  return () => {
    mailer.send(letter)
    dispatch(resetOrder())
  }
}
import { ChangeEvent } from 'react'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { changeHour } from '@features/order'

export function useSelectHandler() {
  const dispatch = useAppDispatch()

  return (e: ChangeEvent<HTMLSelectElement>) => {
    const hour = Number(e.target.value)
    dispatch(changeHour({ hour }))
  }
}
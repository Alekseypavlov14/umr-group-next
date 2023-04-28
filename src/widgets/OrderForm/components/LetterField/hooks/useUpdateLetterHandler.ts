import { ChangeEvent } from 'react'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { updateLetter } from '@features/order'

export function useUpdateLetterHandler() {
  const dispatch = useAppDispatch()

  return (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateLetter({ letter: e.target.value }))
  }
}
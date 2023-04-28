import { ChangeEvent } from 'react'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { toggleAdditive } from '@features/order'
import { Id } from '@shared/types/Id'

export function useToggleHandler() {
  const dispatch = useAppDispatch()
  
  return function toggleHandlerCreator(additiveId: Id) {
    return function toggleHandler(e: ChangeEvent<HTMLInputElement>) {
      dispatch(toggleAdditive({
        id: additiveId,
        isChecked: e.target.checked
      }))
    }
  }
}
import { ChangeEvent } from "react"
import { useAppDispatch } from "@shared/hooks/useAppDispatch"
import { changeDate } from "@features/order"
import { getTimeFromEvent } from "../utils/getTimeFromEvent"

export function useSelectHandler() {
  const dispatch = useAppDispatch()

  return (event: ChangeEvent<HTMLInputElement>) => {
    const date = getTimeFromEvent(event)
    dispatch(changeDate({ date }))
  }
}
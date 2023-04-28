import { ChangeEvent } from "react"
import { getTimeFromEvent } from "../utils/getTimeFromEvent"
import { useAppDispatch } from "@shared/hooks/useAppDispatch"
import { changeDate } from "@features/order"

export function useSelectHandler() {
  const dispatch = useAppDispatch()

  return (event: ChangeEvent<HTMLInputElement>) => {
    const date = getTimeFromEvent(event)
    dispatch(changeDate({ date }))
  }
}
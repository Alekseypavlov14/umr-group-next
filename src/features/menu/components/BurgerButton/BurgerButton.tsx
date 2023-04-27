import { FC } from 'react'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { clsx } from '@shared/lib/clsx'
import { 
  isOpenedSelector,
  open,
  close
} from '@features/menu'
import styles from './BurgerButton.module.css'

interface BurgerButtonProps {}

export const BurgerButton: FC<BurgerButtonProps> = () => {
  const isOpened = useAppSelector(isOpenedSelector)
  const dispatch = useAppDispatch()

  function toggleMenu() {
    if (isOpened) return dispatch(close())
    else return dispatch(open())
  }

  const classNames = clsx(styles.BurgerButton, isOpened && styles.Clicked)

  return (
    <div 
      className={classNames}
      onClick={toggleMenu}
    >
      <span />
    </div>
  )
}

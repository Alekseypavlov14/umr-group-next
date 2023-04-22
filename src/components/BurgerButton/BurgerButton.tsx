import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import { 
  isOpenedSelector,
  open,
  close
} from '@features/menu/menuSlice'
import cn from 'classnames'
import styles from './BurgerButton.module.css'

interface BurgerButtonProps {}

const BurgerButton: FC<BurgerButtonProps> = () => {
  const isOpened = useAppSelector(isOpenedSelector)
  const dispatch = useAppDispatch()

  function toggleMenu() {
    if (isOpened) return dispatch(close())
    else return dispatch(open())
  }

  return (
    <div 
      className={cn(styles.BurgerButton, isOpened && styles.Clicked)}
      onClick={toggleMenu}
    >
      <span />
    </div>
  )
}

export { BurgerButton }
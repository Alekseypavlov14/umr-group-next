import { FC } from 'react'
import { useAppDispatch, useAppSelector } from './../../app/hooks'
import { isOpenedSelector, close } from '../../features/menu/menuSlice'
import Link from 'next/link'
import cn from 'classnames'
import styles from './Nav.module.css'

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const isOpened = useAppSelector(isOpenedSelector)
  const dispatch = useAppDispatch()

  return (
    <div className={cn(styles.Nav, isOpened && styles.Opened)}>
      <div className={styles.Nav__list}>
        <div className={styles.Nav__item}>
          <Link href='/'>
            <a
              onClick={() => dispatch(close())}
              className={styles.Nav__link} 
              children='Головна'
            />
          </Link>
        </div>
        <div className={styles.Nav__item}>
          <Link href='/order'>
            <a
              onClick={() => dispatch(close())}
              className={styles.Nav__link}
              children='Замовити'
            />
          </Link>
        </div>
        <div className={styles.Nav__item}>
          <Link href='/translators'>
            <a
              onClick={() => dispatch(close())}
              className={styles.Nav__link}
              children='Перекладачі'
            />
          </Link>
        </div>
        <div className={styles.Nav__item}>
          <Link href='/about'>
            <a
              onClick={() => dispatch(close())}
              className={styles.Nav__link}
              children='О нас'
            />
          </Link>
        </div>
        <div className={styles.Nav__item}>
          <Link href='/contacts'>
            <a
              onClick={() => dispatch(close())}
              className={styles.Nav__link}
              children='Контакти'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export { Nav }
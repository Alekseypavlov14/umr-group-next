import { FC } from 'react'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { isOpenedSelector, close } from '@features/menu/menuSlice'
import { contentSelector } from '@features/lang/languageSlice'
import Link from 'next/link'
import cn from 'classnames'
import styles from './Nav.module.css'

interface NavProps {}

export const Nav: FC<NavProps> = () => {
  const isOpened = useAppSelector(isOpenedSelector)
  const dispatch = useAppDispatch()
  const links = useAppSelector(contentSelector).header.links

  return (
    <div className={cn(styles.Nav, isOpened && styles.Opened)}>
      <div className={styles.Nav__list}>
        <div className={styles.Nav__item}>
          <Link 
            onClick={() => dispatch(close())}
            className={styles.Nav__link} 
            href='/'
          >
            {links[0]}
          </Link>
        </div>
        <div className={styles.Nav__item}>
          <Link 
            onClick={() => dispatch(close())}
            className={styles.Nav__link}
            href='/order'
          >
            {links[1]}
          </Link>
        </div>
        <div className={styles.Nav__item}>
          <Link 
            onClick={() => dispatch(close())}
            className={styles.Nav__link}
            href='/translators'
          >
            {links[2]}
          </Link>
        </div>
        <div className={styles.Nav__item}>
          <Link 
            onClick={() => dispatch(close())}
            className={styles.Nav__link}
            href='/about'
          >
            {links[3]}
          </Link>
        </div>
        <div className={styles.Nav__item}>
          <Link 
            onClick={() => dispatch(close())}
            className={styles.Nav__link}
            href='/contacts'
          >
            {links[5]}
          </Link>
        </div>
      </div>
    </div>
  )
}

import { FC } from 'react'
import { isOpenedSelector, close } from '@features/menu'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { useRoutes } from '@app/routing'
import Link from 'next/link'
import cn from 'classnames'
import styles from './Nav.module.css'

interface NavProps {}

export const Nav: FC<NavProps> = () => {
  const isOpened = useAppSelector(isOpenedSelector)
  const dispatch = useAppDispatch()

  const links = useRoutes()

  const closeHandler = () => dispatch(close())

  return (
    <div className={cn(styles.Nav, isOpened && styles.Opened)}>
      <div className={styles.Nav__list}>
        {links.map(link => (
          <div className={styles.Nav__item} key={link.to}>
            <Link 
              className={styles.Nav__link} 
              onClick={closeHandler}
              href={link.to}
            >
              {link.content}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

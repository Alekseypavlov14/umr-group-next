import { FC } from 'react'
import { useAppDispatch, useAppSelector } from './../../app/hooks'
import { isOpenedSelector, close } from '../../features/menu/menuSlice'
import { contentSelector } from '../../features/lang/languageSlice'
import Link from 'next/link'
import cn from 'classnames'
import styles from './Nav.module.css'

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const isOpened = useAppSelector(isOpenedSelector)
  const dispatch = useAppDispatch()
  const links = useAppSelector(contentSelector).header.links

  return (
    <div className={cn(styles.Nav, isOpened && styles.Opened)}>
      <div className={styles.Nav__list}>
        <div className={styles.Nav__item}>
          <Link href='/'>
            <a
              onClick={() => dispatch(close())}
              className={styles.Nav__link} 
              children={links[0]}
            />
          </Link>
        </div>
        <div className={styles.Nav__item}>
          <Link href='/order'>
            <a
              onClick={() => dispatch(close())}
              className={styles.Nav__link}
              children={links[1]}
            />
          </Link>
        </div>
        <div className={styles.Nav__item}>
          <Link href='/translators'>
            <a
              onClick={() => dispatch(close())}
              className={styles.Nav__link}
              children={links[2]}
            />
          </Link>
        </div>
        <div className={styles.Nav__item}>
          <Link href='/about'>
            <a
              onClick={() => dispatch(close())}
              className={styles.Nav__link}
              children={links[3]}
            />
          </Link>
        </div>
        <div className={styles.Nav__item}>
          <Link href='/feedbacks'>
            <a
              onClick={() => dispatch(close())}
              className={styles.Nav__link}
              children={links[4]}
            />
          </Link>
        </div>
        <div className={styles.Nav__item}>
          <Link href='/contacts'>
            <a
              onClick={() => dispatch(close())}
              className={styles.Nav__link}
              children={links[5]}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export { Nav }
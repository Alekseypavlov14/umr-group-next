import { FC } from 'react'
import { Nav, BurgerButton } from '@features/menu'
import { Container } from '@shared/components/Container'
import { Logo } from '@shared/components/Logo'
import styles from './Header.module.css'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <Container>
        <div className={styles.HeaderContent}>
          <Logo />
          <Nav />
          <BurgerButton />
        </div>
      </Container>
    </div>
  )
}

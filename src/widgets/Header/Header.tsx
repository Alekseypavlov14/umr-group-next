import { FC } from 'react'
import { BurgerButton } from './components/BurgerButton/BurgerButton'
import { Container } from '@shared/components/Container/Container'
import { Logo } from '@shared/components/Logo/Logo'
import { Nav } from '@shared/components/Nav/Nav'
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

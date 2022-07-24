import { FC } from 'react'
import { BurgerButton } from '../BurgerButton/BurgerButton'
import { Container } from '../Container/Container'
import { Logo } from '../Logo/Logo'
import { Nav } from '../Nav/Nav'
import { TranslateButton } from '../TranslateButton/TranslateButton'
import styles from './Header.module.css'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <Container>
        <div className={styles.HeaderContent}>
          <Logo />
          <Nav />
          <div className={styles.Buttons}>
            <TranslateButton />
            <BurgerButton />
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Header }
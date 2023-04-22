import { FC } from 'react'
import { BurgerButton } from '../BurgerButton/BurgerButton'
import { Container } from '@shared/components/Container/Container'
import { Logo } from '@shared/components/Logo/Logo'
import { Nav } from '@shared/components/Nav/Nav'
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
import { FC } from 'react'
import logo from './../../../assets/logo.png'
import Image from 'next/image'
import styles from './Logo.module.css'

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <div className={styles.Logo}>
      <Image 
        src={logo}
        alt='Logo'
      />
    </div>
  )
}

export { Logo }
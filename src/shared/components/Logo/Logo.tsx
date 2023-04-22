import { FC } from 'react'
import Image from 'next/image'
import styles from './Logo.module.css'
import logo from './logo.png'

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  return (
    <div className={styles.Logo}>
      <Image 
        src={logo}
        alt='Logo'
      />
    </div>
  )
}

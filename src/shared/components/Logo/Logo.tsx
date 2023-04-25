import { FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from './Logo.module.css'
import logo from './logo.png'

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  const router = useRouter()

  function clickHandler() {
    router.push('/')
  }

  return (
    <div className={styles.Logo}>
      <Image 
        onClick={clickHandler}
        src={logo}
        alt='Logo'
      />
    </div>
  )
}

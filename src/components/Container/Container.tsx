import { FC, ReactNode } from 'react'
import styles from './Container.module.css'

interface ContainerProps {
  children: ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className={styles.Container}>
      {children}
    </div>
  )
}

export { Container }
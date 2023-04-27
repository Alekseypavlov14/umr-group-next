import { FC, MouseEvent } from 'react'
import { clsx } from '@shared/lib/clsx'
import styles from './Button.module.css'

interface ButtonProps {
  href: string
  children: string
  outlined?: boolean
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

export const Button: FC<ButtonProps> = ({
  href,
  children,
  outlined,
  onClick
}) => {
  const classNames = clsx(styles.Button, outlined && styles.Outlined)

  return (
    <a 
      className={classNames}
      onClick={onClick}
      href={href}
    >
      {children}
    </a>
  )
}

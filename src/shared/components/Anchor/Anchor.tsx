import { FC } from 'react'
import { clsx } from '@shared/lib/clsx'
import styles from './Anchor.module.css'

interface AnchorProps {
  href: string
  children: string
  className?: string
}

export const Anchor: FC<AnchorProps> = ({
  href,
  children,
  className
}) => {
  const classNames = clsx(styles.Anchor, className)

  return (
    <a
      className={classNames}
      rel='noreferrer'
      target='_blank'
      href={href}
    >
      {children}
    </a>
  )
}

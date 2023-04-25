import { FC, ReactNode } from 'react'
import styles from './TextBlock.module.css'

interface TextBlockProps {
  children: [ReactNode, ReactNode]
}

export const TextBlock: FC<TextBlockProps> = ({
  children
}) => {
  return (
    <div className={styles.TextBlock}>
      <h2 className={styles.TextBlock__title}>{children[0]}</h2>
      <div className={styles.TextBlock__content}>{children[1]}</div>
    </div>
  )
}

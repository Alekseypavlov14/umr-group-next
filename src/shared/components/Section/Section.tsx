import { FC, ReactNode } from 'react'
import { Container } from '@shared/components/Container'
import { clsx } from '@shared/lib/clsx'
import styles from './Section.module.css'

interface SectionProps {
  children: ReactNode
  withoutImage?: boolean
}

export const Section: FC<SectionProps> = ({ 
  children, 
  withoutImage 
}) => {
  const classNames = clsx(styles.Section, withoutImage && styles.WithoutImage)

  return (
    <div className={classNames}>
      <Container>
        <div className={styles.Section__Content}>
          {children}
        </div>
      </Container>
    </div>
  )
}

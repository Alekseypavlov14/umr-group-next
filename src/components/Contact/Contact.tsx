import { FC } from 'react'
import { Anchor } from '@shared/components/Anchor/Anchor'
import styles from './Contact.module.css'

interface ContactProps {
  socialMedia: string
  link: string
  label: string
}

export const Contact: FC<ContactProps> = ({
  socialMedia,
  link,
  label
}) => {
  return (
    <div className={styles.Contact}>
      <div className={styles.SocialMedia}>
        {socialMedia}
      </div>
      <Anchor 
        className={styles.Link} 
        href={link}
      >
        {label}
      </Anchor>
    </div>
  )
}

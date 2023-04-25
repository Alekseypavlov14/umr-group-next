import { Container } from "@shared/components/Container/Container"
import { Contact } from "./components/Contact/Contact"
import styles from './Contacts.module.css'

export default function Contacts() {
  return (
    <div className={styles.Contacts}>
      <Container>
        <div className={styles.ContactsList}>
          <Contact
            socialMedia='Telegram'
            link='https://telegram.me/aleshapavlov14'
            label='Oleksii Pavlov'
          />

          <Contact
            socialMedia='Google'
            link='mailto:aleshapavlov9@gmail.com'
            label='UMR Translate Group'
          />

          <Contact
            socialMedia='Instagram'
            link='https://instagram.com/alio.sha13'
            label='Oleksii Pavlov'
          />
        </div>
      </Container>
    </div>
  )
}
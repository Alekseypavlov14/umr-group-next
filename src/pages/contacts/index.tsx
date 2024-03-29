import { Container } from '@shared/components/Container'
import { Contact } from '@shared/components/Contact'
import contacts from './data/contacts.json'
import styles from './Contacts.module.css'

export default function Contacts() {
  return (
    <div className={styles.Contacts}>
      <Container>
        <div className={styles.ContactsList}>
          {contacts.map((contact, index) => (
            <Contact
              key={index}
              socialMedia={contact.media}
              label={contact.label}
              link={contact.link}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}
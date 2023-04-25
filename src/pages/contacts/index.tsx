import { Container } from "@shared/components/Container/Container"
import { Contact } from "./components/Contact/Contact"
import contacts from '@data/contacts.json'
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
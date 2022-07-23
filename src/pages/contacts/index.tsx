import { Container } from "../../components/Container/Container"
import { Contact } from "../../components/Contact/Contact"
import styles from './Contacts.module.css'

export default function Contacts() {
  return (
    <div className={styles.Contacts}>
      <Container>
        <div className={styles.Contacts__List}>
          <Contact
            socialMedia='Telegram'
            link='https://telegram.me/+380508801537'
            label='Andrey Shvedov'
          />

          <Contact
            socialMedia='Google'
            link='mailto:umr.translate.group@gmail.com'
            label='UMR Translate Group'
          />

          <Contact
            socialMedia='Instagram'
            link='https://instagram.com/_andrey_shvedov_'
            label='Andrey Shvedov'
          />
        </div>
      </Container>
    </div>
  )
}
import { TextBlock } from "../components/TextBlock/TextBlock"
import { Section } from "../components/Section/Section"
import Link from "next/link"
import styles from './index.module.css'

export default function Home() {
  return (
    <>
      <Section withoutImage>
        <TextBlock>
          <>Ми - <span>UMR&nbsp; Group</span></>
          <>
            Ми допомагаємо Вам знаходити перекладачів з російської на 
            румунську мову. Наші спеціалісти вирішують проблеми, з якими зустрічаються 
            громадяни України.
          </>
        </TextBlock>
      </Section>

      <Section withoutImage>
        <div className={styles.OrderLinkContent}>
          <TextBlock>
            <>Які питання ми можемо допомогти вирішити?</>
            <>
              Наша команда пропонує два вида послуг перекладача: 
              по телефону та на місці.
            </>
          </TextBlock>
          <Link href='/order'>
            <a className={styles.OrderLink}>
              Замовити
            </a>
          </Link>
        </div>
      </Section>

      <Section withoutImage>
        <div className={styles.OrderLinkContent}>
          <TextBlock>
            <>Як наші користувачі <span>оцінюють</span> нашу роботу?</>
            <>
              Прочитайте відгуки, які залишили користувачі нашого сервісу
            </>
          </TextBlock>
          <Link href='/feedbacks'>
            <a className={styles.OrderLink}>
              Відгуки
            </a>
          </Link>
        </div>
      </Section>
    </>
  )
}
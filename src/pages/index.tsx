import { Layout } from "../components/Layout/Layout"
import { TextBlock } from "../components/TextBlock/TextBlock"
import { Section } from "../components/Section/Section"
import Link from "next/link"
import styles from './../styles/Home.module.css'
import { Provider } from "react-redux"
import store from "../app/store"

export default function Home() {
  return (
    <Layout>
      <Section>
        <TextBlock>
          <span>Ми - <span>UMR&nbsp; Group</span></span>
          <span>
            Ми допомагаємо Вам знаходити перекладачів з російської на 
            румунську мову. Наші спеціалісти вирішують проблеми, з якими зустрічаються 
            громадяни України.
          </span>
        </TextBlock>

        {/* <img 
          className={styles.Image} 
          src={image} 
          alt='translator' 
        /> */}
      </Section>

      <Section withoutImage>
        <div className={styles.OrderLinkContent}>
          <TextBlock>
            <span>Які питання ми можемо допомогти вирішити?</span>
            <span>
              Наша команда пропонує два вида послуг перекладача: 
              по телефону та на місці.
            </span>
          </TextBlock>
          <Link href='/order'>
            <a className={styles.OrderLink}>
              Замовити
            </a>
          </Link>
        </div>
      </Section>
    </Layout>
  )
}
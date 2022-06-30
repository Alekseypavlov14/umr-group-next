import { Layout } from "../components/Layout/Layout"
import { TextBlock } from "../components/TextBlock/TextBlock"
import { Section } from "../components/Section/Section"
import Link from "next/link"
import styles from './../styles/pages/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Section>
        <TextBlock>
          <>Ми - <span>UMR&nbsp; Group</span></>
          <>
            Ми допомагаємо Вам знаходити перекладачів з російської на 
            румунську мову. Наші спеціалісти вирішують проблеми, з якими зустрічаються 
            громадяни України.
          </>
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
    </Layout>
  )
}
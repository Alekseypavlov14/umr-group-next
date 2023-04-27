import { TextBlock } from "@shared/components/TextBlock"
import { Section } from "../shared/components/Section"
import Link from "next/link"
import styles from './index.module.css'

export default function Home() {
  return (
    <>
      <Section withoutImage>
        <TextBlock>
          <>We are UMR Group</>
          <>
            We help you to find translators from russian to romanian. Our 
            employees solve the problems what you meet in Romania
          </>
        </TextBlock>
      </Section>

      <Section withoutImage>
        <div className={styles.OrderLinkContent}>
          <TextBlock>
            <>Which problems do we help to solve?</>
            <>There are two types of translation: offline and by the phone</>
          </TextBlock>
          
          <Link 
            className={styles.OrderLink}
            href='/order'
          >
            Order
          </Link>
        </div>
      </Section>
    </>
  )
}
import { langSelector } from "../features/lang/languageSlice"
import { TextBlock } from "../components/TextBlock/TextBlock"
import { Section } from "../components/Section/Section"
import { useAppSelector } from "./../app/hooks"
import Link from "next/link"
import styles from './index.module.css'

export default function Home() {
  const HomePage = useAppSelector(langSelector).page.main

  return (
    <>
      <Section withoutImage>
        <TextBlock>
          <>{HomePage.sections[0].title}</>
          <>{HomePage.sections[0].content}</>
        </TextBlock>
      </Section>

      <Section withoutImage>
        <div className={styles.OrderLinkContent}>
          <TextBlock>
            <>{HomePage.sections[1].title}</>
            <>{HomePage.sections[1].content}</>
          </TextBlock>
          <Link href='/order'>
            <a className={styles.OrderLink}>
              {HomePage.sections[1].button}
            </a>
          </Link>
        </div>
      </Section>

      <Section withoutImage>
        <div className={styles.OrderLinkContent}>
          <TextBlock>
            <>{HomePage.sections[2].title}</>
            <>{HomePage.sections[2].content}</>
          </TextBlock>
          <Link href='/feedbacks'>
            <a className={styles.OrderLink}>
              {HomePage.sections[2].button}
            </a>
          </Link>
        </div>
      </Section>
    </>
  )
}
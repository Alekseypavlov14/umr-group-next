import { contentSelector } from "@features/lang/languageSlice"
import { TextBlock } from "@shared/components/TextBlock/TextBlock"
import { Section } from "../components/Section/Section"
import { useAppSelector } from "@shared/hooks/useAppSelector"
import Link from "next/link"
import styles from './index.module.css'

export default function Home() {
  const HomePage = useAppSelector(contentSelector).page.main

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
          <Link 
            className={styles.OrderLink}
            href='/order'
          >
            {HomePage.sections[1].button}
          </Link>
        </div>
      </Section>

      <Section withoutImage>
        <div className={styles.OrderLinkContent}>
          <TextBlock>
            <>{HomePage.sections[2].title}</>
            <>{HomePage.sections[2].content}</>
          </TextBlock>
          <Link 
            className={styles.OrderLink}
            href='/feedbacks'
          >
            {HomePage.sections[2].button}
          </Link>
        </div>
      </Section>
    </>
  )
}
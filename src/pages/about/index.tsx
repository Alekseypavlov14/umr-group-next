import { useAppSelector } from "@shared/hooks/useAppSelector"
import { Section } from "../../shared/components/Section/Section"
import { TextBlock } from "@shared/components/TextBlock/TextBlock"
import { contentSelector } from "@features/lang/languageSlice"

export default function About() {
  const AboutPage = useAppSelector(contentSelector).page.about

  return (
    <Section withoutImage>
      <TextBlock>
        <>{AboutPage.text.title}</>
        <>{AboutPage.text.content}</>
      </TextBlock>
    </Section>
  )
}
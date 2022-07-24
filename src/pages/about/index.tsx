import { useSelector } from "react-redux"
import { Section } from "../../components/Section/Section"
import { TextBlock } from "../../components/TextBlock/TextBlock"
import { langSelector } from "../../features/lang/languageSlice"

export default function About() {
  const AboutPage = useSelector(langSelector).page.about

  return (
    <Section withoutImage>
      <TextBlock>
        <>{AboutPage.text.title}</>
        <>{AboutPage.text.content}</>
      </TextBlock>
    </Section>
  )
}
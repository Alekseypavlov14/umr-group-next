import { Section } from "../../components/Section/Section"
import { TextBlock } from "../../components/TextBlock/TextBlock"

export default function About() {
  return (
    <Section withoutImage>
      <TextBlock>
        <>Хто ми?</>
        <>
          Ми – UMR group. Наша ідея полягає в тому, 
          щоб допомогти українцям, які покинули Україну після 24 лютого. 
          Ви можете звертатися до нас з питань перекладу. Ми живемо в Румунії 
          вже більше трьох місяців і точно знаємо всі нюанси і можливі проблеми, 
          з якими Ви можете зустрітися в цій країні.
        </>
      </TextBlock>
    </Section>
  )
}
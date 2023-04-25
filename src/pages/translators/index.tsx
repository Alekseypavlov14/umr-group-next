import { Container } from "@shared/components/Container/Container"
import { TextBlock } from "@shared/components/TextBlock/TextBlock"
import { Button } from "@shared/components/Button/Button"
import { useAppSelector } from "@shared/hooks/useAppSelector"
import { contentSelector } from "@features/lang/languageSlice"
import styles from './Translators.module.css'

export default function Translators() {
  const TranslatorsPage = useAppSelector(contentSelector).page.translators

  return (
    <div className={styles.Translators}>
      <Container>
        <div className={styles.TranslatorsContent}>
          {TranslatorsPage.textBlocks.map((block, index) => (
            <TextBlock key={index}>
              <>{block.title}</>
              <>{block.content}</>
            </TextBlock>
          ))}

          <div className={styles.ButtonBlock}>
            <Button href='mailto:umr.translate.group@gmail.com?subject=Translator'>
              {TranslatorsPage.button}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
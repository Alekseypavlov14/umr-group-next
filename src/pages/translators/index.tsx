import { Container } from "../../components/Container/Container"
import { TextBlock } from "../../components/TextBlock/TextBlock"
import { Button } from "../../components/Button/Button"
import { useAppSelector } from "./../../app/hooks"
import { contentSelector } from "../../features/lang/languageSlice"
import styles from './Translators.module.css'

export default function Translators() {
  const TranslatorsPage = useAppSelector(contentSelector).page.translators

  return (
    <div className={styles.Translators}>
      <Container>
        <div className={styles.TranslatorsContent}>
          <TextBlock>
            <>{TranslatorsPage.textBlocks[0].title}</>
            <>{TranslatorsPage.textBlocks[0].content}</>
          </TextBlock>

          <TextBlock>
            <>{TranslatorsPage.textBlocks[1].title}</>
            <>{TranslatorsPage.textBlocks[1].content}</>
          </TextBlock>

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
import { Container } from "../components/Container/Container"
import { TextBlock } from "../components/TextBlock/TextBlock"
import { Button } from "../components/Button/Button"
import styles from './../styles/pages/Translators.module.css'

export default function Translators() {
  return (
    <>
      <div className={styles.Translators}>
        <Container>
          <div className={styles.TranslatorsContent}>
            <TextBlock>
              <><span>Join</span> our team!</>
              <>
                We are working with ukrainians and help them
                to find translators in Internet. To join our team, click the button below
                and write to our friend, Andrey
              </>
            </TextBlock>

            <TextBlock>
              <><span>Why</span> should you join us?</>
              <>
                We are taking a lot of orders you will be able to get salary often.
                Also, it is nice way to help ukrainians in this difficult moment.
              </>
            </TextBlock>

            <div className={styles.ButtonBlock}>
              <Button
                href='mailto:umr.translate.group@gmail.com?subject=Translator'
                children='Join'
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
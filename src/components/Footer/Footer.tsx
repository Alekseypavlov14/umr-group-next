import { FC } from 'react'
import { Container } from '../Container/Container'
import { Anchor } from '../Anchor/Anchor'
import Link from 'next/link'
import styles from './Footer.module.css'

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className={styles.Footer}>
      <Container>
        <div className={styles.Title}>
          UMR Group
        </div>
        <div className={styles.Footer__Columns}>
          <div className={styles.Footer__Column}>
            <div className={styles.Footer__Column__Title}>Навігація</div>
            <div className={styles.Footer__Row}>
              <Link href='/'>
                <a className={styles.Footer__Row__Link}>
                  Головна
                </a>
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/order'>
                <a className={styles.Footer__Row__Link}>
                  Замовити
                </a>
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/translators'>
                <a className={styles.Footer__Row__Link}>
                  Перекладачі
                </a>
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/about'>
                <a className={styles.Footer__Row__Link}>
                  О нас
                </a>
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/contacts'>
                <a className={styles.Footer__Row__Link}>
                Контакти
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.Footer__Column}>
            <div className={styles.Footer__Column__Title}>Компанія</div>
            <div className={styles.Footer__Row}>
              Telegram: &nbsp;
              <Anchor 
                className={styles.Footer__Row__Anchor}
                href='https://telegram.me/+380508801537'
                children='Андрій'
              />
            </div>
            <div className={styles.Footer__Row}>
              Google: &nbsp;
              <Anchor 
                className={styles.Footer__Row__Anchor}
                href='mailto:umr.translate.group@gmail.com'
                children='umr.translate.group@gmail.com'
              />
            </div>
          </div>
          <div className={styles.Footer__Column}>
            <div className={styles.Footer__Column__Title}>Автор</div>
            <div className={styles.Footer__Row}>
              Telegram: &nbsp;
              <Anchor 
                className={styles.Footer__Row__Anchor}
                href='https://telegram.me/aleshapavlov14'
                children='@aleshapavlov14'
              />
            </div>
            <div className={styles.Footer__Row}>
              Google: &nbsp;
              <Anchor
                className={styles.Footer__Row__Anchor}
                href='mailto:aleshapavlov9@gmail.com'
                children='aleshapavlov9@gmail.com'
              />
            </div>
            <div className={styles.Footer__Row}>
              GitHub: &nbsp;
              <Anchor 
                className={styles.Footer__Row__Anchor}
                href='https://github.com/Alekseypavlov14'
                children='Alekseypavlov14'
              />
            </div>
          </div>
        </div>
        <div className={styles.Copyright}>&copy; Aleksey Pavlov 2022</div>
      </Container>
    </div>
  )
}

export { Footer }
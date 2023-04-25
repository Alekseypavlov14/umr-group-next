import { FC } from 'react'
import { Container } from '@shared/components/Container/Container'
import { useRoutes } from '@app/routing'
import { Anchor } from '@shared/components/Anchor/Anchor'
import Link from 'next/link'
import styles from './Footer.module.css'

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  const links = useRoutes()

  return (
    <div className={styles.Footer}>
      <Container>
        <div className={styles.Title}>
          UMR Group
        </div>
        <div className={styles.Footer__Columns}>
          <div className={styles.Footer__Column}>
            <div className={styles.Footer__Column__Title}>
              Navigation
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/' className={styles.Footer__Row__Link}>
                {links[0].content}
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/order' className={styles.Footer__Row__Link}>
                {links[1].content}
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/translators' className={styles.Footer__Row__Link}>
                {links[2].content}
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/about' className={styles.Footer__Row__Link}>
                {links[3].content}
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/contacts' className={styles.Footer__Row__Link}>
                {links[4].content}
              </Link>
            </div>
          </div>
          <div className={styles.Footer__Column}>
            <div className={styles.Footer__Column__Title}>
              Company
            </div>
            <div className={styles.Footer__Row}>
              Telegram: &nbsp;
              <Anchor 
                className={styles.Footer__Row__Anchor}
                href='https://telegram.me/aleshapavlov14'
              >
                Oleksii
              </Anchor>
            </div>
            <div className={styles.Footer__Row}>
              Google: &nbsp;
              <Anchor 
                className={styles.Footer__Row__Anchor}
                href='mailto:aleshapavlov9@gmail.com'
              >
                aleshapavlov9@gmail.com
              </Anchor>
            </div>
          </div>
          <div className={styles.Footer__Column}>
            <div className={styles.Footer__Column__Title}>
              Author
            </div>
            <div className={styles.Footer__Row}>
              Telegram: &nbsp;
              <Anchor 
                className={styles.Footer__Row__Anchor}
                href='https://telegram.me/aleshapavlov14'
              >
                @aleshapavlov14
              </Anchor>
            </div>
            <div className={styles.Footer__Row}>
              Google: &nbsp;
              <Anchor
                className={styles.Footer__Row__Anchor}
                href='mailto:aleshapavlov9@gmail.com'
              >
                aleshapavlov9@gmail.com
              </Anchor>
            </div>
            <div className={styles.Footer__Row}>
              GitHub: &nbsp;
              <Anchor 
                className={styles.Footer__Row__Anchor}
                href='https://github.com/Alekseypavlov14'
              >
                Alekseypavlov14
              </Anchor>
            </div>
          </div>
        </div>
        <div className={styles.Copyright}>&copy; Aleksey Pavlov 2022</div>
      </Container>
    </div>
  )
}
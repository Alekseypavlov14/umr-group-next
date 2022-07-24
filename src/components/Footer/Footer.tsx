import { FC } from 'react'
import { Container } from '../Container/Container'
import { Anchor } from '../Anchor/Anchor'
import Link from 'next/link'
import styles from './Footer.module.css'
import { useAppSelector } from '../../app/hooks'
import { langSelector } from '../../features/lang/languageSlice'

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const footer = useAppSelector(langSelector).footer

  return (
    <div className={styles.Footer}>
      <Container>
        <div className={styles.Title}>
          UMR Group
        </div>
        <div className={styles.Footer__Columns}>
          <div className={styles.Footer__Column}>
            <div className={styles.Footer__Column__Title}>
              {footer.navigation.title}
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/'>
                <a className={styles.Footer__Row__Link}>
                  {footer.navigation.links[0]}
                </a>
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/order'>
                <a className={styles.Footer__Row__Link}>
                  {footer.navigation.links[1]}
                </a>
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/translators'>
                <a className={styles.Footer__Row__Link}>
                  {footer.navigation.links[2]}
                </a>
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/about'>
                <a className={styles.Footer__Row__Link}>
                  {footer.navigation.links[3]}
                </a>
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/feedbacks'>
                <a className={styles.Footer__Row__Link}>
                  {footer.navigation.links[4]}
                </a>
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/contacts'>
                <a className={styles.Footer__Row__Link}>
                  {footer.navigation.links[5]}
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.Footer__Column}>
            <div className={styles.Footer__Column__Title}>
              {footer.company.title}
            </div>
            <div className={styles.Footer__Row}>
              {footer.company.contacts[0].media}: &nbsp;
              <Anchor 
                className={styles.Footer__Row__Anchor}
                href='https://telegram.me/+380508801537'
                children={footer.company.contacts[0].content}
              />
            </div>
            <div className={styles.Footer__Row}>
              {footer.company.contacts[1].media}: &nbsp;
              <Anchor 
                className={styles.Footer__Row__Anchor}
                href='mailto:umr.translate.group@gmail.com'
                children={footer.company.contacts[1].content}
              />
            </div>
          </div>
          <div className={styles.Footer__Column}>
            <div className={styles.Footer__Column__Title}>
              {footer.author.title}
            </div>
            <div className={styles.Footer__Row}>
              {footer.author.contacts[0].media}: &nbsp;
              <Anchor 
                className={styles.Footer__Row__Anchor}
                href='https://telegram.me/aleshapavlov14'
                children={footer.author.contacts[0].content}
              />
            </div>
            <div className={styles.Footer__Row}>
              {footer.author.contacts[1].media}: &nbsp;
              <Anchor
                className={styles.Footer__Row__Anchor}
                href='mailto:aleshapavlov9@gmail.com'
                children={footer.author.contacts[1].content}
              />
            </div>
            <div className={styles.Footer__Row}>
              {footer.author.contacts[2].media}: &nbsp;
              <Anchor 
                className={styles.Footer__Row__Anchor}
                href='https://github.com/Alekseypavlov14'
                children={footer.author.contacts[2].content}
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
import { FC } from 'react'
import { contentSelector } from '@features/lang/languageSlice'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { Container } from '@shared/components/Container/Container'
import { Anchor } from '@shared/components/Anchor/Anchor'
import Link from 'next/link'
import styles from './Footer.module.css'

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  const footer = useAppSelector(contentSelector).footer

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
              <Link href='/' className={styles.Footer__Row__Link}>
                {footer.navigation.links[0]}
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/order' className={styles.Footer__Row__Link}>
                {footer.navigation.links[1]}
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/translators' className={styles.Footer__Row__Link}>
                {footer.navigation.links[2]}
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/about' className={styles.Footer__Row__Link}>
                {footer.navigation.links[3]}
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link href='/contacts' className={styles.Footer__Row__Link}>
                {footer.navigation.links[4]}
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
                href='https://telegram.me/aleshapavlov14'
                children={footer.company.contacts[0].content}
              />
            </div>
            <div className={styles.Footer__Row}>
              {footer.company.contacts[1].media}: &nbsp;
              <Anchor 
                className={styles.Footer__Row__Anchor}
                href='mailto:aleshapavlov9@gmail.com'
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
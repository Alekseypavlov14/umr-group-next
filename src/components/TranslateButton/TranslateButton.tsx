import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { langSelector, translate } from '../../features/lang/languageSlice'
import Image from 'next/image'
import styles from './TranslateButton.module.css'

import ua from './../../assets/langs/ukraine.png'
import usa from './../../assets/langs/usa.png'

interface TranslateButtonProps {}

export const TranslateButton: FC<TranslateButtonProps> = () => {
  const lang = useAppSelector(langSelector)
  const dispatch = useAppDispatch()

  function getImageSrc(lang: string) {
    switch (lang) {
      case 'ua': return usa
      case 'en': return ua
    }
  }

  const clickHandler = () => {
    if (lang === 'ua') dispatch(translate('en'))
    if (lang === 'en') dispatch(translate('ua'))
  }

  return (
    <div 
      className={styles.TranslateButton}
      onClick={clickHandler}
    >
      <Image src={getImageSrc(lang)} alt="" />
    </div>
  )
}
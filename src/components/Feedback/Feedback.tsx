import { FC } from 'react'
import { FeedbackType } from '../../types/Feedback.type'
import styles from './Feedback.module.css'

interface FeedbackProps {
  feedback: FeedbackType
}

const Feedback: FC<FeedbackProps> = ({ feedback }) => {
  return (
    <div className={styles.Feedback}>
      <div className={styles.Author}>{feedback.author}</div>
      <div className={styles.Content}>{feedback.content}</div>
    </div>
  )
}

export { Feedback }
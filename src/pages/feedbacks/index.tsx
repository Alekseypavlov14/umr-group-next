import { Container } from '@shared/components/Container/Container'
import { Feedback } from '../../components/Feedback/Feedback'
import { FeedbackPanel } from '../../components/FeedbackPanel/FeedbackPanel'
import { FeedbackType } from '../../types/Feedback.type'
import feedbacksData from './../../data/feedbacks.json'
import styles from './Feedbacks.module.css'

export default function Feedbacks({ feedbacks }) {
  return (
    <div className={styles.Feedbacks}>
      <FeedbackPanel /> 
      
      <Container>
        <div className={styles.FeedbackContainer}>
          {feedbacks.map((feedback, index) => (
            <Feedback feedback={feedback} key={index} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export async function getServerSideProps() {
  const feedbacks = feedbacksData

  return {
    props: {
      feedbacks: feedbacks as FeedbackType[]
    }
  }
}
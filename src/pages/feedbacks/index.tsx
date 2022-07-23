import { Container } from '../../components/Container/Container'
import { Feedback } from '../../components/Feedback/Feedback'
import { FeedbackPanel } from '../../components/FeedbackPanel/FeedbackPanel'
import { FeedbackType } from '../../types/Feedback.type'
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
  const response = await fetch('https://umr-group.herokuapp.com/feedbacks')
  const data = await response.json()

  return {
    props: {
      feedbacks: data.feedbacks as FeedbackType[]
    }
  }
}
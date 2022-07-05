import { FC, useState, MouseEvent } from 'react'
import { APIRequest } from '../../business/APIRequest/APIRequest'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import styles from './FeedbackPanel.module.css'

interface FeedbackPanelProps {}

const FeedbackPanel: FC<FeedbackPanelProps> = () => {
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  function createFeedback(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()

    if (author.length === 0 || content.length < 20) {
      return // TODO: add UI invalid inputs
    }

    APIRequest('/feedback', {
      method: 'POST',
      body: {
        feedback: {
          author, 
          content 
        }
      }
    })

    setAuthor('')
    setContent('')
  }

  return (
    <div className={styles.FeedbackPanel}>
      <Container>
        <div className={styles.PanelHeader}>
          <input 
            onChange={e => setAuthor(e.target.value)}
            placeholder="Ваше ім'я або пошта"
            className={styles.Input}
            value={author}
            type='text'
          />
  
          <Button
            onClick={createFeedback}
            href='/'
          >
            Відправити
          </Button>
        </div>
  
        <textarea 
          onChange={(e) => setContent(e.target.value)}
          className={styles.Textarea}
          placeholder='Відгук'
          value={content}
        />
      </Container>
    </div>
  )
}

export { FeedbackPanel }
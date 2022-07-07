import { FC, useState, MouseEvent } from 'react'
import { APIRequest } from '../../business/APIRequest/APIRequest'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import styles from './FeedbackPanel.module.css'

interface FeedbackPanelProps {}

const FeedbackPanel: FC<FeedbackPanelProps> = () => {
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  const addInvalid = (id: string) => {
    document.getElementById(id)
    .classList.add(styles.Invalid)
  }

  const removeInvalid = (id: string) => {
    document.getElementById(id)
    .classList.remove(styles.Invalid)
  }

  function createFeedback(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()

    if (author.length === 0 || content.length < 20) {
      if (author.length === 0) {
        addInvalid('feedback-author')
      }
  
      if (content.length <= 20) {
        addInvalid('feedback-content')
      }

      return
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
            id='feedback-author'
            onChange={e => setAuthor(e.target.value)}
            onFocus={(e) => removeInvalid('feedback-author')}
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
          id='feedback-content'
          onChange={(e) => setContent(e.target.value)}
          onFocus={() => removeInvalid('feedback-content')}
          className={styles.Textarea}
          placeholder='Відгук'
          value={content}
        />
      </Container>
    </div>
  )
}

export { FeedbackPanel }
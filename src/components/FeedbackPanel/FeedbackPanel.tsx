import { FC, useState, MouseEvent } from 'react'
import { APIRequest } from '../../business/APIRequest/APIRequest'
import { Button } from '../Button/Button'
import styles from './FeedbackPanel.module.css'

interface FeedbackPanelProps {}

const FeedbackPanel: FC<FeedbackPanelProps> = () => {
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  function createFeedback(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()

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
    </div>
  )
}

export { FeedbackPanel }
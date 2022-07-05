import { FC, useState } from 'react'
import { Button } from '../Button/Button'
import styles from './FeedbackPanel.module.css'

interface FeedbackPanelProps {}

const FeedbackPanel: FC<FeedbackPanelProps> = () => {
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  return (
    <div className={styles.FeedbackPanel}>
      <div className={styles.PanelHeader}>
        <input 
          type='text'
          className={styles.Input}
          placeholder="Ваше ім'я або пошта"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <Button
          href='/feedbacks'
          onClick={e => {
            e.preventDefault()
            fetch('https://umr-group.herokuapp.com/feedback', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                feedback: { author, content }
              })
            })
          }}
        >
          Відправити
        </Button>
      </div>
      <textarea 
        className={styles.Textarea}
        placeholder='Відгук'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  )
}

export { FeedbackPanel }
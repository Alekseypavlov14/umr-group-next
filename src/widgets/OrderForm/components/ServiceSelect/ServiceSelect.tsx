import { FC } from 'react'
import { useServiceOptions } from './hooks/useServiceOptions'
import { useSelectHandler } from './hooks/useSelectHandler'
import { useValue } from './hooks/useValue'
import Select from 'react-select'
import styles from './ServiceSelect.module.css'

interface ServiceSelectProps {}

export const ServiceSelect: FC<ServiceSelectProps> = () => {
  const serviceOptions = useServiceOptions()
  const selectHandler = useSelectHandler()
  const value = useValue()

  return (
    <Select
      value={value}
      options={serviceOptions}
      instanceId={'option'}
      className={styles.ServiceSelect}
      onChange={selectHandler}
    />
  )
}
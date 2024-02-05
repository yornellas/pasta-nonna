import React from 'react'
import styles from './Filter.module.scss'
import { FILTER } from './filter'

type FilterOption = (typeof FILTER)[0]

interface Props {
  filterId: number | null
  setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filter({ filterId, setFilter }: Props) {
  const filter: FilterOption[] = FILTER

  function selectFilter(option: FilterOption) {
    if (filterId === option.id) return setFilter(null)
    return setFilter(option.id)
  }

  return (
    <div className={styles.filter}>
      {filter.map((option) => (
        <button
          className={`
            ${styles.filter__filter} ${
            filterId === option.id ? styles['filter__filter--active'] : ''
          }`}
          key={option.id}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

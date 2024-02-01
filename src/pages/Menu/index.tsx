import styles from './Menu.module.scss'
import logo from '../../assets/logo.svg'
import Search from '../Search'
import { useState } from 'react'

export default function Menu() {
  const [search, setSearch] = useState('')

  return (
    <main>
      <nav className={styles.menu}>
        <img src={logo} alt="logo" />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa da Nonna</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Menu</h3>
        <Search search={search} setSearch={setSearch} />
      </section>
    </main>
  )
}

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.main}>
      <div className={styles.topic}>
        <h3>Bailard Foundation</h3>
        <div className={styles.navigation}>
          <h4>About</h4>
          <h4>News</h4>
          <h4>Read Me</h4>
          <a href="http://localhost:3000/">Take Action</a>
        </div>
      </div>
    </header>
  )
}

export default Header
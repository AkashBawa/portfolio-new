import type { NextPage } from 'next';
import App from '../components/app';
import styles from '../styles/Home.module.css';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <App></App>
    </div>
  )
}

export default Home

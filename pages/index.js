
import AboutProgram from '../components/AboutProgram'
import Banner from '../components/Banner'
import Courses from '../components/Courses'
import Learning from '../components/Learning'
import Questions from '../components/Questions'
import Tracks from '../components/Tracks'
import WhoCanApply from '../components/WhoCanApply'
import styles from '../styles/Home.module.scss'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
          <title>Digital Aided School | A modern way to learn</title>
      </Head>
    <main className={styles.container}>
      <Banner />
      <Courses />
      <Tracks />
      <AboutProgram />
      <Learning />
      <WhoCanApply />
      <Questions/>
      </main>
    </>
  )
}

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Card, CardGroup} from 'react-bootstrap'

const Donate: NextPage = () => {
  

  return (
    <>
      <Head>
        <title>Hack</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="referrer" content="no-referrer"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/hackthon4human.appspot.com/o/background.jpg?alt=media&token=455f8c2f-b634-4ad1-9185-90207f05d122" className="img-fluid"/>
        <CardGroup className={styles.homePage}>
            
        </CardGroup>
      </div>
    </>
  )
}

export default Donate;
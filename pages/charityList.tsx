import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Card, CardGroup } from 'react-bootstrap'

const CharityList: NextPage = () => {
  

  return (
    <>
      <Head>
        <title>Hack</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <CardGroup className={styles.homePage}>
          
        </CardGroup>
      </div>
    </>
  )
}

export default CharityList;
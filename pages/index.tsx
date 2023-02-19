import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {Button, Card, CardGroup, Col, Container, Row, Image} from 'react-bootstrap'
import ExpendableText from "@/components/shared/ExpendableText";
import React from "react";


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Hack</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <Card className={styles.picasso}>
                  <div className={styles.logoBox}>
                    <Image 
                    alt="image"
                    src={'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/FPS_transparent.PNG?alt=media&token=c9cc8a92-8e3d-4fce-a2bd-c82f60a724b9'}
                    className={styles.picassoImg}
                    width={'25%'}
                    height={'25%'}
                    />
                <Card.Body className={styles.picassoBody}>
                    <Card.Title className={styles.picasso_description}> Female Period Support </Card.Title>
                </Card.Body>
                </div>
            </Card>
            <CardGroup className={styles.homePage}>
                {/* <div>
                    <CardGroup className={styles.startImg}>
                        <Card>
                            <Image
                                src={
                                    'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/two_hands.jpg?alt=media&token=4c0a113c-6b90-455c-a130-4af4dad6bc91'
                                }
                                className={styles.mainImg}
                                width={'100%'}
                                height={'100%'}/>
                        </Card>
                    </CardGroup>
                </div> */}
                <div>
                    <CardGroup className={styles.ourGoals}>
                        <Card className={styles.txtGroup}>
                            <Card.Title className={styles.slogan}>Even Little Helps!</Card.Title>
                        </Card>
                    </CardGroup>
                </div>
                <div>
                    <CardGroup className={styles.ourMission}>
                        <Card className={styles.txtGroup}>
                            <Card.Title className={styles.missionTitle}>Our Mission</Card.Title>
                            <Card.Text className={styles.missionText}>Providing a safe and supportive platform for advocating and supporting homeless women who struggle to access menstrual products.</Card.Text>
                        </Card>
                    </CardGroup>
                </div>
                <div className="container">
                    <CardGroup className={styles.getInvolved}>
                        <h1>Get Involved</h1>
                    </CardGroup>
                    <div>

                        <div style={{ display: "flex" , padding: "2em"}} >

                            <div className ="col-7 align-content-center">
                                <Card style={{ width: '30rem' }}>
                                    <Card.Img className = "card_image"
                                              variant="top"
                                              src="https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/Ziploc_Slogan.jpg?alt=media&token=4c18251c-eec6-4112-a7a4-f882789a1c95"/>
                                    <Card.Body>
                                        <h1>3 Steps to helps</h1>
                                        <div className="col text-center">
                                            <Button href="/involved" variant="primary" size="lg" style = {{background: '#A52A2A', width: '200px'}} >Learn more</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className ="col-7 align-content-center">
                                <Card style={{ width: '30rem' }}>
                                    <Card.Img className = "card_image"
                                              variant="top"
                                              src="https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/PeriodProject_Logo.png?alt=media&token=193717d8-900a-4d92-8057-321a7fc99bfb" />
                                    <Card.Body>
                                        <h1>Donate to charities</h1>
                                        <div className="col text-center">
                                            <Button href="/donate" variant="primary" size="lg" style = {{background: '#A52A2A', width: '200px'}}>Donate</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <CardGroup className={styles.startImg}>
                        <Card className={styles.startCardImg}>
                            <Image
                                src={
                                    'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/CartoonBang.jpg?alt=media&token=d6f09342-ba1a-4e04-969f-fd414c34202f'
                                }
                                alt="starter"
                                width={'100%'}
                                height={'100%'}/>
                        </Card>
                    </CardGroup>
                </div>
                <div>
                    <CardGroup className={styles.ourGoals}>
                        <Card className={styles.txtGroup}>
                            <Card.Title className={styles.goalTitle}>Our Goal</Card.Title>
                            <Card.Text className={styles.goalText}>Our goal is to raise awareness about the issues surrounding menstrual hygiene for homeless women
                            </Card.Text>
                            <Card.Text className={styles.goalText}>and provide a platform for people to donate and support the cause.
                            </Card.Text>
                        </Card>
                    </CardGroup>
                </div>
            </CardGroup>

    </>
  )
}

export default Home;
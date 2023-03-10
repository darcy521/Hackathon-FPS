import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Card, CardGroup, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Map from '@/components/map/map'
import Image from 'react-bootstrap/Image'

const Involved: NextPage = () => {

    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <CardGroup className={styles.involvePage}>
                    <div className={styles.gifBg}>
                        <div className={styles.gap}></div>
                    <Card className={styles.involvedtitle}>
                        <Card.Title className={styles.titlesize}>Get Involved</Card.Title>
                    </Card>
                    
                        <CardGroup className={styles.donateDescriptionGroup}>
                            <Card className={styles.donateDescription}>
                                <Card.Title className={styles.t1}>Donate to charities</Card.Title>
                                <Card.Text className={styles.t1}>We have collected a set of the related organizations&apos; information. If you want to donate to organizations committed to improving the menstrual poverty of homeless women, please click the button to find them.</Card.Text>
                                <div className={styles.charityButtonFrame}><Button href="/resource" className={styles.charityButton}>Charity List</Button></div>
                            </Card>
                        </CardGroup>
                    </div>
                        <CardGroup className={styles.imgGroup}>
                            <Image src={'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/Ziploc_Slogan.jpg?alt=media&token=4c18251c-eec6-4112-a7a4-f882789a1c95'} 
                            alt='' width={'25%'} height={450}/>
                            <Image src={'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/Restroom.jpg?alt=media&token=9c1b7e11-4760-464a-b2be-8c1b06c11899'} 
                            alt='' width={'25%'} height={450}/>
                            <Image src={'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/putIntoRestroom.jpg?alt=media&token=a4305409-e235-4025-8910-6b9a35445601'} 
                            alt='' width={'25%'} height={450}/>
                            <Image src={'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/Yulin_Story.jpg?alt=media&token=9edb0080-28db-4fc0-b0dd-9c2b72e64d68'} 
                            alt='' width={'25%'} height={450}/>
                        </CardGroup>
                    <Container className={styles.involvedContainer}>
                    <CardGroup className={styles.stepGroup}>
                        <Card className={styles.step1}>
                            <Card.Img src={'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/step1.jpg?alt=media&token=9ddb37d3-696d-42ef-8086-ea2e0f7b3137'} 
                                    alt='' width={250} height={250}
                                    className={styles.stepImg}/>
                            <div className={styles.textbox}>
                            <Card.Title>Prepare a sealed bag</Card.Title>
                            <Card.Text>To begin, you will need to prepare a sealed bag like Ziploc containing sanitary napkins or tampons. We recommend a 1pt Ziploc for more than fourteen menstrual supplies. You can also add a personal note to encourage and uplift the women receiving the package. Write whatever you want on the note, but remember to keep it positive and supportive.</Card.Text>
                            </div>
                        </Card>
                        <Card className={styles.step2}>
                            <Card.Img src={'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/step2.jpg?alt=media&token=136f5928-c1e3-44a3-bcd3-82644426d450'} 
                                    alt='' width={250} height={250}
                                    className={styles.stepImg}/>
                            <div className={styles.textbox}>
                            <Card.Title>Look for a public restroom where homeless women might be present</Card.Title>
                            <Card.Text>The second step is to look for a public restroom where homeless women might be present. You can check with your local community center or homeless shelter to find out where these restrooms are located. Alternatively, you can simply look for areas where homeless individuals are known to gather, such as parks or other public spaces. </Card.Text>
                            </div>
                        </Card>
                        <Card className={styles.step3}>
                        <Card.Img src={'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/step3.jpg?alt=media&token=17c39209-1903-4485-a230-40cdef74211d'} 
                                    alt='' width={250} height={250}
                                    className={styles.stepImg}/>
                            <div className={styles.textbox}>
                            <Card.Title>Put it in a relatively clean place in the public toilet that will not disturb others</Card.Title>
                            <Card.Text>Once you have found a suitable public restroom, you can place the sealed bag in a relatively clean place that will not disturb others. You can put it in the corner or on a shelf so that it is easy to find but not in the way. Remember to be respectful of the other individuals using the restroom and to maintain their privacy.</Card.Text>
                            </div>
                        </Card>
                        <Card className={styles.step4}>
                        <Card.Img src={'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/step4.jpg?alt=media&token=1f0df941-0add-406f-ae92-655fef5eee9a'} 
                                    alt='' width={250} height={250}
                                    className={styles.stepImg}/>
                            <div className={styles.textbox}>
                            <Card.Title>Contact us and share your story</Card.Title>
                            <Card.Text>If you want to share your experience and story of packing and donating feminine hygiene products, you can contact us. Please click on the story in the navbar. After entering the page and scrolling down to the end, we provide a form where you can leave your story to us. We would love to hear from you and share your story on our website. Your story may inspire others to take action and make a positive difference in the lives of homeless women in their communities.</Card.Text>
                            <Card.Text>By following these steps, you can help homeless women access the feminine hygiene products they need to maintain their dignity and health. Together, we can make a difference in the lives of these women and ensure that they have the necessities they need to live with dignity and respect.</Card.Text>
                            </div>
                        </Card>
                    </CardGroup>
                    </Container>
                    
                </CardGroup>
                <CardGroup className={styles.imgFps}>
                            <Image src={'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/cloudbang.jpg?alt=media&token=1631cb6c-d1e6-423e-93a7-261b089d1d09'} 
                            alt='' width={'100%'} height={'40%'}/>
                        </CardGroup>
                <Map/>   
        </>
    )
}

export default Involved;
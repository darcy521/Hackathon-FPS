import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import { Card, CardGroup} from 'react-bootstrap'
import hackImg from "../public/images/giphy.gif"
import Footer from '@/components/shared/Footer'
import Navigation from '@/components/shared/Navigation'
import Logo from "@/public/assets/full_width.png";
import React, { useState, useRef, useEffect } from 'react';
import ExpendableText from '../components/shared/ExpendableText';

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
          <img style = {{height : '230px', width: '100%'}} src="https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/hand%20in%20hand.jpg?alt=media&token=cf7a0bae-0cdd-4f59-a8e7-99f8e03c4175" className="img-fluid"/>
        <CardGroup className={styles.homePage}>
            <div className="container">
                  <div style={{ paddingTop: '30px'}}>
                    <div style={{ display: "flex" }} >
                        <div className ="col-4">
                          <Card style={{ width: '25rem' }}>
                            <Card.Img className = "card_image"
                                      variant="top" 
                                      src="https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/HelpingWomenPeriod_Logo.png?alt=media&token=65ae556b-eeee-45fa-9b28-98c0a6c6d764"/>
                              <Card.Body>
                              <Card.Title>Helping Women Period</Card.Title>
                              <ExpendableText maxHeight={70}>
                                HWP prioritizes the needs of people experiencing relationship violence, 
                                who have been denied access to resources due to systemic racism and institutional biases, 
                                we direct support to communities of color and organizations that serve BIPOC communities. 
                                We listen to our BIPOC partners and we adjust our support based on the cultural and traditional preferences of the people we serve.
                              </ExpendableText>
                              <div className="col text-center">
                                <Button href="https://www.helpingwomenperiod.org/make-a-donation/" variant="primary" size="lg" style = {{background: '#A52A2A', width: '200px'}} >Donate</Button>
                              </div>
                              </Card.Body>
                          </Card>
                        </div>
                        <div className ="col-4">
                          <Card style={{ width: '25rem' }}>
                            <Card.Img className = "card_image"
                                      variant="top" 
                                      src="https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/PeriodProject_Logo.png?alt=media&token=193717d8-900a-4d92-8057-321a7fc99bfb" />
                              <Card.Body>
                              <Card.Title>The Period Project</Card.Title>
                              <ExpendableText maxHeight={70}>
                                At The Period Project, we're improving the lives of menstruators one period at a time. 
                                By increasing local, national, and global awareness of period poverty and delivering menstrual hygiene products to those in need, 
                                we're replacing poverty with community and shame with dignity.
                                We are part of a worldwide movement of similarly focused nonprofit organizations accelerating the momentum 
                                by incubating ideas and exchanging mutual aid for the common and greater good.
                              </ExpendableText>
                              <div className="col text-center">
                                <Button href="https://periodproject.org/pages/donate" variant="primary" size="lg" style = {{background: '#A52A2A', width: '200px'}}>Donate</Button>
                              </div>
                              </Card.Body>
                          </Card>
                        </div>
                        <div className ="col-4">
                          <Card style={{ width: '25rem' }}>
                            <Card.Img className = "card_image"
                                      variant="top" 
                                      src="https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/Period_Logo.png?alt=media&token=975718c7-67db-478b-a4ac-6ba49700e458"/>
                              <Card.Body>
                              <Card.Title>PERIOD.</Card.Title>
                              <ExpendableText maxHeight={70}>
                                PERIOD. is a global youth-fueled nonprofit that strives to eradicate period poverty and stigma through service, 
                                education, and advocacy. Through the distribution of menstrual products, promotion of youth leadership, 
                                and championing of menstrual equity in policy, PERIOD. aims to center those disproportionately affected 
                                by period poverty and support local efforts for menstrual equity.
                              </ExpendableText>
                              <div className="col text-center">
                                <Button href="https://period.org/donate" variant="primary" size="lg" style = {{background: '#A52A2A', width: '200px'}}>Donate</Button>
                              </div>
                              </Card.Body>
                          </Card>
                        </div>
                    </div>

                    <div style={{ display: "flex" , paddingTop: '50px',}} >
                      <div className ="col-4">
                        <Card style={{ width: '25rem' }}>
                          <Card.Img className = "card_image"
                                    variant="top" 
                                    src="https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/HelpToEndPeriodPoverty_Logo.png?alt=media&token=6397ce2e-9c5a-4865-9f3f-048e8985b768" />
                            <Card.Body>
                            <Card.Title>GrassROOTS Community Foundation</Card.Title>
                            <ExpendableText maxHeight={70}>
                                GrassROOTS Community Foundation (GCF) is a training organization with an emphasis on public health and 
                                social action. We invest in our community members' collective well-being, and teach them how to use their 
                                healthy energy to transform themselves, their families and communities. 
                                We support, develop and tailor wellness programs for women and girls, particularly those who grew up in economic distress. 
                                We also advocate for policies and practices that reduce racial and gender disparities and foster equity.
                            </ExpendableText>
                            <div className="col text-center">
                              <Button href = "https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=CF4VNY68MK9WE&source=url" variant="primary" size="lg" style = {{background: '#A52A2A', width: '200px'}}>Donate</Button>
                            </div>
                            </Card.Body>
                        </Card>
                      </div>
                      <div className ="col-4">
                        <Card style={{ width: '25rem' }}>
                          <Card.Img className = "card_image"
                                    variant="top" 
                                    src="https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/PeriodPoveryuProject_Logo.png?alt=media&token=388191c9-985d-46f2-8d6a-72e6bf5b2115" />
                          <Card.Body>
                            <Card.Title>The Period Poverty Project</Card.Title>
                            <ExpendableText maxHeight={70}>
                                The Period Poverty Project is a certified 501(c)(3) nonprofit organization based in San Diego, 
                                CA that serves those who do not have proper access to menstrual hygiene products. 
                                We also work to debunk the social stigma around menstruation by making it an open topic of discussion in our community.
                            </ExpendableText>
                            <div className="col text-center">
                              <Button href="https://www.theperiodpovertyproject.org/donate" variant="primary" size="lg" style = {{background: '#A52A2A', width: '200px'}}>Donate</Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className ="col-4">
                        <Card style={{ width: '25rem' }}>
                          <Card.Img className = "card_image"
                                    variant="top" 
                                    src="https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/NoPeriodWithout_Logo.png?alt=media&token=dff259cf-6b70-4743-b26d-28f89e8405e4" />
                          <Card.Body>
                          <Card.Title>No Period Without</Card.Title>
                          <ExpendableText maxHeight={70}>
                              No Period Without. was founded in 2017 when an Edmonton homeless 
                              woman asked Scarlet Bjornson for change. Out of curiosity, 
                              as Scarlet gave her some money she asked the woman what she planned to spend the money on. 
                              The woman replied, “Well truthfully ma'am, I would like to buy some booze, 
                              but I need to buy some tampons.” In Scarlet's words “This hit me like a brick. 
                              I went to my car and grabbed my emergency stash of tampons from the car and gave them to her.” 
                              She took to social media to ask her friends if anyone was interested in helping with a tampon drive and the response was overwhelming
                              both from those that wanted to help, and from charitable organizations in the city hoping to be a recipient of the donations.
                          </ExpendableText>
                          <div className="col text-center">
                            <Button href="https://noperiodwithout.com/donate/" variant="primary" size="lg" style = {{background: '#A52A2A', width: '200px'}}>Donate</Button>
                          </div>
                          </Card.Body>
                        </Card>
                      </div>
                  </div>
                </div>
            </div>
        </CardGroup>
      </div>
    </>
  )
}

export default Donate;
import React from 'react';
import Button from "react-bootstrap/Button";
import {
    MDBCard,
    MDBCardImage,
    MDBCardGroup,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import styles from '@/styles/Home.module.css';
function Section_6_Donate(){
    return(
        <div>
            <h1 style={{textAlign: 'center',marginTop:'15%',lineHeight:'1.5',fontFamily:'brandon-grotesque'}}>What you can do besides in-person donation...</h1>
            <div style={{ display: 'flex',justifyContent:'center',alignItems:'center',paddingTop:'5%'}}>
                <div style={{width:'80%',textAlign:'center',fontSize:'1.4em',fontFamily:'brandon-grotesque',lineHeight:'1.6'}}>
                        By embracing the power of online giving, you&apos;re not only transforming the lives of homeless women but also fostering a culture of compassion and inclusivity. Your donation ripples outward, inspiring
                        others to join this noble cause and make a collective impact.
                </div>
            </div>
            <MDBCardGroup style={{padding: '2%'}}>
                <MDBCard className='shadow-0'>
                    <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
                        <MDBRow >
                            <MDBCol>
                                <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px'}}
                                              src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top'
                                />

                            </MDBCol>
                            <MDBCol>
                                <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px'}}
                                              src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top'
                                />
                            </MDBCol>
                        </MDBRow>
                    </div>

                </MDBCard>
                <MDBCard className='shadow-0'>
                    <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
                        <MDBRow >
                            <MDBCol>

                                <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px'}}
                                              src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top'
                                />

                            </MDBCol>
                            <MDBCol>
                                <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px'}}
                                              src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top'
                                />
                            </MDBCol>
                        </MDBRow>
                    </div>
                </MDBCard>
            </MDBCardGroup>

            <div style={{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'0%',paddingBottom:'55px'}}>
                <Button  href = "/donate" role='button' style={{background:'#fff',boxShadow:'none'}} className={styles.button86}>learn more</Button>
            </div>

        </div>
    );
}
export default Section_6_Donate;
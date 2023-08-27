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
        <div style={{minHeight: '100vh'}}>
            <h1 style={{textAlign: 'center',marginTop:'15%',lineHeight:'1.5',fontFamily:'brandon-grotesque',fontSize:'2.5em',paddingBottom:'5vh'}}>What you can do besides in-person donation <span style={{fontSize:'0.6em',color:'#FC79AB'}}>&#9660;</span></h1>
            <div style={{ display: 'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{width:'80%',textAlign:'center',fontSize:'1.5em',fontFamily:'brandon-grotesque',lineHeight:'1.6',paddingBottom:'5vh'}}>
                        By embracing the power of online giving, you&apos;re not only transforming the lives of homeless women but also fostering a culture of compassion and inclusivity. Your donation ripples outward, inspiring
                        others to join this noble cause and make a collective impact.
                </div>
            </div>
            <MDBCardGroup style={{padding: '2%'}}>
                <MDBCard className='shadow-0'>
                    <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
                                <MDBCardImage className={styles.zoom} style={{ height: '130px', width:'auto'}}
                                              src="https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/HelpingWomenPeriod_Logo.png?alt=media&token=65ae556b-eeee-45fa-9b28-98c0a6c6d764" alt='...' position='top'
                                />
                    </div>
                </MDBCard>
                <MDBCard className='shadow-0'>
                    <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
                        <MDBCardImage className={styles.zoom} style={{ height: '130px', width:'auto'}}
                                      src="https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/PeriodProject_Logo.png?alt=media&token=193717d8-900a-4d92-8057-321a7fc99bfb" alt='...' position='top'
                        />
                    </div>
                </MDBCard>
                <MDBCard className='shadow-0'>
                    <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
                                <MDBCardImage className={styles.zoom} style={{ height: '130px', width:'auto'}}
                                              src="https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/Period_Logo.png?alt=media&token=975718c7-67db-478b-a4ac-6ba49700e458" alt='...' position='top'
                                />
                    </div>
                </MDBCard>
                <MDBCard className='shadow-0'>
                    <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
                        <MDBCardImage className={styles.zoom} style={{ height: '130px', width:'auto'}}
                                      src="https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/PeriodPoveryuProject_Logo.png?alt=media&token=388191c9-985d-46f2-8d6a-72e6bf5b2115" alt='...' position='top'
                        />
                    </div>
                </MDBCard>
            </MDBCardGroup>

            <div style={{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'10vh', paddingBottom:'5vh'}}>
                <Button  href = "/donate" role='button' style={{background:'#fff',boxShadow:'none'}} className={styles.button86}>learn more</Button>
            </div>

        </div>
    );
}
export default Section_6_Donate;
import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

function Section_2_Goal() {
  return (
      <MDBCard style={{ maxWidth: '100%', minWidth: '100%', minHeight: '100vh', textAlign: 'center'  }}>
        <MDBRow className='g-0'>
          <MDBCol md='4' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MDBCardImage src='https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/Ziploc_Slogan.jpg?alt=media&token=4c18251c-eec6-4112-a7a4-f882789a1c95' alt='...' fluid style={{ maxWidth: '100%', minWidth: '100%', maxHeight: '70vh' }}/>
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody >
              <MDBCardTitle style={{ display: 'flex',  fontSize: '4rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                Welcome to
              </MDBCardTitle>
              <MDBCardTitle style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', fontWeight: 'bold', marginBottom: '3rem' }}>
                Female Period Support Project!
              </MDBCardTitle>
              <MDBCardText style={{ fontSize: '20px', lineHeight: '1.6', fontFamily:'Lucida Grande' }}>
                Our organization is dedicated to making a positive impact on the lives of homeless women by ensuring their access to essential menstrual products.
              </MDBCardText>
              <MDBCardText style={{ fontSize: '20px', lineHeight: '1.6', fontFamily:'Lucida Grande' }}>
                At the heart of our mission is the belief that every woman should have the right to maintain proper hygiene and dignity, regardless of their economic status. We understand the challenges that homeless women face, and we are committed to starting with small actions that can lead to significant change.
              </MDBCardText>
              <MDBCardText style={{ fontSize: '20px', lineHeight: '1.6', fontFamily:'Lucida Grande' }}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Through our website and initiatives, we aim to raise awareness and inspire individuals who share our passion for helping women experiencing homelessness. Together, we can work towards a more inclusive and compassionate society where every woman's basic needs are met.
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>

  );
}

export default Section_2_Goal;
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
    <MDBCard style={{ maxWidth: '100%', minWidth:'100%', minHeight:'100vh'}}>
      <MDBRow className='g-0'>
        <MDBCol md='4' style={{ display: 'flex', alignItems:'center', justifyContent:'center'}}>
          <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle style={{ display: 'flex', alignItems:'center', justifyContent:'center'}}
            >Welcome to the Female Period Support Project!</MDBCardTitle>
            <MDBCardText>
              Our organization is dedicated to making a positive impact on the lives of homeless women by ensuring their access to essential menstrual products.
              At the heart of our mission is the belief that every woman should have the right to maintain proper hygiene and dignity, regardless of their economic status. We understand the challenges that homeless women face, and we are committed to starting with small actions that can lead to significant change.
              Through our website and initiatives, we aim to raise awareness and inspire individuals who share our passion for helping women experiencing homelessness. Together, we can work towards a more inclusive and compassionate society where every woman basic needs are met.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}

export default Section_2_Goal;
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

function Section_3_Slogan() {
  return (
    <>
      <MDBCard alignment='center'>
        <MDBCardBody>
          <MDBCardTitle>Special title treatment</MDBCardTitle>
          <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px'}} 
          src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' 
          />
          <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default Section_3_Slogan;
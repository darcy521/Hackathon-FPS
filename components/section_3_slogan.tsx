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
      <MDBCard alignment='center' className='bg-transparent shadow-0'
      style={{minHeight:'100vh', background: "url('../assets/slogan-background.png') no-repeat scroll center"}}
      >
        <MDBCardBody style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <div className="fps_slogan-section">
            <div className="logo-font android-slogan">Even little helps!</div>
            <div className="logo-font android-sub-slogan">Join us in making a difference</div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default Section_3_Slogan;
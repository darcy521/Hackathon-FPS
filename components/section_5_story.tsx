import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';

function Section_5_Story() {
  return (
    <>
    {/* <MDBCard alignment='center'>
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px'}} 
        src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' 
        />
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
      </MDBCardBody>
    </MDBCard> */}

    <Carousel data-bs-theme="dark" style={{minHeight: '100vh', background:"url('../assets/story-background.png')"}} 
      className='shadow-0 bg-transparent'>
      <Carousel.Item>
        <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <MDBCard alignment='center' className='shadow-0 bg-transparent'>
            <MDBCardBody>
              <MDBCardTitle>Special title treatment</MDBCardTitle>
              <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px'}} 
              src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' 
              />
              <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <MDBCard alignment='center' className='shadow-0 bg-transparent'>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px'}} 
            src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' 
            />
            <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <MDBCard alignment='center' className='shadow-0 bg-transparent'>
            <MDBCardBody>
              <MDBCardTitle>Special title treatment</MDBCardTitle>
              <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px'}} 
              src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' 
              />
              <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      </Carousel.Item>
    </Carousel>


    </>
  );
}

export default Section_5_Story;
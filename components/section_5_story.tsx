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

    <Carousel data-bs-theme="dark" style={{minHeight: '98vh'}}>
      <Carousel.Item>
        <MDBCard alignment='center'>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px'}} 
            src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' 
            />
            <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </Carousel.Item>
      <Carousel.Item>
        <MDBCard alignment='center'>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px'}} 
            src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' 
            />
            <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src= {"https://mdbootstrap.com/img/new/standard/city/041.webp"}
          alt="Third slide"
          width={'25'}
          height={'500'}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    </>
  );
}

export default Section_5_Story;
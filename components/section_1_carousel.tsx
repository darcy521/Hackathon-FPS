import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Image from 'next/image';

function Section_1_Carousel() {
  return (
    <Carousel data-bs-theme="dark" style={{minHeight: '98vh'}}>
      <Carousel.Item>
        <div style={{minHeight:'100vh' ,display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Image
          className="d-block w-100"
          src= {"https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/homepage_start.GIF?alt=media&token=7f369495-a24a-4691-aeb3-3aaebf1f1283"}
          alt="First slide"
          width={'25'}
          height={'500'}
        />
        </div>
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <div style={{minHeight:'100vh' ,display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Image
          className="d-block w-100"
          src= {"https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/homepage_start.GIF?alt=media&token=7f369495-a24a-4691-aeb3-3aaebf1f1283"}
          alt="Second slide"
          width={'25'}
          height={'500'}
        />
        </div>
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <div style={{minHeight:'100vh' ,display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Image
          className="d-block w-100"
          src= {"https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/homepage_start.GIF?alt=media&token=7f369495-a24a-4691-aeb3-3aaebf1f1283"}
          alt="Third slide"
          width={'25'}
          height={'500'}
        />
        </div>
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default Section_1_Carousel;
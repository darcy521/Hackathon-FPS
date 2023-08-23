import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBCardGroup
} from 'mdb-react-ui-kit';

function Section_4_Leadership() {
  return (
    <MDBCardGroup className='bg-transparent shadow-0'
      style={{padding: '2%', minHeight:'100vh', background: "url('../assets/leadership.png') no-repeat scroll center"}}
      >
      <div style={{display:'grid', alignItems:'baseline', justifyContent:'center'}}>
        <MDBCard className='shadow-0 bg-transparent' style={{gridArea:'2 / 1 / 2 / 1'}}>
          <div style={{height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
            <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px'}} 
              src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' 
              />
          </div>
          <MDBCardBody>
            <MDBCardTitle style={{display:'flex', justifyContent:'center'}}>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className='shadow-0 bg-transparent' style={{gridArea:'2 / 2 / 2 / 2'}}>
          <div style={{ height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
            <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px', display: 'flex', alignItems:'center', justifyContent:'center'}}
              src='https://mdbootstrap.com/img/new/standard/city/042.webp' alt='...' position='top' />
          </div>
          <MDBCardBody>
            <MDBCardTitle style={{display:'flex', justifyContent:'center'}}>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className='shadow-0 bg-transparent' style={{gridArea:'2 / 3 / 2 / 3'}}>
          <div style={{height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
            <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px', display: 'flex', alignItems:'center', justifyContent:'center'}}
              src='https://mdbootstrap.com/img/new/standard/city/043.webp' alt='...' position='top' />
          </div>
          <MDBCardBody>
            <MDBCardTitle style={{display:'flex', justifyContent:'center'}}>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              card has even longer content than the first to show that equal height action.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </MDBCardGroup>
  );
}

export default Section_4_Leadership;
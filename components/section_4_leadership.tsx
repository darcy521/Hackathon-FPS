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
    <MDBCardGroup style={{padding: '2%'}}>
      <MDBCard>
        <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
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

      <MDBCard>
        <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
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

      <MDBCard>
        <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
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
    </MDBCardGroup>
  );
}

export default Section_4_Leadership;
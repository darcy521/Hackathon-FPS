import React from 'react';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBCardGroup
} from 'mdb-react-ui-kit';

function Section_3plus_GetInvolved() {
    return (
        <div style={{minHeight:'100vh'}}>
                <h1 style={{textAlign: 'center',marginTop: '20px',lineHeight : '1.5',fontFamily: 'brandon-grotesque, sans-serif'}}>
                    <a href="\involved" style={{textDecoration:'none',color:'#A52A2A'}}>
                        Get Involved
                    </a>
                </h1>
            <MDBCardGroup style={{padding: '2%'}}>
                <MDBCard className='shadow-0'>
                    <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
                        <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px'}}
                                  src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top'
                        />
                    </div>
                    <MDBCardBody>
                        <MDBCardTitle style={{display:'flex', justifyContent:'center',fontFamily: 'brandon-grotesque, sans-serif'}}>Step One</MDBCardTitle>
                        <MDBCardText style={{fontFamily: 'brandon-grotesque, sans-serif',textAlign:'center'}}>
                            Prepare a sealed bag.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard className='shadow-0'>
                    <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
                        <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px'}}
                                  src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top'
                        />
                    </div>
                    <MDBCardBody>
                        <MDBCardTitle style={{display:'flex', justifyContent:'center',fontFamily: 'brandon-grotesque, sans-serif'}}>Step Two</MDBCardTitle>
                        <MDBCardText style={{fontFamily: 'brandon-grotesque, sans-serif',textAlign:'center'}}>
                            Look for a public restroom where homeless women might be present.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard className='shadow-0'>
                    <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
                        <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px', display: 'flex', alignItems:'center', justifyContent:'center'}}
                                  src='https://mdbootstrap.com/img/new/standard/city/042.webp' alt='...' position='top' />
                    </div>
                    <MDBCardBody>
                        <MDBCardTitle style={{display:'flex', justifyContent:'center',fontFamily: 'brandon-grotesque, sans-serif'}}>Step Three</MDBCardTitle>
                        <MDBCardText style={{fontFamily: 'brandon-grotesque, sans-serif',textAlign:'center'}}>
                            Put it in a relatively clean place in the public toilet that will not disturb others.
                        </MDBCardText>
                        {/*<MDBCardText>*/}
                        {/*    <small className='text-muted'>Last updated 3 mins ago</small>*/}
                        {/*</MDBCardText>*/}
                    </MDBCardBody>
                </MDBCard>

                <MDBCard className='shadow-0'>
                    <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
                        <MDBCardImage style={{borderRadius: '50%', height: '120px', width:'120px', display: 'flex', alignItems:'center', justifyContent:'center'}}
                                  src='https://mdbootstrap.com/img/new/standard/city/043.webp' alt='...' position='top' />
                    </div>
                    <MDBCardBody>
                        <MDBCardTitle style={{display:'flex', justifyContent:'center',fontFamily: 'brandon-grotesque, sans-serif'}}>Step Four</MDBCardTitle>
                        <MDBCardText style={{fontFamily: 'brandon-grotesque, sans-serif',textAlign:'center'}}>
                            Contact us and share your story!
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
        </div>
    );
}

export default Section_3plus_GetInvolved;
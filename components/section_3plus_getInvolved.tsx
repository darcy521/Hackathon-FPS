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
        <div style={{minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <h1 style={{textAlign: 'center',marginTop: '20px',lineHeight : '1.5',fontFamily: 'brandon-grotesque, sans-serif'}}>
                    <a href="\involved" style={{textDecoration:'none',color:'#A52A2A',fontSize:'1.8em'}}>
                        Get Involved
                    </a>
                </h1>
            <MDBCardGroup style={{padding: '2%'}}>
                <MDBCard className='shadow-0'>
                    <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
                        <MDBCardImage style={{borderRadius: '50%', height: '200px', width:'210px'}}
                                      src='https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/step1.jpg?alt=media&token=9ddb37d3-696d-42ef-8086-ea2e0f7b3137' alt='...' position='top'
                        />
                    </div>
                    <MDBCardBody>
                        <MDBCardTitle style={{display:'flex', justifyContent:'center',fontFamily: 'brandon-grotesque, sans-serif',fontSize:'1.8em'}}>&#9658; Step One</MDBCardTitle>
                        <MDBCardText style={{fontFamily: 'brandon-grotesque, sans-serif',textAlign:'center',fontSize:'1.5em'}}>
                            Prepare a sealed bag.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard className='shadow-0'>
                    <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
                        <MDBCardImage style={{borderRadius: '50%', height: '200px', width:'200px'}}
                                  src='https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/step2.jpg?alt=media&token=136f5928-c1e3-44a3-bcd3-82644426d450' alt='...' position='top'
                        />
                    </div>
                    <MDBCardBody>
                        <MDBCardTitle style={{display:'flex', justifyContent:'center',fontFamily: 'brandon-grotesque, sans-serif',fontSize:'1.8em'}}>&#9658; Step Two</MDBCardTitle>
                        <MDBCardText style={{fontFamily: 'brandon-grotesque, sans-serif',textAlign:'center',fontSize:'1.5em'}}>
                            Look for a public restroom where homeless women might be present.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard className='shadow-0'>
                    <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
                        <MDBCardImage style={{borderRadius: '50%', height: '200px', width:'200px', display: 'flex', alignItems:'center', justifyContent:'center'}}
                                  src='https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/step3.jpg?alt=media&token=17c39209-1903-4485-a230-40cdef74211d' alt='...' position='top' />
                    </div>
                    <MDBCardBody>
                        <MDBCardTitle style={{display:'flex', justifyContent:'center',fontFamily: 'brandon-grotesque, sans-serif',fontSize:'1.8em'}}>&#9658; Step Three</MDBCardTitle>
                        <MDBCardText style={{fontFamily: 'brandon-grotesque, sans-serif',textAlign:'center',fontSize:'1.5em'}}>
                            Put it in a relatively clean place in the public toilet that will not disturb others.
                        </MDBCardText>
                        {/*<MDBCardText>*/}
                        {/*    <small className='text-muted'>Last updated 3 mins ago</small>*/}
                        {/*</MDBCardText>*/}
                    </MDBCardBody>
                </MDBCard>

                <MDBCard className='shadow-0'>
                    <div style={{width:'100%', height:'max-content', display: 'flex', alignItems:'center', justifyContent:'center', paddingTop:'4%'}}>
                        <MDBCardImage style={{borderRadius: '50%', height: '200px', width:'200px', display: 'flex', alignItems:'center', justifyContent:'center'}}
                                  src='https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/step4.jpg?alt=media&token=1f0df941-0add-406f-ae92-655fef5eee9a' alt='...' position='top' />
                    </div>
                    <MDBCardBody>
                        <MDBCardTitle style={{display:'flex', justifyContent:'center',fontFamily: 'brandon-grotesque, sans-serif',fontSize:'1.8em'}}>&#9658; Step Four</MDBCardTitle>
                        <MDBCardText style={{fontFamily: 'brandon-grotesque, sans-serif',textAlign:'center',fontSize:'1.5em'}}>
                            Contact us and share your story!
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
        </div>
    );
}

export default Section_3plus_GetInvolved;
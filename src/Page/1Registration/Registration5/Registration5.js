import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion'
//import './Css.css'
import { Button } from '../../../components/Navbar/Navbar';
//import logo from './logo.png'
import man from './man.svg'
import { useDispatch } from 'react-redux';
import logo from '../../../components/Navbar/logo.svg'

const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    // flex-direction: column;
       align-items: center;
       justify-content: center;
       background-color: rgba(249, 232, 202, 1);
       padding: 8rem 0 2rem 0;
    @media only screen and (max-width: 768px) {
        min-height: 100vh;
        width: 100%;
        flex-direction: column;
        justify-content: space-around;
      }
`;

const Width = styled.div`
      width: 1300px;
      display: flex;
     // flex-direction: column;
        align-items: center;
        justify-content: center;
    
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }
`

const Img = styled(motion.div)`
        width: 30rem;
        border-radius: 1rem;
    @media only screen and (max-width: 768px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
      }
`;

const T = styled.p`
    color: #000;
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: left;
    width: 100%;
    
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
        
      }
`;

const Ht = styled.h1`
    color: #000;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    width: 100%;
    
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
        
      }
`; 


const Left = styled.div`
        width: 35%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: #FFF;
        border-radius: 1rem;
      padding: 1rem;
        //   @media only screen and (max-width: 1100px) {
        //     width: 50%;
        // }
   

    @media only screen and (max-width: 998px) {
     
        width: 35rem;
        padding: 1rem  0;
        margin: 7rem 0 0 0;
       
      }

      @media only screen and (max-width: 768px) {
     
        width: 95%;
        padding: 1rem;
        margin: 7rem 0 0 0;
       
      }
`;

const Right = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
      align-items: center;
        width: 60%;
   
        @media only screen and (max-width: 998px) {
     
            width: 100%;
            margin: 4rem 0 0 0;
          
           
          }
        
          @media only screen and (max-width: 998px) {
     
            width: 95%;
           
          }
     
`;

const Box = styled.div`
    display: flex;
    width: 95%;
    min-height: 30rem;
    background-color: #FFDEA580 ;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 1rem;
    position: relative;

    @media only screen and (max-width: 998px) {
        
        flex-direction: column;
        min-height: 30rem;
        align-items: center;
        justify-content: space-between;
 
     }
`

const Back = styled.div`
    margin: 3rem 0;
    cursor: pointer;

    @media only screen and (max-width: 998px) {
        position: absolute;
        top: 0;
        right: 2rem;
    }  

`
const Details = styled.div`
background: linear-gradient(180deg, rgba(2, 169, 92, 0.5) 0%, rgba(34, 170, 48, 0.5) 100%),
linear-gradient(0deg, #FFFFFF, #FFFFFF);
    padding: 3rem 2rem 2rem 2rem;
    border: 0.25rem solid #FFFFFF;
    border-radius: 1.25rem;
    margin: 0 1rem 4rem 1rem;

    @media only screen and (max-width: 998px) {
        width: 100%;
        margin: 0 0 2rem 0;
        padding: 3rem 0.5rem 2rem 0.5rem;
    } 


    @media only screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    } 

`

const Man = styled.div`

    width: 12rem;
    height: 12rem;
  
`
const H = styled.p`

  font-size: 1.25rem;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 0.95rem;
    font-weight: bold;
  }
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 22rem;
  border-radius: 1rem;
  background: #FFF;

  @media only screen and (max-width: 768px) {
    width: 95%;
  }

    `

const Register5 = () => {

    const dispatch = useDispatch();

    return (
        <Sec>
            <Width>
                <Box>
                    <Left>
                    <div style={{width:'100%'}}>
                            <img src={logo} alt='' style={{width:'5rem',height:'4.5rem',margin:'0 0 2rem 0'}} />
                        </div>
                        <Ht>
                            Capture your selfie
                        </Ht>
                        <T>
                        Please take a selfie using your device
                        </T>
                    </Left>
                    
                    <Right>
                        <Back style={{display:'flex',width:'100%',alignItems:'flex-end',justifyContent:'flex-end'}}
                            onClick = {()=> dispatch({type:'BACK5'})}
                        >
                            <div style={{width:'8rem',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <div>
                                    <svg width="32" height="30" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4582 0C17.5662 0 13.5862 3.98 13.5862 8.872V10.736C13.5862 11.564 14.2582 12.236 15.0862 12.236C15.9142 12.236 16.5862 11.564 16.5862 10.736V8.872C16.5862 5.632 19.2202 3 22.4582 3H32.2082C35.4422 3 38.0742 5.632 38.0742 8.872V31.13C38.0742 34.368 35.4422 37 32.2082 37H22.4362C19.2122 37 16.5862 34.376 16.5862 31.152V29.266C16.5862 28.438 15.9142 27.766 15.0862 27.766C14.2582 27.766 13.5862 28.438 13.5862 29.266V31.152C13.5862 36.032 17.5582 40 22.4362 40H32.2082C37.0962 40 41.0742 36.022 41.0742 31.13V8.872C41.0742 3.98 37.0962 0 32.2082 0H22.4582ZM6.29802 13.108L0.442017 18.938C0.389774 18.9898 0.342995 19.0437 0.300182 19.1008L0.442017 18.938C0.371159 19.0079 0.308144 19.0842 0.253468 19.1656C0.229401 19.2025 0.206188 19.2406 0.184677 19.2798C0.167221 19.3105 0.151154 19.3424 0.136261 19.3749C0.123634 19.4036 0.111515 19.4324 0.100281 19.4615C0.0852013 19.4995 0.0719986 19.5386 0.0604172 19.5782C0.0516891 19.6094 0.0436668 19.6405 0.0366364 19.672C0.0277023 19.7102 0.020668 19.7486 0.0151329 19.7874C0.012001 19.8125 0.00893784 19.8389 0.00657272 19.8655C0.00199509 19.9111 1.90735e-05 19.9555 1.90735e-05 20L0.0102158 20.124L0.0143204 20.2035C0.014782 20.2068 0.0152512 20.2102 0.0157356 20.2136L1.90735e-05 20C1.90735e-05 20.111 0.01231 20.221 0.0362053 20.3278C0.0436668 20.3595 0.0516891 20.3906 0.0606689 20.4213C0.0719986 20.4614 0.0852013 20.5005 0.0999908 20.5389C0.111515 20.5676 0.123638 20.5964 0.136608 20.6246C0.151157 20.6576 0.167221 20.6895 0.184433 20.7209C0.206188 20.7594 0.229401 20.7975 0.254215 20.8345C0.268253 20.8564 0.283653 20.8781 0.299652 20.8993C0.347271 20.962 0.399162 21.0209 0.455307 21.0755L6.29802 26.894C6.59002 27.186 6.97402 27.332 7.35602 27.332C7.74002 27.332 8.12602 27.186 8.41802 26.89C9.00202 26.302 9.00002 25.354 8.41402 24.77L5.13422 21.5H25.5826C26.4106 21.5 27.0826 20.828 27.0826 20C27.0826 19.172 26.4106 18.5 25.5826 18.5H5.13022L8.41402 15.232C9.00002 14.648 9.00402 13.7 8.41802 13.112C7.83402 12.524 6.88602 12.524 6.29802 13.108Z" fill="#082F37"/>
                                    </svg>
                                </div>
                                <T style={{color:'#000',margin:'0',fontSize:'1.75rem'}}>Back</T>
                            </div>
                        </Back>

                        

                        <Details>
                            <div style={{width:'100%'}}>
                             <H style={{fontSize:'1.5rem',color:'#FFF',textAlign:'left',margin:'0 0 2rem 0'}}>Selfie</H>
                            </div>
                            
                            <Frame>
                                <Man>
                                    <img src={man} alt='' style={{width:'100%',height:'100%'}} />
                                </Man>
                                <H>Capture your selfie</H>
                                <Button style={{height:'2.5rem',margin:'1rem 0 0 0'}}>
                                    Click here
                                </Button>
                            </Frame>

                            <div style={{display:'grid',placeItems:'center'}}>
                                <Button style={{borderRadius:'2rem',width:'9rem',margin:'2rem 0 0 0',border:'2px solid #FFFFFF',fontSize:'2rem'}}
                                    onClick={() => dispatch({type:'PATHNAME6'}) }
                                >
                                    Next
                                </Button>
                            </div>

                        </Details>
                    </Right>
                </Box>
            </Width>
        </Sec>
    )
}

export default Register5

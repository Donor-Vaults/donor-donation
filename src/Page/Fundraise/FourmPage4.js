import React from 'react'
import './Wwe.css'
import styled from 'styled-components';
import { motion } from 'framer-motion'
import { Button } from '../../components/Navbar/Navbar';
import logo from '../../components/Navbar/logo.svg'
//import { H } from '../Page2/Page2';
import { FaAngleDown } from 'react-icons/fa';
import Tag from './components/Tag';
import { useDispatch } from 'react-redux';

const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    padding: 8rem 0 2rem 0;
    // flex-direction: column;
      // align-items: center;
       justify-content: center;
       background-color: rgba(249, 232, 202, 1);
    @media only screen and (max-width: 1100px) {
        
        flex-direction: column;
        align-items: center;
        
      }
`;

const Width = styled.div`
      width: 1300px;
      display: flex;
     // flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background: #FFDEA580;
      border-radius: 1.75rem;
      position: relative;
    
    @media only screen and (max-width: 1400px) {
        width: 98%;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
        background: #FFDEA580;
    }
`

const H = styled.h1`
    color: #FFF;
    font-size: 2rem;
    font-weight: light;
    margin-bottom: 2rem;
    text-align: left !important;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;


const T = styled.p`
    color: #FFF;
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 2rem;
   // text-align: center;
    //width: 20rem;

    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
        
      }
`;

const Left = styled.div`
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 2rem;
        //margin: 5rem 0 0 0;
        background: #FFFFFF;
        border-radius: 1.75rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
     
        @media only screen and (max-width: 1100px) {
            width: 100%;
            margin: 6rem 0 0 0;
            padding: 2rem 2rem 1rem 2rem;
        }

`;

const Right = styled.div`
        display: flex;
        justify-content: space-between;
        flex-direction: column;
     // align-items: center;
        width: 60%;
       // padding: 5rem 0 3rem 0;
      border-radius: 2rem 0 0 0;
     // background-color: rgba(255,255,255,0.9);
       // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

        @media only screen and (max-width: 1100px) {
            width: 100%;
            margin: 3rem 0 0 0;
        }

`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background: rgba(0,0,0,0.2);
    margin: 3rem 0 0 0;
`
const Margin = styled.div`
    margin: 5rem 0 0 0;

    @media only screen and (max-width: 1100px) {
        
        margin: 3rem 0 0 0;
    }

`
const MarginLeft = styled.div`
    margin: 0 1rem 0 4rem;

    @media only screen and (max-width: 1100px) {
        
        margin: 0 1rem;
    }
`

const Grid = styled.div`
    display: grid;
    width: 100%;
    margin: 3rem 0 0 0;
    grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
     grid-gap: 2rem 0.5rem;
   
`
const Back = styled.div`
     margin: 1rem 2rem 1rem 0;
    cursor: pointer;

    @media only screen and (max-width: 998px) {
        position: absolute;
        top: 1rem;
        right: 0.5rem;
    }  

`

const Details = styled.div`


background: linear-gradient(180deg, rgba(2, 169, 92, 0.5) 0%, rgba(34, 170, 48, 0.5) 100%),
linear-gradient(0deg, #FFFFFF, #FFFFFF);


    padding: 3rem 2rem 2rem 2rem;
    border: 0.25rem solid #FFFFFF;
    border-radius: 1.25rem;
    margin: 0 1rem 4rem 1rem;

    @media only screen and (max-width: 768px) {
        padding: 3rem 1rem 2rem 1rem;
    } 

`

const FourmPage4 = () => {

    const dispatch = useDispatch ();
    
    return (
        <Sec>
            <Width>
           
                    <Left>
                        <img src={logo} alt='' style={{width:'5rem',height:'5rem'}} />
                        <Margin>
                            {/* <T>4 of 4</T> */}
                            <H style={{color:'#000'}}>
                            Explain us the purpose of your fundraising
                            </H>
                            <T style={{color:'#000'}}>Introduce yourself and about the purpose</T>
                            <T style={{color:'#000'}}>Describe why you are concerned and importance of funding</T>
                            <T style={{color:'#000'}}>Detail how the funds will be utilized</T>
                        </Margin>
                    </Left>
                    
                    <Right>
                        <Back style={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
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
                          <T style={{margin:'0 0 0 0',fontSize:'1.6rem'}}>
                            Name your fundraiser</T>
   
                       
                                <input type="Text" placeholder="Donate to help"  className="input1" style={{height:"4rem",width:"10rem",border:'1px solid rgba(0,0,0,0.2)',borderRadius:'0.75rem',width:'100%',margin:'2rem 0 0 0'}} />
                                
                         
                           
                            <div style={{margin:'2rem 0 0 0'}}>
                            <T style={{margin:'0 0 0 0',fontSize:'1.6rem'}}>
                            Details on your fundraising</T>
   
                       
                                <input type="Text" placeholder="Hi,my name is..."  className="input1" style={{height:"8rem",width:"10rem",border:'1px solid rgba(0,0,0,0.2)',borderRadius:'0.75rem',width:'100%',margin:'2rem 0 0 0'}} />
                            </div>
                            <div style={{display:'grid',placeItems:'center'}}>
                                <Button style={{borderRadius:'2rem',width:'9rem',margin:'2rem 0 0 0',border:'2px solid #FFFFFF',fontSize:'2rem'}}
                                    onClick={() => dispatch({type:'F6'}) }
                                >
                                    Next
                                </Button>
                            </div>
                        </Details>
                       
                       
                    </Right>

            </Width>
             
        </Sec>
    )
}

export default FourmPage4

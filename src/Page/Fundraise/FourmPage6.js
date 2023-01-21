import React from 'react'
import './Wwe.css'
import styled from 'styled-components';
import { motion } from 'framer-motion'
import { Button } from '../../components/Navbar/Navbar';
import logo from '../../components/Navbar/logo.svg'
import I from './components/tick.jpg';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

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

const InputContainer = styled.div`
    border: 1px solid rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 25rem;
    border-radius: 0.75rem;
    background-color: #FFF;
`

const Input = styled.input`
    
`

const H = styled.p`
    color: #FFF;
    font-size: 1.75rem;
    font-weight: 600;
    margin: 2rem 0.5rem;
    text-align: center;
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

const Right = styled.div`
        display: flex;
        justify-content: space-between;
        flex-direction: column;
     // align-items: center;
        width: 100%;
       // padding: 5rem 0 3rem 0;
      border-radius: 2rem 0 0 0;
     // background-color: rgba(255,255,255,0.9);
       // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

        @media only screen and (max-width: 1100px) {
            width: 100%;
            margin: 3rem 0 0 0;
        }

`;

const Details = styled.div`


background: linear-gradient(180deg, rgba(2, 169, 92, 0.5) 0%, rgba(34, 170, 48, 0.5) 100%),
linear-gradient(0deg, #FFFFFF, #FFFFFF);


    padding: 0 2rem 2rem 2rem;
    border: 0.25rem solid #FFFFFF;
    border-radius: 1.25rem;
    margin: 2rem 1rem 4rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 768px) {
        padding: 0 1rem 2rem 1rem;
    } 

`

const FourmPage6 = () => {

    const dispatch = useDispatch ();

    return (
        <Sec>
            <Width>
                    
                    <Right>
                       
                          <Details>
                            <img src={I} alt='' style={{borderRadius:'0 0 1rem 1rem',height:'10rem',width:'11rem'}} />
                               <H>
                               Your fundraiser has been successfully submitted for audit and approval. If any further information is needed, you will receive a notification. Once approved, it will be published on the DONOR  platform
                               </H>

                            <div style={{display:'grid',placeItems:'center'}}>
                                <Button style={{borderRadius:'2rem',width:'12rem',margin:'0 0 2rem 0',border:'2px solid #FFFFFF',fontSize:'2rem'}}
                                    
                                >
                                   <Link to='/' style={{textDecoration:'none',color:'#fff'}}>Continue</Link> 
                                </Button>
                            </div>
                        </Details>
                       
                       
                    </Right>

            </Width>
             
        </Sec>
    )
}

export default FourmPage6


import React from 'react'
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import { H, T } from '../../../Home/Page2/Page2'
import './CurrencyCard.css'
import { Button } from '../../../../components/Navbar/Navbar';
import thank from './thank.svg'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ThankYouCard = (props) => {
    const Box= styled.div`
     
        width: 30rem;  
        min-height: 25rem; 
       
        display: flex;
        flex-direction: column;
        align-items: center;
       justify-content: center;
       background-color: #FFF;
        margin: 0 auto;
        border-radius: 1.25rem ;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
       
        @media only screen and (max-width: 510px) {
            
            width: 98%;
            
        }
    `;
    const Heading = styled.div`
        width: 100%;
        border-bottom: 1px solid grey;
        padding: 1rem 1rem 0.5rem 2rem;
        font-size: 1.25rem;
        font-weight: bold;
        `;

    const Lower = styled.div`
       
        padding: 0 1rem;
        display: grid;
        place-items: center;
    `;

    const dispatch = useDispatch ();

    return (
        <Box>
            
            <img src={thank} alt='' style={{height:'6rem',width:'16rem'}} />

            <div style={{margin:'2rem 0'}}>
                <T style={{color:'#000',fontWeight:'400',lineHeight:'1.2',margin:'0 1rem 1rem 1rem',fontSize:'1.05rem',textAlign:'center'}}>
                Payment Received
                </T>
                <T style={{color:'#000',fontWeight:'400',lineHeight:'1.2',margin:'0 1rem',fontSize:'1.05rem',textAlign:'center'}}>
                Your generosity means a lot to us!! 
                </T>
            </div>

            <div style={{display:'grid',placeItems:'center'}}>
                <Button style={{borderRadius:'2rem',minWidth:'9rem',margin:'1rem 0',border:'2px solid #F7F7F7',fontSize:'1.75rem'}}>
                    <Link to ='/' style={{textDecoration:'none',color:'#fff'}}>
                    Return Home
                    </Link> 
                </Button>
            </div>
            
        </Box>
    )
}

export default ThankYouCard

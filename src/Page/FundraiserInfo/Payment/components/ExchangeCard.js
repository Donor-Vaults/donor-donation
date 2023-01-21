import React from 'react'
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import { H, T } from '../../../Home/Page2/Page2'
import { FaAngleDown } from 'react-icons/fa';
import './CurrencyCard.css'
import { Button } from '../../../../components/Navbar/Navbar';
import { useDispatch } from 'react-redux';

const ExchangeCard = (props) => {
    const Box= styled.div`
     
        width: 30rem;  
        min-height: 30rem; 
       
        display: flex;
        flex-direction: column;
        align-items: center;
       // justify-content: space-between;
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
        <Box
            
        >
            <Heading>
                Contribute
            </Heading>

            <T style={{color:'#000',fontWeight:'400',lineHeight:'1.2',margin:'3rem 1rem 1rem 1rem',fontSize:'1.05rem',textAlign:'left'}}>
                You are about to contribute to this fundraise
                <div/> 
                Enter your donation
            </T>

            <T style={{color:'#000',fontWeight:'400',lineHeight:'1.2',margin:'0 1rem',fontSize:'1.05rem'}}>
                You will go through 2 blockchain transactions
                <div />
                Approve Spending
                <div />
                Donate
            </T>

            <div style={{margin:'2rem 0 0 0',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                <div>
                    <div class="dropdown1">
                        <button class="dropbtn1">Country<FaAngleDown style={{fontSize:'1.8rem',color:'grey'}} /> </button>
                        <div class="dropdown-content1">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div> 

                <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="40" rx="8" fill="#F7F7F7"/>
                    <path d="M26 16L23 13L20 16" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23 27V13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M30 24L33 27L36 24" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M33 13V27" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <div>
                    <div class="dropdown1">
                        <button class="dropbtn1">Country<FaAngleDown style={{fontSize:'1.8rem',color:'grey'}} /> </button>
                        <div class="dropdown-content1">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div> 
            </div>

            <div style={{display:'grid',placeItems:'center'}}>
                <Button style={{borderRadius:'2rem',minWidth:'9rem',margin:'1rem 0',border:'2px solid #F7F7F7',fontSize:'1.75rem'}}
                    onClick={()=> dispatch({type:'PAY2'})}
                >
                    DONATE
                </Button>
            </div>

            <T style={{color:'#000',fontWeight:'300',fontSize:'1.2rem'}}>
                I agree with Rules and statements  
            </T>

            
        </Box>
    )
}

export default ExchangeCard

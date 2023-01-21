import React from 'react'
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import { H, T } from '../../../Home/Page2/Page2'
import { FaAngleDown } from 'react-icons/fa';
import './CurrencyCard.css'
import { useDispatch } from 'react-redux';

const CurrencyCard = (props) => {
    const Box= styled.div`
     
        width: 30rem;  
        height: 30rem; 
       
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
        onClick={()=> dispatch({type:'PAY1'})}
       >
            <Heading>
                Contribute
            </Heading>

            <T style={{color:'#000',fontWeight:'400',lineHeight:'1.2',margin:'3rem 1rem'}}>
            Please choose the currency in which you would like to donate.
            </T>

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
            
        </Box>
    )
}

export default CurrencyCard

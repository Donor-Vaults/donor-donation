import React from 'react'
import styled from 'styled-components'
// import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import theme from "styled-theming";
import i1 from './1.png';
import i2 from './2.png';
import i3 from './3.png';
import { Button } from '../../../components/Navbar/Navbar';

const Sec = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100%;
    padding: 4rem 0;
    background-color: rgba(249, 232, 202, 1) ;
    width: 100%;
    
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
      }
`;

export const T = styled.p`
    color: #FFF;
    font-weight: 500;
    font-size: 1.3rem;
    //margin-bottom: 2rem;
    text-align: left;
    margin: 1rem;
      letter-spacing: 0.05rem;
      line-height: 1.8;
      width: 70%;
    @media only screen and (max-width: 1000px) {
        
        width: 100%;
      }
      @media only screen and (max-width: 768px) {
        
        font-weight: 510;
        font-size: 1rem;
      }
      
`;

export const H = styled.h1`
    color: #FFFFFF;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: left !important;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
        margin-left: 1rem;
      }
`;


const Center = styled.div`
      width: 1200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #7EBDE0;
      padding: 0.5rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    @media only screen and (max-width: 1400px) {
        width: 100%;
    }

`
const Right = styled.div`
    height: 16rem;
    width: 20rem;
    @media only screen and (max-width: 1000px) {
        display: none;
    }
`

const Page4H = () => {
  
    return (
        <Sec id="">
            <Center>
                <T>
                    At the heart of fundraising there must be integrity and trust. Your motto should be "the truth, told well". While creating your fundraising need, please be detail in every aspect, provide all the facts and answer all the questions. Please avoid slick marketing and the hard sell. Make effective communication the heart of your fundraising proposal. Let your sincerity and commitment show. 
                </T>
                <Right>
                    <img src={i1} alt='' style={{height:'100%',width:'100%'}} />
                </Right>
            </Center>

            <Center style={{backgroundColor:'#6458D6',margin:'6rem 0'}}>
                <Right>
                    <img src={i2} alt='' style={{height:'100%',width:'100%'}} />
                </Right>
                
                <T style={{textAlign:'right'}}>
                    Our donor community will assess your need from the  verifiable facts alone and vote on the same. Our donors are generous, wise and kind. After your fundraiser is approved by the platform and is published, its time to spread the word to as many people as possible using all channels. Donor platform will also help you in this effort of sharing via social media, emails, texts and with your local community.
                </T>
            </Center>

            <Center style={{backgroundColor:'rgba(224, 67, 67, 0.69)'}}>
                <T>
                    As people know about your fundraiser, they will visit Donor platform to make donations. In addition, all published fundraising campaigns will also receive part of the earnings from the Donor platform community. Once the goal amount is reached, funds will start getting in your wallet to meet the needs from time to time upon your furnishing the utilization proofs to the satisfaction of donor community.
                </T>
                <Right>
                    <img src={i3} alt='' style={{height:'100%',width:'100%'}} />
                </Right>
            </Center>

            <Button style={{margin:'5rem 0 0 0',height:'4.5rem',width:'15rem',fontSize:'1.5rem'}}>Fundraise Now</Button>

        </Sec>
    )
}

export default Page4H







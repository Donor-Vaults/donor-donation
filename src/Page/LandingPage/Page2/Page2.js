import React from 'react'
import styled from 'styled-components'
// import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from './bg.svg'
import theme from "styled-theming";
import { Button } from '../../../components/Navbar/Navbar';

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

const Sec = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height:  45rem;
    background-color: rgba(249, 232, 202, 1) ;
    width: 100%;
  
    padding: 10rem 0 0 0;
    
    @media only screen and (max-width: 768px) {
        
      
        flex-direction: column;
        justify-content: space-around;
      }
`;

export const T = styled.p`
    color: #FFF;
    font-weight: 500;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    text-align: left;
      font-weight: bold;
      letter-spacing: 0.05rem;
      line-height: 1.8;
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
      }
`;


const Center = styled.div`
      width: 1000px;
      display: flex;
      flex-direction: column;
      background-color: rgba(0, 29, 35, 1);
      
        border-radius: 1.5rem;
        padding: 3rem 20rem 3rem 3rem;
        background-image: url(${bg});
        background-size: 20rem 100%;
        background-position: right center;
        background-repeat: no-repeat;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 1100px) {
       
        padding: 3rem;
        background-image: none;
    }

`

const Page2 = () => {
  
    return (
        <Sec id="">

            <Center>
              <H>How are we different</H>
              <T>
                We are like "gofundme" of the crypto-world. The differences between
                DONOR and GOFUNDME are - we help people from any part of the world,
                we ensure each cent is utilised for the purpose, and all on a
                blockchain platform managed by the community.
              </T>
              <Button 
                to="donate" spy={true} smooth={true} offset={150}
                style={{width:'13rem'}}>
                Donate now
              </Button>
            </Center>

            

        </Sec>
    )
}

export default Page2






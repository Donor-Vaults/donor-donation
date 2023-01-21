import React from 'react'
import {data} from '../config/config'
import styled from 'styled-components'
import Card from '../../components/card/Card'
import theme from "styled-theming";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import bg from './bg.svg'
import { Button } from '../../components/Navbar/Navbar';
import { T,H } from '../Home/Page2/Page2';
import mainBg from './map.jpg'

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  



const Width = styled.div`
      width: 1300px;
 
   display: flex;
   flex-direction: column;

    align-items: center;
    justify-content: center;
      @media only screen and (max-width: 1700px) {
        width: 90%;
      }
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 1100px) {

    }
`;



const Center = styled.div`
      width: 1000px;
      display: flex;
      flex-direction: column;
      background-color: rgba(0, 29, 35, 1);
        // align-items: center;
        // justify-content: space-between;
        border-radius: 1.5rem;
        padding: 3rem 20rem 3rem 3rem;
        background-image: url(${bg});
        background-size: 20rem 100%;
        background-position: right center;
        background-repeat: no-repeat;
        margin: 0 0 5rem 0;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    @media only screen and (max-width: 1400px) {
        width: 100%;
        margin-top: 2rem;
    }
    @media only screen and (max-width: 1100px) {
       
        padding: 3rem;
        background-image: none;
    }

`

const resposive =  {
    600: {
        items: 0,
    },
    
    1000:{
        items: 2,
    },
  
    1600:{
        items: 3,
    },
    2400:{
        items: 6,
    }
  }


const Page3 = (props) => {

    const Sec = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        min-height: 70rem;
        background-image: url(${mainBg});
        background-size: 100% 50rem;
        background-repeat: no-repeat;
        background-color: rgba(249, 232, 202, 1) ;
        width: 100%;
        padding: ${props.big ? '6rem 0 0 0': ''};
    @media only screen and (max-width: 1200px) {
        background-size: 150% 50rem;
        background-position: center center;
    }
    @media only screen and (max-width: 768px) {
        min-height: auto;
        width: 100%;
        padding: 2rem 0;
        background-size: 200% 50rem;
    }
`;

    return (
        <Sec id='donate'>

            <Width>
            <Center>
              <H>Anyone from anywhere can ask help</H>
              <T>Any sincere and committed individual or group or institution from anywhere in the world can fundraise for self or for a cause. </T>
              <Button
                to="fund" spy={true} smooth={true} offset={-80}
              style={{width:'13rem'}}>
                Fundraise now
              </Button>
            </Center>

            <AliceCarousel
                autoPlay={true}
                infinite={true}
                animationDuration={1768}
                disableButtonsControls={true}
                disableDotsControls={true}
                autoPlayStrategy={'none'}
                autoHeight={true}
                paddingLeft={60}
                responsive={resposive}
               
            >


                    {data?.map(e => (
                        
                        <Card img={e.img} name={e.name} button={e.button}/>
                        
                    ))}


            </AliceCarousel>
            </Width>
        </Sec>
    )
}

export default Page3

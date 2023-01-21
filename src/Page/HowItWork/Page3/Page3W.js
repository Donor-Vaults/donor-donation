import React from 'react'
import styled from 'styled-components'
// import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import theme from "styled-theming";
import i1 from './1.png';
import i2 from './2.png';
import i3 from './3.png';
import i4 from './4.png';
import i5 from './5.png';

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

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
        margin-left: 1rem;
      }
`;

const GridAuto = styled.div`
    display: grid;
    width: 1300px;
    place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    

@media only screen and (max-width: 1300px) {
  width: 90%;
}

@media only screen and (max-width: 768px) {
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
 
}
`
const Img = styled.div`
    height: 14rem;
    width: 12rem;
    margin: 2rem 0 0 0;
`

const Page3H = () => {
  
    return (
        <Sec id="">

            <GridAuto>
                <Img><img src={i1} alt='' style={{height:'100%',width:'100%'}} /></Img>
                <Img><img src={i2} alt='' style={{height:'100%',width:'100%'}} /></Img>
                <Img><img src={i3} alt='' style={{height:'100%',width:'100%'}} /></Img>
                <Img><img src={i4} alt='' style={{height:'100%',width:'100%'}} /></Img>
                <Img><img src={i5} alt='' style={{height:'100%',width:'100%'}} /></Img>
            </GridAuto>

        </Sec>
    )
}

export default Page3H







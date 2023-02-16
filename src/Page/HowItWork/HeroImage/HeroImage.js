import React,{ useState, useEffect} from 'react'
import styled from 'styled-components'
import img from './support.png'

const HomePage = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
  width: 100%;
  padding: 8rem 0 3rem 0;

 background-color: rgba(249, 232, 202, 1);

@media only screen and (max-width: 768px) {
 
    width: 100%;
   
    background-size: auto 100%;
    flex-direction: column;
}`

const Width = styled.div`
      width: 1400px;
      height: 35rem;
       display: flex;
       align-items: center;
      //   justify-content: space-between;
        background-color: #98C87D;
        background-image: url(${img});
        background-size: 100% 100%;
       // background-position: right center;
        background-repeat: no-repeat;
       // background: red;

       position: relative;
  
    @media only screen and (max-width: 1400px) {
        width: 100%;
        
    }
    @media only screen and (max-width: 1100px) {
      //   flex-direction: column;
      //  margin: 7rem  0 0 0;
       background-size: 40rem 25rem;
       height: 25rem;
       justify-content: center;
    }

    @media only screen and (max-width: 510px) {
      width: 98%;
      //margin: 4rem  0 0 0;
      background-position: center center;
      background-size: auto auto;
  }
`

const Ht = styled.h1`
    color: #000;
    font-size: 4.5rem;
    margin-bottom: 2rem;
    text-align: left;
    //font-family: 'PT Serif', serif !important;
    line-height: 1.15;
    max-width: 998px;
    margin: 0 0 0 5rem;

    @media only screen and (max-width: 1300px) {
      font-size: 4rem;
    }

    @media only screen and (max-width: 1300px) {
      font-size: 3rem;
    }

    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 2.5rem;
        font-weight: bold;
      }
`;

const Button = styled.button`
    background-color: rgba(2, 169, 92, 1);
    border: none;
    border-radius: 2rem;
    padding: 0 1.5rem;
    color: #FFF;
    font-size: 1.2rem;
    height: 3.5rem;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    position: fixed;
    top: 75%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%);
`


const HeroImage = () => {

    return (
        <HomePage id="home">

          <Width>
              
            <Ht>Helping each other is human nature</Ht>

            <Button style={{margin:'5rem 0 0 0',height:'4.5rem',width:'15rem',fontSize:'1.5rem'}}>Fundraise Now</Button>
                
          </Width>
        
        </HomePage>
    )
}

export default HeroImage

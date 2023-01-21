import React,{ useState, useEffect} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import img from './bg.png'

const HomePage = styled.section`
  display: flex;
  //flex-direction: row;
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
      // display: flex;
      //   align-items: center;
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
    color: #FFF;
    font-size: 4.5rem;
    margin-bottom: 2rem;
    text-align: left;
    //font-family: 'PT Serif', serif !important;
    line-height: 1.15;
    max-width: 998px;
    margin: 0 2rem;
    position: absolute;
    bottom: 4rem;

    @media only screen and (max-width: 1300px) {
      font-size: 4rem;
    }

    @media only screen and (max-width: 1300px) {
      font-size: 3rem;
    }

    // @media only screen and (max-width: 1100px) {
    //   font-size: 2.5rem;
    // }

    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 2.5rem;
        font-weight: bold;
      }
`;


const Page1 = () => {

    return (
        <HomePage id="home">

          <Width>
              
            <Ht>Helping each other is human nature</Ht>
                
          </Width>
        
        </HomePage>
    )
}

export default Page1

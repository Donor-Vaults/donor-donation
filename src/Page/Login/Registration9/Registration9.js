import React,{useState} from 'react'
import './Content.css'
import styled from 'styled-components'
import { FaAngleDown } from 'react-icons/fa';
import img from './correct.png'
import { Button } from '../../../components/Navbar/Navbar';
import { useDispatch } from 'react-redux';

const Sec = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden !important;
    background-color: rgba(249, 232, 202, 1);
    background-size: 100% auto;
    background-repeat: no-repeat;
    flex-direction: column;
    paading: 0 0 3rem 0;
    @media only screen and (max-width: 768px) {
        min-height: 60rem;
        background-size: auto 100% !important;
        width: 100%;
        padding: 1rem 0.5rem 1rem 0.5rem;
        flex-direction: column;
    }

`
const H = styled.h1`
  color: #FFF;
  font-size: 1.75rem;
  font-weight: 400;
  margin: 1.5rem 0 0 0;


@media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1.2rem;
    //font-weight: bold;
    text-align: center;
  }
`;


const T = styled.p`
    color: #FFF;
    font-weight: 500;
    font-size: 1.4rem;
    margin: 0.5rem 0 1.5rem 0;
    text-align: center;
 
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
      }
`;


const Width  = styled.div`
    width: 1600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    @media only screen and (max-width: 1700px) {
        width: 93%;
        justify-content: space-between;
    }
    @media only screen and (max-width: 1400px) {
        width: 96%;
        justify-content: space-between;
    }
    @media only screen and (max-width: 1000px) {
        width: 99%;
       
    }
    @media only screen and (max-width: 800px) {
        width: 99%;
        flex-direction: column;
        margin: 10rem  0 0 0;
    }
    @media only screen and (max-width: 600px) {
        width: 99%;
        
        margin: 5rem  0 0 0;
    }
`
const Details = styled.div`
background: linear-gradient(180deg, rgba(2, 169, 92, 0.5) 0%, rgba(34, 170, 48, 0.5) 100%),
linear-gradient(0deg, #FFFFFF, #FFFFFF);
    padding: 3rem 2rem 2rem 2rem;
    border: 0.25rem solid #FFFFFF;
    border-radius: 1.25rem;
    margin: 0 1rem 4rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`


const Register9 = () => {

    const dispatch = useDispatch ();

    return (
        <Sec id="roadmap">
          <Width>
            <Details>
                <img src={img} alt='' style={{height:'5rem',width:'5rem'}} />
                <H>Registration completed successfully</H>
                <H>Email successfully verified. You can now start fundraiser on DONOR platform.</H>
                <Button style={{borderRadius:'0.5rem',width:'12rem',margin:'2rem 0 0.5rem 0'}}
                    onClick={() => dispatch({type:'F1'}) }
                >
                    Fundraise now
                </Button>
            </Details>
            
          </Width>
        </Sec>
    )
}

export default Register9

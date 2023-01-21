import React from 'react'
import styled from 'styled-components'
import './Footer.css'
import bg from './foot.png'
import { Link, animateScroll as scroll } from "react-scroll";
import { Image } from '../../components/Navbar/Navbar'
import { T,H } from '../Home/Page2/Page2'
import dis from '../../components/Navbar/Discord.png'
import twi from '../../components/Navbar/Twitter.png'
import med from '../../components/Navbar/Medium.png'
import logo from '../../components/Navbar/logo.svg'

const Sec = styled.section`
    display: flex;
    justify-content: center;
    align-items:center;
    background: rgba(0, 29, 35, 1);
    padding: 2rem 0 1rem 0;
`

const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    width: 1600px;

    @media only screen and (max-width: 1600px) {
        width: 99%;
    }
`
const IconContainer = styled.div`
  margin: 0 3rem 0 0;
`
const Left = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-direction: column;
    
    width: 30rem;
    
    @media only screen and (max-width: 610px) {
        width: 99%;
        padding: 0 2rem;
    }
`
const Mid = styled.div`
    display: flex;
    width: 998px;
    justify-content: space-between;
    padding: 0 0.5rem;

    @media only screen and (max-width: 1100px) {
        width: 90%;
       
        
    }
    @media only screen and (max-width: 610px) {
        width: 99%;
       
        
    }
`

const Right = styled.div`
    display: flex;
    width: 30rem;
    justify-content: center;
    align-items:center;
    flex-direction: column;
 
    @media only screen and (max-width: 610px) {
        width: 99%;
        padding: 2rem 0;
    }
`
const Link1 = styled(Link)`
    
 
   cursor: pointer;
   display: flex;
   align-items: center;
   font-size: 3.5rem;
   color: rgba(249,232,202,0.9);
    @media only screen and (max-width: 998px) {
        margin-right: 6rem  !important;
        width: 16rem;
        height: auto;
    }
    @media only screen and (max-width: 768px) {
       // margin-right: 3rem  !important;
        width: 10rem;
        font-size: 1.5rem;
    }
    `
const Upper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
    //place-items: center;
    width: 100%;
    // grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    // padding: 0 0 0 2rem;
    
    @media only screen and (max-width: 610px) {
        grid-template-columns: repeat(auto-fit, minmax(99%, 1fr));
        padding: 0 0 ;
    }
`

const Line = styled.div`
    width: 100%;
    height: 1px;
    background: rgba(255,255,255,0.6);
    margin: 2rem 0;
`


const Lower = styled.div`
     background-color: rgba(1, 23, 28, 1);
     width: 1400px;
     display: flex;
     justify-content:space-between;
    align-items:center;
    padding: 0.5rem 1.5rem;
    margin: 4rem 0 1rem 0;
    @media only screen and (max-width: 1400px) {
        width: 98%;
    }
    @media only screen and (max-width: 610px) {
        width: 99%;
        flex-direction: column;
        padding: 2rem 0.5rem;
    }
`
const SocialMedia = styled.div`
    @media only screen and (max-width: 610px) {
        margin: 1rem 0 0 0;
    }
`

const Footer = () => {
    return (
        <Sec>
        <StyledFooter >
    
            <Upper>
    
                <Left>
                    <T style={{color:' rgba(249,232,202,0.7)',fontSize:'1rem'}}>Copyright @ 2022. All rights reserved</T>
                    <IconContainer>
                        <Link1 style={{margin:"0"}} to="home" spy={true} smooth={true} >
                            <img src='/yellow.png' alt="Logo" style={{width:"10rem",height:"9rem"}} />
                            Donor
                        </Link1>
                    </IconContainer> 
                   
                </Left>
    
                <Mid>
                    <div style={{margin:'2rem 0 0 0'}}>
                        <H style={{fontSize:'1.6rem',fontWeight:'500',margin:'0 0 1rem 0',color:' rgba(249,232,202,0.9)'}}>Connect</H>
                        <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400',color:' rgba(249,232,202,0.8)'}}>Telegram</T>
                        <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400',color:' rgba(249,232,202,0.8)'}}>Reddit</T>
                        <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400',color:' rgba(249,232,202,0.8)'}}>Discord</T>
                        <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400',color:' rgba(249,232,202,0.8)'}}>Twitter</T>
                        {/* <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400'}}>Contact us</T>
                        <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400'}}>Contact us</T> */}
                    </div>
                    <div  style={{margin:'2rem 0 0 0'}}>
                        <H style={{fontSize:'1.6rem',fontWeight:'500',margin:'0 0 1rem 0',color:' rgba(249,232,202,0.9)'}}>Learn</H>
                        <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400',color:' rgba(249,232,202,0.8)'}}>Medium</T>
                        {/* <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400'}}>Contact us</T>
                        <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400'}}>Contact us</T>
                        <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400'}}>Contact us</T>
                        <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400'}}>Contact us</T>
                        <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400'}}>Contact us</T> */}
                    </div>
                    <div  style={{margin:'2rem 0 0 0'}}>
                        <H style={{fontSize:'1.6rem',fontWeight:'500',margin:'0 0 1rem 0',color:' rgba(249,232,202,0.9)'}}>Build</H>
                        <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400',color:' rgba(249,232,202,0.8)'}}>Docs</T>
                        <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400',color:' rgba(249,232,202,0.8)'}}>Github</T>
                        <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400',color:' rgba(249,232,202,0.8)'}}>Disclaimer</T>
                        {/* <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400'}}>Contact us</T>
                        <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400'}}>Contact us</T>
                        <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'1rem',fontWeight:'400'}}>Contact us</T> */}
                    </div>
                </Mid>
    
                {/* <Right>
                    <H style={{fontSize:'1.6rem',fontWeight:'500'}}>Contact</H>
                    <div style={{display:'flex'}}>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" fill="#02A95C"/>
                            <path d="M31.3087 30.2753C31.3087 30.5753 31.242 30.8837 31.1003 31.1837C30.9587 31.4837 30.7753 31.767 30.5337 32.0337C30.1253 32.4837 29.6753 32.8087 29.167 33.017C28.667 33.2253 28.1253 33.3337 27.542 33.3337C26.692 33.3337 25.7837 33.1337 24.8253 32.7253C23.867 32.317 22.9087 31.767 21.9587 31.0753C21.0003 30.3753 20.092 29.6003 19.2253 28.742C18.367 27.8753 17.592 26.967 16.9003 26.017C16.217 25.067 15.667 24.117 15.267 23.1753C14.867 22.2253 14.667 21.317 14.667 20.4503C14.667 19.8837 14.767 19.342 14.967 18.842C15.167 18.3337 15.4837 17.867 15.9253 17.4503C16.4587 16.9253 17.042 16.667 17.6587 16.667C17.892 16.667 18.1253 16.717 18.3337 16.817C18.5503 16.917 18.742 17.067 18.892 17.2837L20.8253 20.0087C20.9753 20.217 21.0837 20.4087 21.1587 20.592C21.2337 20.767 21.2753 20.942 21.2753 21.1003C21.2753 21.3003 21.217 21.5003 21.1003 21.692C20.992 21.8837 20.8337 22.0837 20.6337 22.2837L20.0003 22.942C19.9087 23.0337 19.867 23.142 19.867 23.2753C19.867 23.342 19.8753 23.4003 19.892 23.467C19.917 23.5337 19.942 23.5837 19.9587 23.6337C20.1087 23.9087 20.367 24.267 20.7337 24.7003C21.1087 25.1337 21.5087 25.5753 21.942 26.017C22.392 26.4587 22.8253 26.867 23.267 27.242C23.7003 27.6087 24.0587 27.8587 24.342 28.0087C24.3837 28.0253 24.4337 28.0503 24.492 28.0753C24.5587 28.1003 24.6253 28.1087 24.7003 28.1087C24.842 28.1087 24.9503 28.0587 25.042 27.967L25.6753 27.342C25.8837 27.1337 26.0837 26.9753 26.2753 26.8753C26.467 26.7587 26.6587 26.7003 26.867 26.7003C27.0253 26.7003 27.192 26.7337 27.3753 26.8087C27.5587 26.8837 27.7503 26.992 27.9587 27.1337L30.717 29.092C30.9337 29.242 31.0837 29.417 31.1753 29.6253C31.2587 29.8337 31.3087 30.042 31.3087 30.2753Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10"/>
                            <path d="M28.4167 22.5007C28.4167 22.0007 28.025 21.234 27.4417 20.609C26.9083 20.034 26.2 19.584 25.5 19.584" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M31.3333 22.5003C31.3333 19.2753 28.725 16.667 25.5 16.667" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div style={{margin:'0 0 0 1rem'}}>
                            <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'0.8rem',fontWeight:'400'}}>Toi</T>
                            <T style={{margin:'0',fontSize:'1rem',fontWeight:'400'}}>310-437-2766</T>
                        </div>
    
                    </div>
                    <div style={{display:'flex'}}>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" fill="#02A95C"/>
                            <path d="M31.3087 30.2753C31.3087 30.5753 31.242 30.8837 31.1003 31.1837C30.9587 31.4837 30.7753 31.767 30.5337 32.0337C30.1253 32.4837 29.6753 32.8087 29.167 33.017C28.667 33.2253 28.1253 33.3337 27.542 33.3337C26.692 33.3337 25.7837 33.1337 24.8253 32.7253C23.867 32.317 22.9087 31.767 21.9587 31.0753C21.0003 30.3753 20.092 29.6003 19.2253 28.742C18.367 27.8753 17.592 26.967 16.9003 26.017C16.217 25.067 15.667 24.117 15.267 23.1753C14.867 22.2253 14.667 21.317 14.667 20.4503C14.667 19.8837 14.767 19.342 14.967 18.842C15.167 18.3337 15.4837 17.867 15.9253 17.4503C16.4587 16.9253 17.042 16.667 17.6587 16.667C17.892 16.667 18.1253 16.717 18.3337 16.817C18.5503 16.917 18.742 17.067 18.892 17.2837L20.8253 20.0087C20.9753 20.217 21.0837 20.4087 21.1587 20.592C21.2337 20.767 21.2753 20.942 21.2753 21.1003C21.2753 21.3003 21.217 21.5003 21.1003 21.692C20.992 21.8837 20.8337 22.0837 20.6337 22.2837L20.0003 22.942C19.9087 23.0337 19.867 23.142 19.867 23.2753C19.867 23.342 19.8753 23.4003 19.892 23.467C19.917 23.5337 19.942 23.5837 19.9587 23.6337C20.1087 23.9087 20.367 24.267 20.7337 24.7003C21.1087 25.1337 21.5087 25.5753 21.942 26.017C22.392 26.4587 22.8253 26.867 23.267 27.242C23.7003 27.6087 24.0587 27.8587 24.342 28.0087C24.3837 28.0253 24.4337 28.0503 24.492 28.0753C24.5587 28.1003 24.6253 28.1087 24.7003 28.1087C24.842 28.1087 24.9503 28.0587 25.042 27.967L25.6753 27.342C25.8837 27.1337 26.0837 26.9753 26.2753 26.8753C26.467 26.7587 26.6587 26.7003 26.867 26.7003C27.0253 26.7003 27.192 26.7337 27.3753 26.8087C27.5587 26.8837 27.7503 26.992 27.9587 27.1337L30.717 29.092C30.9337 29.242 31.0837 29.417 31.1753 29.6253C31.2587 29.8337 31.3087 30.042 31.3087 30.2753Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10"/>
                            <path d="M28.4167 22.5007C28.4167 22.0007 28.025 21.234 27.4417 20.609C26.9083 20.034 26.2 19.584 25.5 19.584" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M31.3333 22.5003C31.3333 19.2753 28.725 16.667 25.5 16.667" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div style={{margin:'0 0 0 1rem'}}>
                            <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'0.8rem',fontWeight:'400'}}>Toi</T>
                            <T style={{margin:'0',fontSize:'1rem',fontWeight:'400'}}>310-437-2766</T>
                        </div>
    
                    </div>
                    <div style={{display:'flex'}}>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" fill="#02A95C"/>
                            <path d="M31.3087 30.2753C31.3087 30.5753 31.242 30.8837 31.1003 31.1837C30.9587 31.4837 30.7753 31.767 30.5337 32.0337C30.1253 32.4837 29.6753 32.8087 29.167 33.017C28.667 33.2253 28.1253 33.3337 27.542 33.3337C26.692 33.3337 25.7837 33.1337 24.8253 32.7253C23.867 32.317 22.9087 31.767 21.9587 31.0753C21.0003 30.3753 20.092 29.6003 19.2253 28.742C18.367 27.8753 17.592 26.967 16.9003 26.017C16.217 25.067 15.667 24.117 15.267 23.1753C14.867 22.2253 14.667 21.317 14.667 20.4503C14.667 19.8837 14.767 19.342 14.967 18.842C15.167 18.3337 15.4837 17.867 15.9253 17.4503C16.4587 16.9253 17.042 16.667 17.6587 16.667C17.892 16.667 18.1253 16.717 18.3337 16.817C18.5503 16.917 18.742 17.067 18.892 17.2837L20.8253 20.0087C20.9753 20.217 21.0837 20.4087 21.1587 20.592C21.2337 20.767 21.2753 20.942 21.2753 21.1003C21.2753 21.3003 21.217 21.5003 21.1003 21.692C20.992 21.8837 20.8337 22.0837 20.6337 22.2837L20.0003 22.942C19.9087 23.0337 19.867 23.142 19.867 23.2753C19.867 23.342 19.8753 23.4003 19.892 23.467C19.917 23.5337 19.942 23.5837 19.9587 23.6337C20.1087 23.9087 20.367 24.267 20.7337 24.7003C21.1087 25.1337 21.5087 25.5753 21.942 26.017C22.392 26.4587 22.8253 26.867 23.267 27.242C23.7003 27.6087 24.0587 27.8587 24.342 28.0087C24.3837 28.0253 24.4337 28.0503 24.492 28.0753C24.5587 28.1003 24.6253 28.1087 24.7003 28.1087C24.842 28.1087 24.9503 28.0587 25.042 27.967L25.6753 27.342C25.8837 27.1337 26.0837 26.9753 26.2753 26.8753C26.467 26.7587 26.6587 26.7003 26.867 26.7003C27.0253 26.7003 27.192 26.7337 27.3753 26.8087C27.5587 26.8837 27.7503 26.992 27.9587 27.1337L30.717 29.092C30.9337 29.242 31.0837 29.417 31.1753 29.6253C31.2587 29.8337 31.3087 30.042 31.3087 30.2753Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10"/>
                            <path d="M28.4167 22.5007C28.4167 22.0007 28.025 21.234 27.4417 20.609C26.9083 20.034 26.2 19.584 25.5 19.584" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M31.3333 22.5003C31.3333 19.2753 28.725 16.667 25.5 16.667" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div style={{margin:'0 0 0 1rem'}}>
                            <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'0.8rem',fontWeight:'400'}}>Toi</T>
                            <T style={{margin:'0',fontSize:'1rem',fontWeight:'400'}}>310-437-2766</T>
                        </div>
    
                    </div>
                </Right> */}
    
            </Upper>
            
            <Line />
    
            <div style={{padding:'0 1rem '}}>
              <H style={{margin:'0 0 1rem 0',color:' rgba(249,232,202,0.9)'}}>
              Disclaimer:</H>
              <T style={{color:' rgba(249,232,202,0.7)'}} >
                The Information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice, and you should not treat any of the website's content as such. The DONOR team provides the website as a service to the public, and is not resonsible for, and expressly disclaims all liabilty for, damages of any kind arising out of use, reference to, or reliance on any information contained within this website. While the information contained within this website is periodically updated, no quarantee is given that the information provided in this webiste is correct, complete and up-to-date.
              </T>
    
            </div>
    
            {/* <Lower>
                <div style={{color:'#fff'}}>
                © 2000-2021,<span style={{color:'rgba(2, 169, 92, 1)'}}> Donor</span>  All Rights Reserved
                </div>
                <SocialMedia>
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4167 16.275V21.35H28.8583C29.2 21.35 29.3708 21.7 29.3708 22.05L28.6875 25.375C28.6875 25.55 28.3458 25.725 28.175 25.725H24.4167V38.5H19.2917V25.9H16.3875C16.0458 25.9 15.875 25.725 15.875 25.375V22.05C15.875 21.7 16.0458 21.525 16.3875 21.525H19.2917V15.75C19.2917 12.775 21.5125 10.5 24.4167 10.5H29.0292C29.3708 10.5 29.5417 10.675 29.5417 11.025V15.225C29.5417 15.575 29.3708 15.75 29.0292 15.75H24.9292C24.5875 15.75 24.4167 15.925 24.4167 16.275Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M26.1253 38.5H15.8753C7.33366 38.5 3.91699 35 3.91699 26.25V15.75C3.91699 7 7.33366 3.5 15.8753 3.5H26.1253C34.667 3.5 38.0837 7 38.0837 15.75V26.25C38.0837 35 34.667 38.5 26.1253 38.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
    
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4167 16.275V21.35H28.8583C29.2 21.35 29.3708 21.7 29.3708 22.05L28.6875 25.375C28.6875 25.55 28.3458 25.725 28.175 25.725H24.4167V38.5H19.2917V25.9H16.3875C16.0458 25.9 15.875 25.725 15.875 25.375V22.05C15.875 21.7 16.0458 21.525 16.3875 21.525H19.2917V15.75C19.2917 12.775 21.5125 10.5 24.4167 10.5H29.0292C29.3708 10.5 29.5417 10.675 29.5417 11.025V15.225C29.5417 15.575 29.3708 15.75 29.0292 15.75H24.9292C24.5875 15.75 24.4167 15.925 24.4167 16.275Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M26.1253 38.5H15.8753C7.33366 38.5 3.91699 35 3.91699 26.25V15.75C3.91699 7 7.33366 3.5 15.8753 3.5H26.1253C34.667 3.5 38.0837 7 38.0837 15.75V26.25C38.0837 35 34.667 38.5 26.1253 38.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4167 16.275V21.35H28.8583C29.2 21.35 29.3708 21.7 29.3708 22.05L28.6875 25.375C28.6875 25.55 28.3458 25.725 28.175 25.725H24.4167V38.5H19.2917V25.9H16.3875C16.0458 25.9 15.875 25.725 15.875 25.375V22.05C15.875 21.7 16.0458 21.525 16.3875 21.525H19.2917V15.75C19.2917 12.775 21.5125 10.5 24.4167 10.5H29.0292C29.3708 10.5 29.5417 10.675 29.5417 11.025V15.225C29.5417 15.575 29.3708 15.75 29.0292 15.75H24.9292C24.5875 15.75 24.4167 15.925 24.4167 16.275Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M26.1253 38.5H15.8753C7.33366 38.5 3.91699 35 3.91699 26.25V15.75C3.91699 7 7.33366 3.5 15.8753 3.5H26.1253C34.667 3.5 38.0837 7 38.0837 15.75V26.25C38.0837 35 34.667 38.5 26.1253 38.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
    
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4167 16.275V21.35H28.8583C29.2 21.35 29.3708 21.7 29.3708 22.05L28.6875 25.375C28.6875 25.55 28.3458 25.725 28.175 25.725H24.4167V38.5H19.2917V25.9H16.3875C16.0458 25.9 15.875 25.725 15.875 25.375V22.05C15.875 21.7 16.0458 21.525 16.3875 21.525H19.2917V15.75C19.2917 12.775 21.5125 10.5 24.4167 10.5H29.0292C29.3708 10.5 29.5417 10.675 29.5417 11.025V15.225C29.5417 15.575 29.3708 15.75 29.0292 15.75H24.9292C24.5875 15.75 24.4167 15.925 24.4167 16.275Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M26.1253 38.5H15.8753C7.33366 38.5 3.91699 35 3.91699 26.25V15.75C3.91699 7 7.33366 3.5 15.8753 3.5H26.1253C34.667 3.5 38.0837 7 38.0837 15.75V26.25C38.0837 35 34.667 38.5 26.1253 38.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
    
                </SocialMedia>
            </Lower> */}
           
        </StyledFooter>
        </Sec>
    )
}

export default Footer

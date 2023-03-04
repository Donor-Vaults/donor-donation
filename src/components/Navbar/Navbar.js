import React,{useState, useEffect, useRef } from 'react'
import './Navbar.css';
import logo from './logo.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { Link } from "react-scroll";
import theme from "styled-theming";
import { Link as RouterLink } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import Profile from './components/Profile/Profile';
import scroll from 'react-scroll'

const ScrollLink = scroll.ScrollLink

export const Link1 = styled(RouterLink)`
  display: flex;
  margin: 0 0 0.5rem 8vw;
  align-items: center;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-size: 1.8rem;
 // background:red;
  font-family: 'Roboto Condensed', sans-serif;
  @-webkit-keyframes hvr-pulse {
    25% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
  @keyframes hvr-pulse {
    25% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
 
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  
  &:hover, &:focus, &:active {
    -webkit-animation-name: hvr-pulse;
    animation-name: hvr-pulse;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
}

@media only screen and (max-width: 1600px) {
  margin: 0 0 0 1rem;
}

@media only screen and (max-width: 768px) {
  font-size: 1.8rem;
}


`;

const Link2 = styled(RouterLink)`
  display: flex;
  margin: 0;
  align-items: center;
  text-decoration: none;
  color: #FFF !important;
  cursor: pointer;
  font-weight: 550;

  @media only screen and (max-width: 768px) {
    
  }

`;



const Link3 = styled.a`
  display: flex;
  margin: 0;
  align-items: center;
  text-decoration: none;
  color: #FFF !important;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    
  }

`;

const Hr = styled.a`
display: flex;
margin: 0;
align-items: center;
text-decoration: none;
color: #FFF !important;
cursor: pointer;
@media only screen and (max-width: 768px) {
  
}
`

const Mobile = styled.div`
  display: none;
  @media only screen and (max-width: 1200px) {
    display: block;
    //margin: 0 2rem 0 0;
    background: red;
  }`

const PC = styled.div`
display: block;
@media only screen and (max-width: 1200px) {
  display: none;
}`

export const Button = styled(Link)`
  background-color: rgba(2, 169, 92, 1);
  border: none;
  border-radius: 2rem;
  padding: 0 1.5rem;
  color: #FFF;
  font-size: 1.2rem;
  height: 3.5rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

export const IconContainer = styled.div`
  
  margin: 0 8vw 0 2rem;
  @media only screen and (max-width: 1600px) {
    margin: 0 6rem 0 0;
  }
  @media only screen and (max-width: 1200px) {
    margin: 0 10rem 0 0;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
 
`
export const Image = styled(motion.img)`
  cursor: pointer;
`
const RightContainer = styled.div`
  display: flex;
  //background: red;
  align-items: center;
`

const Navbar = () => {


  const wallet = useWallet();

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

const [navbar, setNavbar] = useState(false)

const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })  

    return (
        <nav className={navbar ?  "navActiveLight": "nav"} >

         
          <Link1 to="/" spy={true} smooth={true} ><img src={logo} alt="Logo" className={navbar ? "LogoActive" : "Logo"} /> <span style={{margin:'0 0 0 -0.5rem'}}>Donor</span></Link1>
          
          <RightContainer>
        
            <PC>
              <ul className={wallet.account ? "listWallet" : "list"}>
                <Link3
                  href="http://donoooor-valuts.s3-website-us-west-2.amazonaws.com/#/bsctest" spy={true}
                  smooth={true} offset={-80}>Vault
                </Link3>
              
                <Link2 to="/allfundraiser" spy={true} smooth={true} offset={-80}>
                  Donate
                </Link2>   

                  {/* <Link2 to="/donate" spy={true} smooth={true} offset={-80}>Donate</Link2>  */}
                  <Link2 to="/start" spy={true} smooth={true} offset={-80}>Start a Fundraiser</Link2>  
                  <Link2 to="/docs" spy={true} smooth={true} offset={-80}>Docs</Link2>
                  <Link2 to="/work" spy={true} smooth={true} offset={-80}>How It Works</Link2> 
                  {
                    wallet.account ? 
                    <Link2 to="/work" spy={true} smooth={true} offset={-80}>My Campaigns </Link2> 
                    :
                    null
                  }
              </ul> 
            </PC>

            
            <div style={{display:'flex'}}>
              <IconContainer>
                {/* <Button 
                    type="button"
                    whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
                    whileTap={{ scale: 0.7 }}
                >
                  Launch App
                </Button> */}
              </IconContainer> 

          
            <Mobile ref={node}>
              <FocusLock disabled={!open}>
                <Burger  open={open} setOpen={setOpen} aria-controls={menuId} />
                <Menu open={open} setOpen={setOpen} id={menuId} />
              </FocusLock>
            </Mobile>
          </div>

        </RightContainer>

        <Profile/>

        </nav>   
    )
}

export default Navbar

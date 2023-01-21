import React,{ useState, useEffect} from 'react'
import styled from 'styled-components'
import './Bg.css'
import { motion } from 'framer-motion'
import img from './support.png'
import { useSelector, useDispatch } from "react-redux";
import theme from "styled-theming";
import { BsBoxArrowUp } from 'react-icons/bs';
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from '../../../components/Navbar/Navbar';
import { useWallet } from 'use-wallet'

// const iconColor = theme("theme", {
//     light: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
//     dark: "linear-gradient(to right, #fc00ff, #00dbde)",
//   });  


const HomePage = styled.section`
  display: flex;
  //flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100%;
  width: 100%;
  padding: 10rem 0 1rem 0;

 background-color: rgba(249, 232, 202, 1);

@media only screen and (max-width: 768px) {
 
    width: 100%;
   
    background-size: auto 100%;
    flex-direction: column;
}`

const Width = styled.div`
      width: 1300px;
      height: 28rem;
      display: flex;
     margin: 3rem 0 0 0;
        align-items: center;
        justify-content: space-between;
        background-color: #98C87D;
        background-image: url(${img});
        background-size: 100% 100%;
       // background-position: right center;
        background-repeat: no-repeat;
       // background: red;
  
    @media only screen and (max-width: 1400px) {
        width: 95%;
        
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

const Left = styled(motion.div)`
        width: 55%;
     // background: red;

          @media only screen and (max-width: 1100px) {
            width: 50%;
        }
        @media only screen and (max-width: 998px) {
            width: 85%;
        }

    @media only screen and (max-width: 768px) {
     
        width: 85%;
      
       
      }
`;

const Right = styled(motion.div)`
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 60%;
        height: 45rem;


          @media only screen and (max-width: 1100px) {
            width: 50%;
            margin: 3rem  0 0 0;
            height: auto;
        }
        @media only screen and (max-width: 998px) {
            width: 65%;
           
        }

      @media only screen and (max-width: 768px) {
        width: 25rem; 
        
      }

      @media only screen and (max-width: 768px) {
        width: 90%; 
        
      }
`;

const Ht = styled.h1`
    color: #000;
    font-size: 4rem;
    margin-bottom: 2rem;
    text-align: left;
    //font-family: 'PT Serif', serif !important;
    line-height: 1.15;
    margin: 0 0 0 2rem;

    @media only screen and (max-width: 1300px) {
      font-size: 3.5rem;
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

const T = styled.p`
    
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: left;
   // font-family: 'Nunito Sans', sans-serif;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
       
      }
`;

const ButtonContainer = styled.div`
      display: flex;
        justify-content: center;
        
        justify-content: space-between;
     width: 22rem;
     margin: 3rem 0 0 0;
     @media only screen and (max-width: 768px) {
      width: 98%;
      flex-direction: column;
    }
`

const ShowButton = styled(Link)`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background-color: rgba(2, 169, 92, 1); //
    color: #FFF ;
    font-weight: bold;
    cursor: pointer;
    position: fixed;
    height: 4rem;
    width: 3rem;
    border-radius: 0.5rem;
    transition:  0.5s linear;
    right: 3rem ;
    bottom: 10rem;
    display: grid;
    place-items: center;
    z-index: 7;
    @media only screen and (max-width: 768px) {
      right: 2rem ;
    bottom: 5rem;
    }
    
`
const ButtonR = styled(Button)`
  margin: 0 0 0 1rem;
  box-shadow: none;
  color: rgba(0, 29, 35, 1);
  background: transparent;
  min-width: 15rem;
  border: 2px solid rgba(176, 163, 144, 1);
  @media only screen and (max-width: 768px) {
    margin: 1rem 0 0 0;
  }
`

const Home = () => {

    
    const dispatch = useDispatch();
    const wallet = useWallet();

    const renderButton = ()=>{
      return(
        (wallet.account) ?
        <Button type='button'
          style={{padding:'0 1rem',minWidth:'11rem'}}
        onClick={() => {
          wallet.connect();
        }}
        to="donate" spy={true} smooth={true} offset={150}
        >
          {wallet.account.slice(0, 10)}...
        </Button>
        :
        <Button type='button'
          style={{padding:'0 1rem',minWidth:'11rem'}}
        onClick={() => {
          wallet.connect();
        }}
        to="donate" spy={true} smooth={true} offset={150}
        >
          Donate
        </Button>
      )
    
    }
    
    const [ showButton, setShowButton ] = useState(false)

    const showButtonTop = () => {
      // console.log(window.scrollY)
      if (window.scrollY >= 600) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
  
    useEffect(() => {
      showButtonTop()
      // adding the event when scroll change background
      window.addEventListener("scroll", showButtonTop)
    })  


    return (
        <HomePage id="home">

          {/* <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',backgroundColor:'#98C87D'}}> */}
          <Width>
              <Left>
                <Ht>Your support is highly  <span style={{color:'rgba(2, 169, 92, 1)'}}>appreciated</span> </Ht>
                
               
              </Left>
            
              {/* <Right 
                  initial={{ x: 0, y:0}}
                  animate={{ x: -15, y: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity ,repeatType: "reverse",
                  }}
              // whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
              >
                   <img src={img} alt='' style={{width:'100%',height:'100%'}} />
              </Right> */}

          </Width>
          {/* </div> */}
           

          { showButton ? 
          
            <ShowButton
              type="button"
              to="home" spy={true} smooth={true}
            >
              <BsBoxArrowUp size="2rem"/>
            </ShowButton> :
            
            null
          }
            
            
        </HomePage>
    )
}

export default Home

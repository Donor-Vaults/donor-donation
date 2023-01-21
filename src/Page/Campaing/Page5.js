import React,{useState} from 'react'
import styled from 'styled-components'
import './Style.css'
import bg from './pic.png'
import theme from "styled-theming";
import BigCard from './components/BigCard'
import SmallCard from './components/SmallCard';
import VaultCard from './components/VaultCard';

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8rem 0 3rem 0;
    background-color: rgba(249, 232, 202, 1);
    background-repeat: no-repeat;
    background-image: url();
    background-size: 50% 70%;
    background-position: right top !important;
  
    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 1rem 0 2rem 0;
        flex-direction: column;
        justify-content: space-around;
      }
`;


const T = styled.p`
    color: #000;
    font-weight: normal;
    font-size: 1.8rem;
    margin: 1rem 0 -0.5rem 2rem; 
    // margin-bottom: 2rem;
    // text-align: left;
    //  font-weight: lighter;
    //  letter-spacing: 0.05rem;
    //  line-height: 1.8;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
       
      }
`;

const Tp = styled.p`
    color: grey;
    font-weight: normal;
    font-size: 1.2rem;
    margin: 1rem 0 -0.5rem 2rem; 
    text-align: right;
 
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
       
      }
`;

const Flex = styled.div`
        width: 100%;
        display: flex;
        //
        justify-content: space-between;
       // align-items: center;
     
    @media only screen and (max-width: 1250px) {
       
        flex-direction: column;
      }
`;


const Button = styled.button`
  background-color: rgba(2, 169, 92, 1);
  border: none;
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 0 1.5rem;
  color: #FFF;
  font-size: 1.2rem;
  height: 8rem;
  width: 15rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

 
  @media only screen and (max-width: 1100px) {
    height: 4rem;
   
  }

  @media only screen and (max-width: 768px) {
    height: 4rem;
    width: 100%;
    border-radius: 0 0 0.5rem 0.5rem;
  }
`
const SmallButton = styled.button`
  background-color: transparent;
  border: 2px solid rgba(2, 169, 92, 1);
  border-radius: 0.5rem ;
  padding: 0.5rem 1.5rem;
  color: rgba(2, 169, 92, 1);
  font-size: 1.2rem;
  cursor: pointer;
      margin: 1.5rem 0 0 0;
`

const Width = styled.div`
      width: 1300px;
      display: flex;
      flex-direction: column;
        align-items: center;
        justify-content: space-between;
    
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }
`
const Margin = styled.div`
@media only screen and (max-width: 1100px) {
  margin: 0 0 1rem 0;
}
@media only screen and (max-width: 768px) {
  margin: 1rem 0;
}
` 
const Heading = styled.div`
    color: rgba(2, 169, 92, 1);
    font-size: 2.5rem;
      //margin: 0.5rem 0;
      font-weight: bold;
     text-align: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
      
      }
`;

const Line = styled.div`
    background: rgba(196, 196, 196, 0.3);
    width: 75%;
    height: 3px;
    margin: 1rem 0 0 0;
    @media only screen and (max-width: 1350px) {
      //width: 20rem;
    }
`

const Page5 = () => {
  
  const [ dis, setDis ] = useState('none');

    return (
        <Sec id="">
          <Width>
            <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
              <Heading>
              Feeding From Far-Ration Distribution Amid Lockdown
              </Heading>
              <Line />
            </div>
            {/* <SmallButton
              onClick={() => { dis === 'none' ? setDis('flex') : setDis('none')}}
            >Vaults</SmallButton>
            <VaultCard dis={dis} /> */}
            <Flex>
              <BigCard img={bg} />
              <SmallCard />
              {/* <SmallCard2 /> */}
            </Flex>
            
          </Width>
        </Sec>
    )
}

export default Page5

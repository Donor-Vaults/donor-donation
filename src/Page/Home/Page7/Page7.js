import React from 'react'
import styled from 'styled-components'
import bg from './bg.png'
// import { Button, IconContainer } from '../../components/Navbar/Navbar';
import { H,T } from '../Page2/Page2'
import img1 from './1.svg'
import img2 from './2.svg'
import img3 from './3.svg'
import img4 from './4.svg'
import img5 from './5.svg'

const Sec = styled.section`
 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(249, 232, 202, 1);
    padding: 2rem 0;
    @media only screen and (max-width: 768px) {
        padding: 2rem 0;
        background-size: auto 100%;
      }
`;

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

const Ts = styled(T)`
    color: rgba(140, 150, 166, 1);
    font-size: 2rem;
    @media only screen and (max-width: 1000px) {
      font-size: 1.5rem;
  }
`
const Icon = styled.div`
    height: 5rem;
    width: 5rem;
    @media only screen and (max-width: 600px) {
      height: 3rem;
    width: 3rem;
  }
`

const IconContainer = styled.div`
     display: flex;
  margin: 4rem 0 0 0;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
   
    // background-color: rgba(0,0,0,0.7);
    

  @media only screen and (max-width: 1400px) {
      width: 96%;
      margin: 2rem 0 0 0;
     
  }
  @media only screen and (max-width: 1000px) {
      width: 99%;
      margin: 1rem 0 0 0;
  }
  @media only screen and (max-width: 800px) {
      width: 99%;
    
  }
  @media only screen and (max-width: 600px) {
      width: 99%;
      
  }
`
const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: rgba(234, 225, 209, 1);
  margin: 4rem 0 0 0;
`

const Page2 = () => {
  
    return (
        <Sec id="garage">

          <Width>

          <Ts> 
            We will be on all the main blockchain networks shortly
          </Ts>

        <IconContainer>
          
          <Icon>
            <img src={img1} alt='' style={{width:'100%',height:'100%'}} />
          </Icon>
          <Icon>
            <img src={img2} alt='' style={{width:'100%',height:'100%'}} />
          </Icon>
          {/* <Icon>
            <img src={img3} alt='' style={{width:'100%',height:'100%'}} />
          </Icon> */}
          <Icon>
            <img src={img4} alt='' style={{width:'100%',height:'100%'}} />
          </Icon>
          <Icon>
            <img src={img5} alt='' style={{width:'100%',height:'100%'}} />
          </Icon>

        </IconContainer>

        </Width>

        <Line />

        </Sec>
    )
}

export default Page2

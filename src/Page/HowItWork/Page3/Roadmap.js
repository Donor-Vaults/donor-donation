import React from 'react'
import styled from 'styled-components'
import i1 from './1.png';
import i2 from './2.png';
import i3 from './3.png';
import i4 from './4.png';
import i5 from './5.png';

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

const Width = styled.div`
      width: 1300px;
      display: flex;
      flex-direction: column;
        align-items: center;
        justify-content: center;
    
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 768px) {
        display: none;
    }
`
const WidthM = styled.div`
 
      display: none;
     
    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 95%;
    }
`

const Img = styled.div`
    height: 14rem;
    width: 12rem;
    margin: 2rem 0 0 0;
`
const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const FlexSmall = styled.div`
    width: 40rem;
    display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0 0 0;
  @media only screen and (max-width: 998px) {
    width: 35rem;
}
@media only screen and (max-width: 888px) {
  width: 30rem;
}
`

const Roadmap = () => {
  
    return (
        <Sec id="">

            <Width>
              <Flex>
                <Img><img src={i1} alt='' style={{height:'100%',width:'100%'}} /></Img>
                <Img><img src={i2} alt='' style={{height:'100%',width:'100%'}} /></Img>
                <Img><img src={i3} alt='' style={{height:'100%',width:'100%'}} /></Img>
              </Flex>
              <FlexSmall>
                <Img><img src={i4} alt='' style={{height:'100%',width:'100%'}} /></Img>
                <Img><img src={i5} alt='' style={{height:'100%',width:'100%'}} /></Img>
              </FlexSmall>
            </Width>

            <WidthM>
              <Img><img src={i1} alt='' style={{height:'100%',width:'100%'}} /></Img>
              <Img><img src={i4} alt='' style={{height:'100%',width:'100%'}} /></Img>
              <Img><img src={i2} alt='' style={{height:'100%',width:'100%'}} /></Img>
              <Img><img src={i5} alt='' style={{height:'100%',width:'100%'}} /></Img>
              <Img><img src={i3} alt='' style={{height:'100%',width:'100%'}} /></Img>
            </WidthM>

        </Sec>
    )
}

export default Roadmap





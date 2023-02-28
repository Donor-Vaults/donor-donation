import React from 'react'
import styled from 'styled-components';
import theme from 'styled-theming';
import Tilt from 'react-parallax-tilt';
import { H, T } from '../../Page/Home/Page2/Page2'
import { Button } from '../Navbar/Navbar';

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

  export const bColor = theme("theme", {
    light: "linear-gradient(to right, #36d1dc, #5b86e5)",
    dark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  });  

const Card = (props) => {
    const Box= styled.div`
     
        width: 24rem;  
        height: 30rem; 
       
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
       background-color: rgba(2, 169, 92, 0.75);
        margin: 2rem auto 0 auto;
        border-radius: 2rem 2rem 0 0 ;
       
        @media only screen and (max-width: 510px) {
            
            width: 98%;
            
        }
    `;
    const Upper = styled.div`
        height: 18rem;
        width: 100%;
        `;

    const Lower = styled.div`
       
        padding: 0 1rem;
        display: grid;
        place-items: center;
    `;

    return (
        <Box>
            <Upper>
                <img src={`${props.img ? props.img : ""}`} alt="" style={{width:"100%",height:"100%"}} />
            </Upper>
            <Lower>
                
                <H style={{color:'#FFFFFF',fontSize:'1.5rem',textAlign:'center'}}>
                            {props.name ? props.name : ""}                          
                </H>
                {/* <Button style={{margin:'0 0 2rem 0',boxShadow:'none',color:'#000',
                 background: 'rgba(249,232,202,1)',border:'2px solid #000'
                 ,fontSize:'1.2rem',padding:'-0.4rem 1rem'}}>
                    {props.button ? props.button : 'Donate Now'} 

                   

                </Button> */}
            </Lower>
            
        </Box>
    )
}

export default Card

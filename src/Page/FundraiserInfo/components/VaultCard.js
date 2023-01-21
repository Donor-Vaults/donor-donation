import React from 'react'
import styled from 'styled-components';
import theme from 'styled-theming';
import Tilt from 'react-parallax-tilt';
import { H, T } from '../../Home/Page2/Page2'
import { Button } from '../../../components/Navbar/Navbar';
import vault from './vault.jpg'

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

  export const bColor = theme("theme", {
    light: "linear-gradient(to right, #36d1dc, #5b86e5)",
    dark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  });  

  const Mobile = styled.div
  `
    display: block;

    @media only screen and (max-width: 510px) {
        display: none;
}

  `

const VaultCard = (props) => {
    const Box= styled.div`
        display: flex;
        width: 40rem; 
       // height: 30rem;  
       background-color: #FFF;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 2rem auto 0 auto;
        justify-self: center;
        padding: 0 0 1rem 0;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        border-radius: 0.75rem;

        @media only screen and (max-width: 768px) {
            width: 98%;
            
            
        }
    `;
    const Upper = styled.div`
        height: 25rem;
        width: 100%;
       // border-radius: 0.75rem 0.75rem 0 0; 
        `;

    const Lower = styled.div`
       
        padding: 0 2rem;


        @media only screen and (max-width: 768px) {
            padding: 0 1rem;
            
        }

    `;

    return (
        <Box>
            {/* <Ts style={{textAlign:"left",
                   margin:"2rem 1rem 1rem 1rem", color:'rgba(2, 169, 92, 1)'
                }}>{`${props.name ? props.name : "Save The Children Fund Save The Children"}`}</Ts> */}
            <Upper>
                <img src={vault} alt="" style={{width:"100%",height:"100%",borderRadius:'0.75rem 0.75rem 0 0'}} />
            </Upper>
          
            <Lower>
              
                <div style={{display:'grid',placeItems:'center',margin:'2rem 0 2.5rem 0'}}>
                    <H style={{color:'#02A95C',fontSize:'1.8rem',margin:'0',textAlign:'center'}}>
                        Auto Compounding $DONOR vaults opening soon              
                    </H>
                   
                </div>
 
            </Lower>
        </Box>
    )
}

export default VaultCard

import React from 'react'
import styled from 'styled-components';
import theme from 'styled-theming';
import Tilt from 'react-parallax-tilt';
import { H, T } from '../../Home/Page2/Page2'
import { Line, Circle } from 'rc-progress';
import { Button } from '../../../components/Navbar/Navbar';
import SwitchSelector from "react-switch-selector";

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


  const options = [
    {
        label: <span style={{color:'#02A95C',display:'flex',alignItems:'center'}}>
            <svg width="37" height="25" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.818 0C32.106 0 36.33 4.306 36.33 10.714V29.106C36.33 35.57 32.236 39.774 25.9 39.814L10.514 39.82C4.226 39.82 0 35.514 0 29.106V10.714C0 4.248 4.094 0.046 10.43 0.008L25.816 0H25.818ZM25.818 3L10.44 3.008C5.784 3.036 3 5.916 3 10.714V29.106C3 33.936 5.81 36.82 10.512 36.82L25.89 36.814C30.546 36.786 33.33 33.902 33.33 29.106V10.714C33.33 5.884 30.522 3 25.818 3ZM25.4322 26.9474C26.2602 26.9474 26.9322 27.6194 26.9322 28.4474C26.9322 29.2754 26.2602 29.9474 25.4322 29.9474H10.9922C10.1642 29.9474 9.4922 29.2754 9.4922 28.4474C9.4922 27.6194 10.1642 26.9474 10.9922 26.9474H25.4322ZM25.4322 18.5744C26.2602 18.5744 26.9322 19.2464 26.9322 20.0744C26.9322 20.9024 26.2602 21.5744 25.4322 21.5744H10.9922C10.1642 21.5744 9.4922 20.9024 9.4922 20.0744C9.4922 19.2464 10.1642 18.5744 10.9922 18.5744H25.4322ZM16.5016 10.2208C17.3296 10.2208 18.0016 10.8928 18.0016 11.7208C18.0016 12.5488 17.3296 13.2208 16.5016 13.2208H10.9916C10.1636 13.2208 9.4916 12.5488 9.4916 11.7208C9.4916 10.8928 10.1636 10.2208 10.9916 10.2208H16.5016Z" fill="#02A95C"/>
            </svg>
            <Mobile style={{fontSize:'1.6rem',margin:'0 0 0 0.5rem'}}>About</Mobile>
            </span>,
        value: {
             foo: true
        },
        selectedBackgroundColor: "rgba(251, 216, 155, 1.00)",
    },
    {
        label: <span style={{color:'#02A95C',display:'flex',alignItems:'center'}}>
        <svg width="40" height="25" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.5122 5.42794C30.2716 5.42794 30.8992 5.99225 30.9985 6.7244L31.0122 6.92794L31.012 30.528L36.6044 24.9131C37.1889 24.3259 38.1386 24.3237 38.7258 24.9082C39.2595 25.4395 39.3099 26.2727 38.8755 26.8609L38.7307 27.0295L30.5751 35.2228C30.5259 35.2711 30.4759 35.3149 30.4231 35.3554L30.5751 35.2228C30.5015 35.2967 30.4222 35.3614 30.3385 35.4168C30.3093 35.4349 30.2789 35.4535 30.2479 35.471C30.2191 35.4884 30.1898 35.5036 30.1601 35.5178C30.1308 35.5308 30.1011 35.5439 30.0709 35.556C30.0325 35.5724 29.9932 35.5863 29.9534 35.5985C29.93 35.6048 29.906 35.6115 29.8817 35.6177C29.8385 35.6295 29.7951 35.6385 29.7514 35.6455C29.731 35.6478 29.7096 35.6508 29.688 35.6533C29.6387 35.6601 29.5899 35.6634 29.541 35.6643C29.5313 35.6634 29.5218 35.6635 29.5122 35.6635L29.483 35.6643C29.4341 35.6634 29.3853 35.6601 29.3367 35.6544L29.5122 35.6635C29.4305 35.6635 29.3503 35.657 29.2721 35.6444C29.2289 35.6385 29.1855 35.6295 29.1425 35.6186C29.1197 35.6118 29.0969 35.6055 29.0743 35.5986C29.0314 35.5866 28.9886 35.5715 28.9465 35.5544C28.9235 35.5438 28.9012 35.5341 28.8793 35.5238C28.8448 35.5091 28.8101 35.4913 28.7761 35.4721C28.7454 35.4534 28.7151 35.4349 28.6856 35.4154C28.6625 35.4015 28.6397 35.3855 28.6174 35.3689L28.6013 35.3554C28.5485 35.3149 28.4985 35.2711 28.4516 35.2242L28.4489 35.2228L20.2933 27.0295C19.7089 26.4423 19.7111 25.4926 20.2982 24.9082C20.832 24.3769 21.6654 24.3304 22.2517 24.7674L22.4196 24.9131L28.012 30.532L28.0122 6.92794C28.0122 6.09952 28.6838 5.42794 29.5122 5.42794ZM9.65533 0.000832587L9.68455 0C9.73343 0.000939102 9.78227 0.00425304 9.83089 0.00994183L9.65533 0.000832587C9.73705 0.000832587 9.81724 0.00736682 9.89541 0.0199413C9.93816 0.0257847 9.98108 0.0346166 10.0236 0.0453386C10.0486 0.0526766 10.0741 0.0598327 10.0993 0.0676359C10.1387 0.0787398 10.1768 0.0922369 10.2145 0.10732C10.2417 0.119433 10.2692 0.131473 10.2963 0.144301C10.3285 0.158228 10.3603 0.174617 10.3915 0.192213C10.4182 0.208674 10.4447 0.22471 10.4706 0.241525C10.4973 0.257383 10.524 0.275942 10.5502 0.295468L10.7187 0.441515L18.8742 8.63485C19.4587 9.22199 19.4565 10.1717 18.8693 10.7562C18.3356 11.2875 17.5021 11.334 16.9159 10.8969L16.748 10.7513L11.154 5.13L11.1553 28.7364C11.1553 29.5648 10.4838 30.2364 9.65533 30.2364C8.89594 30.2364 8.26835 29.6721 8.16903 28.9399L8.15533 28.7364L8.154 5.132L2.56311 10.7513C2.03181 11.285 1.19859 11.3354 0.610366 10.901L0.441794 10.7562C-0.0919687 10.2249 -0.142306 9.39165 0.292045 8.80342L0.436892 8.63485L8.59245 0.441515L8.68077 0.360521C8.70151 0.342777 8.72274 0.32559 8.74444 0.308981L8.59245 0.441515C8.66603 0.367592 8.74539 0.302945 8.82909 0.247576C8.85829 0.229383 8.88865 0.21081 8.91968 0.19331C8.9485 0.175941 8.9778 0.160701 9.00747 0.146493C9.03675 0.133529 9.06647 0.120448 9.09667 0.108322C9.13503 0.0919152 9.17438 0.0780247 9.21414 0.0658233C9.23833 0.059327 9.2631 0.0524021 9.28813 0.0461058C9.32842 0.035038 9.36916 0.0265766 9.41012 0.0198192C9.43475 0.0167381 9.4589 0.0133783 9.48322 0.0106001C9.52952 0.00423893 9.57702 0.0010161 9.62456 3.97414e-05C9.63505 0.000933454 9.64518 0.000832587 9.65533 0.000832587Z" fill="#02A95C"/>
        </svg>
        <Mobile style={{fontSize:'1.6rem',margin:'0 0 0 0.5rem'}}>Update</Mobile>
        </span>
        ,
        value: "bar",
        selectedBackgroundColor: "rgba(251, 216, 155, 1.00)"
    },
    {
        label: <span style={{color:'#02A95C',display:'flex',alignItems:'center'}}>
        <svg width="42" height="25" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.286 0C17.188 0.002 19 0.91 20.136 2.428L21.958 4.852C22.536 5.62 23.454 6.078 24.414 6.08H30.072C37.796 6.08 41.394 10.038 41.394 18.536L41.338 28.47C41.336 36.406 36.404 41.338 28.464 41.338H12.9C4.944 41.338 0 36.404 0 28.464V12.866C0 4.328 3.798 0 11.286 0H15.286ZM15.284 3H11.286C5.478 3 3 5.952 3 12.866V28.464C3 34.832 6.516 38.338 12.9 38.338H28.464C34.832 38.338 38.338 34.832 38.338 28.464V28.458L38.394 18.528C38.394 11.73 36.062 9.08 30.072 9.08H24.412C22.514 9.078 20.702 8.172 19.562 6.656L17.736 4.228C17.162 3.458 16.244 3.002 15.284 3ZM29.4324 24.4256C30.2604 24.4256 30.9324 25.0976 30.9324 25.9256C30.9324 26.7536 30.2604 27.4256 29.4324 27.4256H11.9624C11.1344 27.4256 10.4624 26.7536 10.4624 25.9256C10.4624 25.0976 11.1344 24.4256 11.9624 24.4256H29.4324Z" fill="#02A95C"/>
        </svg>

        <Mobile style={{fontSize:'1.6rem',margin:'0 0 0 0.5rem'}}>Docs</Mobile>
        </span>
        ,
        value: "bar",
        selectedBackgroundColor: "rgba(251, 216, 155, 1.00)"
    },
 ];
 
 const onChange = (newValue) => {
     console.log(newValue);
 };
 
 const initialSelectedIndex = options.findIndex(({value}) => value === "bar");
 

const BigCard = (props) => {
    const Box= styled.div`
        
        width: 40rem;   
       background-color: #FFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 2rem auto 0 auto;
        justify-self: center;
        padding: 0 0 3rem 0;
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

    const StyledLine = styled.div`
    width: 6rem;
    height: 0.2rem;
    margin: 0 0 0 0 !important;
    background: rgba(2, 169, 92, 1);

    @media only screen and (max-width: 510px) {
        width: 99%;
}
`
const Ts = styled(T)`
    font-size: 1rem;
    font-weight: bold;
`
const Hs = styled(H)`
    font-size: 1.5rem;
    font-weight: bold;
`

const ButtonContainer = styled.div`
      display: flex;
        justify-content: center;
        
        justify-content: space-between;
     width: 22rem;
     margin: 0 0 2rem 0;
     @media only screen and (max-width: 768px) {
      width: 98%;
      flex-direction: column;
    }
`
const ButtonR = styled(Button)`
  margin: 0 0 0 1rem;
  box-shadow: none;
  color: rgba(0, 29, 35, 1);
  background: transparent;
  //min-width: 15rem;
  border: 2px solid rgba(176, 163, 144, 1);
  display: flex;
  align-items: center;
  justify-content:  center;
  @media only screen and (max-width: 768px) {
    margin: 1rem 0 0 0;
  }
`
    return (
        <Box>
            {/* <Ts style={{textAlign:"left",
                   margin:"2rem 1rem 1rem 1rem", color:'rgba(2, 169, 92, 1)'
                }}>{`${props.name ? props.name : "Save The Children Fund Save The Children"}`}</Ts> */}
            <Upper>
                <img src={`${props.img ? props.img : "https://archive.org/download/03-05-2016_Images_Images_1-30/01_PT_hero_42_153645159.jpg"}`} alt="" style={{width:"100%",height:"100%",borderRadius:'0.75rem'}} />
            </Upper>
            <SwitchSelector
                onChange={onChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={"#e5e5e5"}
                fontColor={"#02A95C"}
                style={{height:'0.2rem'}}
            />
            <Lower>
              
                <div style={{display:'grid',placeItems:'center',margin:'2rem 0 2.5rem 0'}}>
                    <H style={{color:'#02A95C',fontSize:'1.8rem',margin:'0'}}>
                        About the Fundraiser                 
                    </H>
                    <StyledLine />
                </div>
               
                <T style={{color:'#000000',fontWeight:'400',fontSize:'1.35rem',lineHeight:'1.4'}}>
                    As the country heals, it still feels like we're lagging where hunger still remains an urgency even if the pandemic is not.
                    
                    <div style={{margin:'1.5rem 0'}}>If it was bad, it's becoming even worse.</div>
                    The people have suffered for nearly 2 years now, and very soon, we will reach to point of HUNGER CRISIS; they will die of HUNGER before the virus hits them.
                </T>
 
            </Lower>
        </Box>
    )
}

export default BigCard

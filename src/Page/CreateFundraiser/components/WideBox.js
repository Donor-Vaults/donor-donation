import React from 'react'
import styled from 'styled-components'

const WideBox = (props) => {



  

    const StyledBox = styled.div`
        border-radius: 1rem;
        border: 2px solid rgba(0,0,0,0.2);
        padding: 0.5rem 1.5rem;
        //font-size: 1.75rem;
       
        background:${props.value===props.Title?"#02a95c":"#fff"};
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem 0 0 0;
        // background-color: #FFF;
    `
    const T = styled.p`
        font-size: 1.5rem;
        color: ${props.value === props.Title?"#fff":"rgba(0,0,0,0.7)"};
    `

  return (
    <StyledBox onClick={()=>{props.onClick(props.Title)}}>
        <div>
           <T>{props.Title ? props.Title : 'Animal'}</T> 
            <div style={{margin:'0.75rem 0 0 0',color:props.value !== props.Title?'#9F9F9FCF':"#fff"}}>
            {props.Text ? props.Text : ''}
            </div>
        </div>
        <img src={props.image ? props.image : ''} alt='' style={{width:'2.5rem',height:'2.5rem'}} />
    </StyledBox>
  )
}

export default WideBox
import React from 'react'
import styled from 'styled-components'

const WideBox = (props) => {

    const StyledBox = styled.div`
        border-radius: 1rem;
        border: 2px solid rgba(0,0,0,0.2);
        padding: 2rem 1.5rem;
        //font-size: 1.75rem;
        color: rgba(0,0,0,0.7);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem 0 0 0;
    `
    const T = styled.p`
        font-size: 1.5rem;
        color: #000;
    `

  return (
    <StyledBox>
        <div>
           <T>{props.Title ? props.Title : 'Animal'}</T> 
            <div style={{margin:'0.75rem 0 0 0'}}>
            {props.Text ? props.Text : 'Animal'}
            </div>
        </div>
        <img src={props.image ? props.image : ''} alt='' style={{width:'4rem',height:'4rem'}} />
    </StyledBox>
  )
}

export default WideBox
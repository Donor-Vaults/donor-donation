import React from 'react'
import styled from 'styled-components'

const Tag = ({selectedCategory,onClick,Text}) => {

    const isSelected = selectedCategory ===Text
    const StyledtTag = styled.div`
        border-radius: 2rem;
        border: 2px solid #FFF;
        padding: 1rem 0.5rem;
        font-size: 1.25rem;
        background:${isSelected?"#02a95c":""};
        color: #FFF;
        display: grid;
        place-items: center;
        cursor: pointer;
       // width: 14rem;
    `

  return (
    <StyledtTag onClick={()=>{onClick(Text)}}>
        {Text ? Text : 'Animal'}
    </StyledtTag>
  )
}

export default Tag
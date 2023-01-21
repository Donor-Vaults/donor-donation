import React from 'react'
import styled from 'styled-components'

const Tag = (props) => {

    const StyledtTag = styled.div`
        border-radius: 2rem;
        border: 2px solid #FFF;
        padding: 1rem 1.5rem;
        font-size: 1.25rem;
        color: #FFF;
        display: grid;
        place-items: center;
        width: 14rem;
    `

  return (
    <StyledtTag>
        {props.Text ? props.Text : 'Animal'}
    </StyledtTag>
  )
}

export default Tag
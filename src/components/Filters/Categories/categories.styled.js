import styled from "styled-components"

export const Wrap  = styled.div`

`

export const Button = styled.button`
    background: transparent;
    color: black;
    border: none;
    outline: none;
    cursor: pointer;

    &:focus{
        outline: none;  
    }
    &:hover{
        color: red;
    }   
`

export const Category = styled.p`
    cursor: pointer;
    &:hover{
        color: yellow;
    }
`

export const Item  = styled.li`
    cursor: pointer;
    &:hover{
        color: yellow;
    }
`


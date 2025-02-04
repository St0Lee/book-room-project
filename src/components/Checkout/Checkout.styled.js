import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 200px;
`

export const Text = styled.label`
    display: flex;
    flex-direction: column;
    max-width: 200px;
`

export const CitiesListWrap = styled.div`
    position: relative;
`

export const CitiesList = styled.ul`
    position: absolute; 
    top: 100%;
    left: 0; 
    width: 100%; 
    background: white; 
    border: 1px solid #ccc;
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 150px;
    overflow-y: auto;
`
export const Wrap = styled.form`
`

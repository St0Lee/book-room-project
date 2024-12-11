import styled from 'styled-components';

export const StoreWrap = styled.div`
    display: flex;
    margin-top: 25px;
    gap: 100px;
`

export const Img = styled.img` 
    width: 80vw;
    max-height: 400px;
    overflow: hidden;
`
//overflow не працює. Окремий контейнер і застосувати як бекграунд? 

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


import styled from 'styled-components';
import background from "../../common/images/books-1655783_1920.jpg"

export const StoreWrap = styled.div`
    display: flex;
    margin-top: 25px;
    gap: 100px;
`

export const Background = styled.div`
    width: 80vw;
    height: 400px;
    overflow: hidden;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


import styled from 'styled-components';

export const Title = styled.h2`
    color: black;
`;

export const Count = styled.p`
    color: black;
`;

export const Btn = styled.button`
    background-color: transparent;
    color: ${props => props.theme.colors.text};
    padding: 0;
    width: 42px;
    height: 42px;
    border: none;
    :hover{
        color: red;
    }
    :active{
        color: green;
        border: none;
    }
`

//заповнити серце? Бордер при натисканні



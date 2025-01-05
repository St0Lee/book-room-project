import styled from 'styled-components';

import { GoHeartFill } from "react-icons/go";

export const Title = styled.h2`
    color: black;
`;

export const Count = styled.p`
    color: black;
`;

export const Btn = styled(GoHeartFill)`
    background-color: transparent;
    color: ${props => props.theme.colors.text};
    padding: 0;
    width: 42px;
    height: 42px;
    border: none;
    :hover{
        color: red;
        background-color: red;
    }
    :active{
        color: green;
        border: none;
    }
`



//заповнити серце? Бордер при натисканні



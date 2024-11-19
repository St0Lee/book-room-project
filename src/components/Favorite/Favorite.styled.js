import styled from 'styled-components';

export const Title = styled.h2`
    color: black;
`;

export const Count = styled.p`
    color: black;
`;

export const Btn = styled.button`
    background-color: white;
    color: ${props => props.theme.colors.text};
    padding: 0;
    width: 42px;
    height: 42px;
`



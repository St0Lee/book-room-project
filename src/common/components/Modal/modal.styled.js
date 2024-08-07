import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: ${p => p.theme.colors.backdropBackground};
`;

export const Inner = styled.div`
  position: absolute;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  max-width: 1200px;
  height: 500px;
  background-color: grey;
  overflow-y: auto;
  /* background-color: white; */
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 250ms linear;

  :hover {
    color: red;
  }
`;
import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--intro-background);
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 0.85
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 2
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export const MainContainer = styled.div`
  z-index:1;
  box-sizing:border-box;
  display:flex;
  flex-direction: column;
  flex-grow:1;
  align-items:center;
  justify-content:center;
`

export const MainContainerIcon = styled.div`
  background-image: url("/assets/intro-connection-light.jpg");
  background-repeat: no-repeat;
  order: 1;
  min-width:60vh;
  height: 60vh;
  margin: 0 auto;
`

export const FirstText = styled.h1`
  display:flex;
  order: 2;
  font-size: 32px;
  font-weight: 300;
  color: var(--primary-title);
  text-align:center;
`

export const SecondText = styled.div`
  display:flex;
  order: 3;
  font-size: 14px;
  line-height: 20px;
  color: var(--intro-secondary);
`
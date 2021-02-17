import styled from 'styled-components';

export const Container = styled.div`
  background: url(/assets/chat-background.jpg);
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
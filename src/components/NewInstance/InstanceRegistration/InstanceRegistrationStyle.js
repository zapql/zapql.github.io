import styled from "styled-components";
import Button from '@material-ui/core/Button'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 2;
  max-height: 100vh;
  text-align: center;
`

export const PanelTOC = styled.div`
  display: block;
  flex: 2;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 14vh;

  margin: 5vh;
  max-height: 50vh;

  scrollbar-color: rgba(0,0,0,.2) hsla(0,0%,100%,.1);
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 6px!important;
    height: 6px!important;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.2);
  }

  ::-webkit-scrollbar-track {
    background: hsla(0,0%,100%,.1);
  }
`;

export const IButton = styled(Button)`
    justify-content: flex-end;
    display: flex;
`
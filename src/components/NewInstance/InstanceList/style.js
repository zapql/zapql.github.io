import styled from "styled-components";
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 2;
  max-height: 100vh;
  text-align: center;
`

export const IList = styled(List)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 2;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;

  min-height: 20vh;
`

export const IButton = styled(Button)`
    justify-content: flex-end;
    display: flex;
`
import { Button } from '@material-ui/core'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--rich-text-panel-background);
  display: flex;
  height: 50px;
  border-left: 30px;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  padding-left: 1.5vh;
  padding-right: 1.5vh;
  width: calc(100% - 3vh);
`;

export const ActualInput = styled.input`
  width: calc(100% - 50px);
  border: none;
  border-radius: 999px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 15px;
  outline: none;
  box-shadow: 0 1px silver;
  font-size: 18px;
  line-height: 45px;
`;

export const SendButton = styled(Button)`
  min-width: 50px !important;
  width: 50px !important;
  border-radius: 999px !important;
  background-color: var(--rich-text-panel-background) !important;
  margin: 0 5px !important;
  margin-right: 0 !important;
  color: var(--icon) !important;
  padding-left: 20px !important;
  
  svg {
    margin-left: -3px;
  }
`;
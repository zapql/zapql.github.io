import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

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

export const Loading = styled(Grid)`
  justify-content: center;
  align-content: center;
  margin-top: 30vh;
`
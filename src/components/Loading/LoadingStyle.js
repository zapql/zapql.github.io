import styled, { css } from 'styled-components';
import Grid from '@material-ui/core/Grid'

export const Container = styled(Grid)`
  justify-content: center;
  align-content: center;
  
  ${(props) => 
    props.mt
    ? css`
      margin-top: ${props.mt};
    `
    : css`
      margin-top: 30vh;
    `
  }

  ${(props) => 
    props.mb
    ? css`
      margin-bottom: ${props.mb};
    `
    : css``
  }
`
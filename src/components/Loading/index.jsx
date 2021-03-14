import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

import { Container } from './style'

const Loading = ({mt = 0, mb = 0}) => {
    return (
        <Container mt={mt} mb={mb} container>
          <CircularProgress />
        </Container>
    )
}

export default Loading
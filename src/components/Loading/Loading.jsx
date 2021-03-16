import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

import { Container } from './LoadingStyle'

/**
 * Esse componente exibe um spinner de loading.
 * 
 * Dependendo do local onde o spinner será exibido, 
 * pode ser necessário customizar as margens.
 * Você pode customizar as margens diretamente com um props.
 * 
 * @param {mt, mb} Parâmetros de margin-top e margin-bottom.
 * @returns Container com Spinner "Circular Progress"
 */
const Loading = ({mt = 0, mb = 0}) => {
    return (
        <Container mt={mt} mb={mb} container>
          <CircularProgress />
        </Container>
    )
}

export default Loading
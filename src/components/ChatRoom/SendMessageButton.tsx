import React, {FC} from 'react'
import {Button, Icon, IconButton} from '@material-ui/core'
import svgString  from './SendMessageButton.svg'
import styled from 'styled-components'

/** Exemplo de como passar typado */
// interface ButtonProps {
//     title?: string;
// }
// const CButton: FC<ButtonProps> = ({ title="Botao" }) => {
//     return (
//         <Button variant="contained" color="primary">{title}</Button>
//     )
// }

const SendIcon = styled.span`
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>');
    width: 24px;
    height: 24px;
`

const SendMessageButton: FC<{}> = () => {
    return (
        <IconButton>
            <SendIcon data-testid="send" data-icon="send"></SendIcon>
        </IconButton>
    )
}

export default SendMessageButton

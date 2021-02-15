import React, {FC} from 'react'
import {Button, Icon, IconButton} from '@material-ui/core'
// import styled from 'styled-components'

/** Exemplo de como passar typado */
// interface ButtonProps {
//     title?: string;
// }
// const CButton: FC<ButtonProps> = ({ title="Botao" }) => {
//     return (
//         <Button variant="contained" color="primary">{title}</Button>
//     )
// }

const SendMessageButton: FC<{}> = () => {
    return (
        <IconButton>
            <span data-testid="send" data-icon="send">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path>
                </svg>
            </span>
        </IconButton>
    )
}

export default SendMessageButton

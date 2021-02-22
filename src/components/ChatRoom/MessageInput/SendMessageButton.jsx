import React from 'react'
import {IconButton} from '@material-ui/core'
import { SendIcon } from './SendMessageButtonStyle'

const SendMessageButton = () => {
    return (
        <IconButton>
            <SendIcon data-testid="send" data-icon="send"></SendIcon>
        </IconButton>
    )
}

export default SendMessageButton

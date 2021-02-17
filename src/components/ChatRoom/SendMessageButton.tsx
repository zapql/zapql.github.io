import React, {FC} from 'react'
import {IconButton} from '@material-ui/core'
import { SendIcon } from './SendMessageButtonStyle'

const SendMessageButton: FC<{}> = () => {
    return (
        <IconButton>
            <SendIcon data-testid="send" data-icon="send"></SendIcon>
        </IconButton>
    )
}

export default SendMessageButton

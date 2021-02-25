import React from 'react'
import { gql } from '@apollo/client'
import { Button } from '@material-ui/core'

export const SEND_MESSAGE_MUTATION = gql`
    mutation SendMessage {
        sendtextmessage(input: {
            to: "556596910295-1605021081"
            msg: "Sending from exported store"
    }) {
        wid
        timestamp
        to
        from
        msg
        quote
        forwarded
    }
}
`

export const ShowButtonToSend = (SendMessageMutation, returnData) => {
    return (
        <React.Fragment>
            <Button variant="contained" color="primary" onClick={SendMessageMutation} >Send defined message</Button>
            <p>Returned Data: {returnData ? JSON.stringify(returnData) : "[]"}</p>
        </React.Fragment>
    )
}

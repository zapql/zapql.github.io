import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'

import Loading from '../../components/Loading'
import AlertMessage from '../../components/AlertMessage'

import { useMutation } from '@apollo/client'
import { RECONNECT } from '../../store/Apollo/Connection'

const DoAuth = () => {

    let history = useHistory()

    const [errorState, setErrorState] = useState({open: false, severity: "error", message: ""})

    const [sendReconnect, { loading: reconnectLoading, error: reconnectError, data: reconnectData }] = useMutation(RECONNECT, { onError: () => {} })

    useEffect(() => {
        sendReconnect()
    }, [])

    useEffect(() => {
        if (reconnectLoading) {
            console.log("Reconnect...")
        }
        if (reconnectError) {
            console.log("Reconnect Error...")
            console.log(reconnectError)
            setErrorState(() => {
                return {
                    open: true,
                    severity: "error",
                    message: "Token Inválido"
                }
            })
            setTimeout(() => { history.push("/registration")}, 1000)
        }
        if (reconnectData) {
            if (reconnectData.reconnect === "connected") {
                history.push("/chats")
            }
        }
    }, [reconnectLoading, reconnectError, reconnectData])

    return (
        <React.Fragment>
            <AlertMessage state={errorState} dispatch={setErrorState} />
            <Loading />
        </React.Fragment>
    )
}

export default DoAuth
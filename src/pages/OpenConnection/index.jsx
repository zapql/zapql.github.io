import React, { useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import localForage from 'localforage'

const OpenConnection = () => {
    const { token } = useParams()

    useEffect(() => {
        localForage.setItem('token', token)
    })

    return token ? <Redirect to="/chats" /> : <Redirect to="/" />            
}

export default OpenConnection
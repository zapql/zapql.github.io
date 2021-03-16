import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import localForage from 'localforage'

import Loading from '../../components/Loading'

const OpenConnection = () => {
    const { token } = useParams()
    
    useEffect(() => {
        localForage.setItem('zapql-token', token)
        .then(() => {
            window.location.assign("/auth")
        })
    }, [])

    return (
        <React.Fragment>
            <Loading />
        </React.Fragment>
    )
}

export default OpenConnection
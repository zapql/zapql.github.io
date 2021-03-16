import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import localForage from 'localforage'

import Loading from '../../components/Loading'

const OpenConnection = () => {
    const { token } = useParams()
    
    let history = useHistory()

    useEffect(() => {
        localForage.setItem('zapql-token', token)
        .then(() => {
            history.push("/auth")
        })
    }, [])

    return (
        <React.Fragment>
            <Loading />
        </React.Fragment>
    )
}

export default OpenConnection
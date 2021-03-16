import React from 'react'
import localForage from 'localforage'
import { Redirect } from 'react-router'

const Logout = () => {
    localForage.removeItem('zapql-token')

    return <Redirect to="/" />
}

export default Logout
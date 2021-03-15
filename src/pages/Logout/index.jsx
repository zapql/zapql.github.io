import React from 'react'
import localForage from 'localforage'
import { Redirect } from 'react-router'

const Logout = () => {
    localForage.setItem('zapql-token', null)

    return <Redirect to="/" />
}

export default Logout
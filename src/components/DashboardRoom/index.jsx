import React from 'react'
import { Container, MainContainer, MainContainerIcon, FirstText, SecondText } from './style'

import { useQuery, gql, useSubscription } from '@apollo/client'

const QUERY_HELLO = gql`
    query HelloWorld {
        hello
    }
`
function GetHelloWorld() {
    const { loading, error, data } = useQuery(QUERY_HELLO)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return <p>{data.hello}</p>
}

const DATENOW_SUBSCRIPTION = gql`
    subscription DateNow {
        datenow
    }
`
function GetDateNow() {
    const { data, loading } = useSubscription( DATENOW_SUBSCRIPTION )

    console.log(data)
    return <h4>New DateNow(): {!loading && data.datenow}</h4>
}

const DashboardRoom = ({}) => {
    return (
        <Container data-testid="DashboardContainer">
            <MainContainer>
                {/* <MainContainerIcon />
                <FirstText>Keep your phone connected</FirstText>
                <SecondText>WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</SecondText> */}
                
                {/* {GetHelloWorld()} */}

                {GetDateNow()}
            </MainContainer>
        </Container>
    )
}

export default DashboardRoom
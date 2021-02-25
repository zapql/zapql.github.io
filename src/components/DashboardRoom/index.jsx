import React from 'react'
import { Container, MainContainer, MainContainerIcon, FirstText, SecondText } from './style'

// Apollo (Temp)
import { useMutation } from '@apollo/client'
// Temp
import { GetHelloWorld } from '../../store/Apollo/TestesIniciais/HelloWorld'
import { GetDateNow } from '../../store/Apollo/TestesIniciais/DateNow'
import { ShowButtonToSend, SEND_MESSAGE_MUTATION } from '../../store/Apollo/TestesIniciais/SendMessage'

const DashboardRoom = ({}) => {
    const [SendMessageMutation, { data: returnData }] = useMutation(SEND_MESSAGE_MUTATION)

    return (
        <Container data-testid="DashboardContainer">
            <MainContainer>
                <MainContainerIcon />
                <FirstText>Keep your phone connected</FirstText>
                <SecondText>WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</SecondText>
            </MainContainer>
        </Container>
    )
}

// const DashboardRoom = ({}) => {
//     const [SendMessageMutation, { data: returnData }] = useMutation(SEND_MESSAGE_MUTATION)

//     return (
//         <Container data-testid="DashboardContainer">
//             <MainContainer>
//                 {/* {GetHelloWorld()} */}

//                 {/* {GetDateNow()} */}

//                 {ShowButtonToSend(SendMessageMutation, returnData)}
//             </MainContainer>
//         </Container>
//     )
// }

export default DashboardRoom
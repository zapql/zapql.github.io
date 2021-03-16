import React from 'react'
import { Container, MainContainer, MainContainerIcon, FirstText, SecondText } from './DashboardRoomStyle'

/**
 * Esse componente exibe a sala inicial do Dashboard.
 * Como não há nenhum contato selecionado, ele exibe a mesma mensagem do WhatsApp Web.
 * 
 * @returns Sala "Keep your phone connected"
 */
const DashboardRoom = () => {

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

export default DashboardRoom
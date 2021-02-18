import React, {FC} from 'react'
import { Container, MainContainer, MainContainerIcon, FirstText, SecondText } from './style'

const DashboardRoom: React.FC<any> = ({}) => {
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
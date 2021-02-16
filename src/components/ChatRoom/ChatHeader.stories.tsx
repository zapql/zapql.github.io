import React from 'react'
import ChatHeader from './ChatHeader'

export default {
    title: "Sala de Chat",
    component: ChatHeader
}

export const BasicHeader = () => (
    <ChatHeader chat={{
        name: "Gestor Messenger", 
        picture: "https://pps.whatsapp.net/v/t61.24694-24/117036473_2365875330373214_257848635505988776_n.jpg?oh=c346075f745273bd3e6cec4a448119ed&oe=6030EAE2"}}></ChatHeader>
)

BasicHeader.storyName = "Cabeçalho"

// export const ReceivedProps = () => (
//     <SendMessageButton title="Titulo do Recebido"></SendMessageButton>
// )

import React from 'react'
import ChatHeader from './ChatHeader'

export default {
    title: "Componentes",
    component: ChatHeader
}

export const BasicHeader = () => (
    <ChatHeader chatHeaderData={{
        name: "Gestor Messenger", 
        avatar: "https://app.gestormessenger.com/assets/img/logo.png"}}></ChatHeader>
)

BasicHeader.storyName = "Cabeçalho"

// export const ReceivedProps = () => (
//     <SendMessageButton title="Titulo do Recebido"></SendMessageButton>
// )

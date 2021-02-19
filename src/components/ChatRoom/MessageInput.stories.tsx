import React from 'react'
import MessageInput from './MessageInput'

export default {
    title: "Componentes",
    component: MessageInput
}

export const BasicMessageInput = () => (
    <MessageInput onSendMessage={() => true} />
)

BasicMessageInput.storyName = "Campo de Texto"
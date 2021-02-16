import React from 'react'
import MessageInput from './MessageInput'

export default {
    title: "Sala de Chat",
    component: MessageInput
}

export const BasicMessageInput = () => (
    <MessageInput onSendMessage={() => true} />
)

BasicMessageInput.storyName = "Campo de Texto"
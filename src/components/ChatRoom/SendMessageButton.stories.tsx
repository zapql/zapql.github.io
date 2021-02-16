import React from 'react'
import SendMessageButton from './SendMessageButton'

export default {
    title: "Send Message Button",
    component: SendMessageButton
}

export const BotaoEnviar = () => (
    <SendMessageButton></SendMessageButton>
)

BotaoEnviar.storyName = "Botao Enviar"

// export const ReceivedProps = () => (
//     <SendMessageButton title="Titulo do Recebido"></SendMessageButton>
// )

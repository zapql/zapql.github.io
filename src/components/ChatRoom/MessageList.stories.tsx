import React from 'react'
import MessageList from './MessageList'

const mlData = [
    {
      "type": "textMessage",
      "timestamp": "1613415699",
      "to": "554498455712",
      "from": "556596910295",
      "msg": "Qual a boa?",
      "wid": "EAF75BB00E5CB33C405B80DAC79D015D"
    },
    {
      "type": "textMessage",
      "timestamp": "1613415699",
      "to": "556596910295",
      "from": "554498455712",
      "msg": "Paçoca",
      "wid": "EAF75BB00E5CB33C405B80DAC79D015E"
    },
    {
      "type": "textMessage",
      "timestamp": Math.floor(Date.now() / 1000),
      "wid": Math.random(),
      "isMine": true,
      "msg": "Positivo"
    }
  ]

export default {
    title: "Componentes",
    component: MessageList
}

export const BasicMessageList = () => (
    <MessageList messageListData={mlData} />
)

BasicMessageList.storyName = "Histórico de Mensagens"
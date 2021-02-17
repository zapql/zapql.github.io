import React from 'react'
import ChatList from './ChatList'
import { chats } from './FakeDatabase'

export default {
    title: "Componentes Gerais",
    component: ChatList
}

export const BasicChatList = () => (
    <ChatList chatListData={chats}></ChatList>
)

BasicChatList.storyName = "Lista de Contatos"
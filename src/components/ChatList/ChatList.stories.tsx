import React from 'react'
import ChatList from './ChatList'
import { chats } from './FakeDatabase'

export default {
    title: "Lista Contatos",
    component: ChatList
}

export const ListaContatos = () => (
    <ChatList data={chats}></ChatList>
)

import React from 'react'
import { ChatListStorybook } from './index'

import datazero from '../../store/datazero'

export default {
    title: "Componentes",
    component: ChatListStorybook
}

export const BasicChatList = () => (
    <ChatListStorybook chatListData={datazero}></ChatListStorybook>
)

BasicChatList.storyName = "Lista de Contatos"
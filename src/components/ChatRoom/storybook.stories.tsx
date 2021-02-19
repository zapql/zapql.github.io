import React from 'react'
import { BasicCallService } from '../../pages/CallService/storybook.stories'
import datazero from '../../store/datazero'
import ChatRoom from './index'

export default {
    title: "Sala de Chat",
    component: ChatRoom
}

export const BasicChatRoom = () => (
    <ChatRoom chatListData={datazero} chatId={"554498455712"} />
)

BasicCallService.storyName = "ChatRoom"
import React from 'react'
import {CallServiceStories} from './index'
import { chats } from '../../components/ChatList/FakeDatabase'

export default {
    title: "Telas",
    component: CallServiceStories
}

export const BasicCallServiceStories = () => (
    <CallServiceStories 
    chatListData={chats}
    chatHeaderData={{
        name: "Gestor Messenger", 
        picture: "https://pps.whatsapp.net/v/t61.24694-24/117036473_2365875330373214_257848635505988776_n.jpg?oh=c346075f745273bd3e6cec4a448119ed&oe=6030EAE2"}}
    messageListData={[]}></CallServiceStories>
)

BasicCallServiceStories.storyName = "CallService"
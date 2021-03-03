import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ChatList from '../../components/ChatList'
import ChatRoom from '../../components/ChatRoom'
import DashboardRoom from '../../components/DashboardRoom'
import { Row, Side, Main } from './style'

import { useQuery } from '@apollo/client'
import { ALL_CHATS_QUERY } from '../../store/Apollo/ChatList'

/**
 * TODO: useEffect com Promise.
 * Se retornar query valida no banco, renderiza os componentes.
 * Senao, useHistory().push("/chats"), nao deve poder acessar numero invalido.
 */
const Dashboard = ({ state, dispatch }) => {

  const [ chatListState, setChatList ] = useState([])
  const { loading: queryLoading, error: queryError, data: queryData } = useQuery( ALL_CHATS_QUERY )
  
  useEffect(() => {
    if (queryLoading) {
      return console.log("Loading chatlist...")
    }
    if (queryError) {
      return console.error("Error chatlist...")
    }
    if (queryData) {
      return setChatList((previousState) => {
        return [...queryData.allchats]
      })
    }
  }, [queryLoading, queryError, queryData])

  const { chatId } = useParams()
  
  // Parse datazero
  const contactList = Object.entries(state.contacts)
  const messageList = Object.entries(state.chats)

  let chatData = contactList.map((item, i) => Object.assign(
    {}, 
    {id: item[0]}, 
    {info: item[1]}, 
    {messages: messageList[i][1]}
  ))
  
  let chatDataById = chatData.find((chat) => chat.id === chatId)

  return (
    <Row>
      <Side id="Side" data-testid="Side">
          <ChatList chatListData={chatListState} />
      </Side>
      <Main data-testid="Main">
          {
            chatId
            ? <ChatRoom chatRoomData={chatDataById} dispatch={dispatch} />
            : <DashboardRoom />
          }
      </Main>
    </Row>
  )
}

export default Dashboard
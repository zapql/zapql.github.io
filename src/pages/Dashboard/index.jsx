import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import ChatList from '../../components/ChatList'
import ChatRoom from '../../components/ChatRoom'
import DashboardRoom from '../../components/DashboardRoom'
import { Row, Side, Main} from './style'
import Loading from '../../components/Loading'

import { useQuery } from '@apollo/client'
import { ALL_CHATS_QUERY } from '../../store/Apollo/ChatList'

import localForage from 'localforage'

/**
 * TODO: useEffect com Promise.
 * Se retornar query valida no banco, renderiza os componentes.
 * Senao, useHistory().push("/chats"), nao deve poder acessar numero invalido.
 */
const Dashboard = ({ state, dispatch }) => {

  let history = useHistory()

  useEffect(() => {
    localForage.getItem('zapql-token').then(function(result) {
      if (result === null) return history.push("/registration")
      else return dispatch((previousState) => {
        return {...previousState, auth: true}
      })
    })
  })

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

  // TODO: recuperar de queries
  // TODO: validar estrutura final
  useEffect(() => {
    let newMessages = {}
    let newContacts = {}

    chatListState.map((item, i) => {
      Object.assign(newMessages, {[item]: {id: item, 
            info: [], 
            messages: []
          }})
      Object.assign(newContacts, {[item]: []})
    })

    return dispatch((previousState) => {
      return {
        ...previousState,
        chats: newMessages,
        contacts: newContacts
      }
    })
  }, [chatListState])

  return (
    <React.Fragment>
      {
        state.auth
        ?
        <Row>
          <Side id="Side" data-testid="Side">
              <ChatList chatListData={chatListState} />
          </Side>
          <Main data-testid="Main">
              {
                chatId
                ? <ChatRoom chatRoomData={state.chats ? state.chats[chatId] : []} dispatch={dispatch} />
                : <DashboardRoom />
              }
          </Main>
        </Row>
        : <Loading />
      }
    </React.Fragment>
  )
}

export default Dashboard
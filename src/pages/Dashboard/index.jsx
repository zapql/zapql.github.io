import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import ChatList from '../../components/ChatList'
import ChatRoom from '../../components/ChatRoom'
import DashboardRoom from '../../components/DashboardRoom'
import { Row, Side, Main} from './style'
import Loading from '../../components/Loading'

import { useQuery } from '@apollo/client'
import { ALL_CHATS_QUERY } from '../../store/Apollo/ChatList'
import { CONNECTION_STATE } from '../../store/Apollo/Connection'

import AlertMessage from '../../components/AlertMessage'

import localForage from 'localforage'
import Fuse from 'fuse.js'

const Dashboard = ({ state, dispatch }) => {

  let history = useHistory()

  // SearchBar
  const [searchState, setSearchState] = useState([])
  const [searchBarState, setSearchBarState] = useState("")

  const [errorState, setErrorState] = useState({open: false, severity: "error", message: ""})

  const { loading: connectionLoading, error: connectionError, data: connectionData} = useQuery( CONNECTION_STATE )

  useEffect(() => {
    localForage.getItem('zapql-token').then(function(result) {
      if (result === null) return history.push("/registration")
      else return dispatch((previousState) => {
        return {...previousState, auth: true}
      })
    })
    
    if (connectionLoading) {
      console.log("Loading Connection...")
    }
    if (connectionError) {
      console.log("Connection Error...")
      if (connectionError.message === "do auth") {
        setErrorState(() => {
          return {
            open: true,
            severity: "warning",
            message: "Token Não Autenticado..."
          }
        })
        setTimeout(function(){ history.push("/registration") }, 1000);
      }
    }
    if (connectionData) {
      if (connectionData.connectionstate === "trashed") {
        setErrorState(() => {
          return {
            open: true,
            severity: "warning",
            message: "Sessão Expirada..."
          }
        })
        setTimeout(function(){ history.push("/registration") }, 1000);
      }
    }
  }, [connectionLoading, connectionError, connectionData])

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

  useEffect(() => {
    // New Fuse for SearchBar
    // TODO: corrigir estrutura final (esta sem metadados)
    const searchOptions = {
      // keys: []
      includeScore: true,
      threshold: 0.3
    }

    const fuse = new Fuse(chatListState, searchOptions)
    setSearchState(() => Array.from(fuse.search(searchBarState), x => x.item))

    // Debug
    // console.log("BAR STATE: ", searchBarState)
    // console.log("SEARCH: ", Array.from(fuse.search(searchBarState), x => x.item))
  }, [setSearchState, searchBarState, chatListState])

  return (
    <React.Fragment>
      <AlertMessage state={errorState} dispatch={setErrorState} />
      {
        state.auth
        ?
        <Row>
          <Side id="Side" data-testid="Side">
              <ChatList chatList={chatListState} search={searchState} state={searchBarState} dispatch={setSearchBarState} />
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
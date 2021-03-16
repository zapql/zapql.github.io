import React from 'react'
import moment from 'moment'

import ListItem from '@material-ui/core/ListItem'
import { DivToolbar, ChatPicture, ChatInfo, ChatName, MessageContent, MessageDate, ContactList, Search, Container } from './ChatListStyle'
import { Link } from 'react-router-dom';

// TODO: Recuperar estrutura final de chat
const ChatList = ({ chatList, search, state, dispatch }) => {
    
    let chatListData = !search.length ? chatList : search

    return(
        <Container data-testid="Container">
            <DivToolbar />
            <Search state={state} dispatch={dispatch} />
            <ContactList data-testid="ContactList">
                {chatListData.map((contact) => (
                    <ListItem
                        key={contact}
                        data-testid="chat"
                        button
                        component={Link}
                        to={`/chats/${contact}`}
                        >
                        <ChatPicture
                        data-testid="picture"
                        src=""
                        alt="Profile"
                        />
                        <ChatInfo>
                        <ChatName data-testid="name">{contact}</ChatName>
                        
                            <React.Fragment>
                            <MessageContent data-testid="content">
                                ""
                            </MessageContent>
                            <MessageDate data-testid="date">
                                ""
                            </MessageDate>
                            </React.Fragment>
                        
                        </ChatInfo>
                    </ListItem>
                ))}
            </ContactList>
        </Container>
    )
}

// ESTRUTURA ANTIGA PARA EXEMPLO NA HORA DE CORRIGIR METADADOS
// {/* <List>
//     {chatListData.map((contact) => (
//     <ListItem
//         key={contact.id}
//         data-testid="chat"
//         button
//         component={Link}
//         to={`/chats/${contact.id}`}
//         >
//         <ChatPicture
//         data-testid="picture"
//         src={contact.info.avatar}
//         alt="Profile"
//         />
//         <ChatInfo>
//         <ChatName data-testid="name">{contact.info.name}</ChatName>
//         {contact.messages && (
//             <React.Fragment>
//             <MessageContent data-testid="content">
//                 {contact.messages[0].msg}
//             </MessageContent>
//             <MessageDate data-testid="date">
//                 {moment.unix(contact.messages[0].timestamp).format('HH:mm')}
//             </MessageDate>
//             </React.Fragment>
//         )}
//         </ChatInfo>
//     </ListItem>
//     ))}
// </List> */}

export default ChatList
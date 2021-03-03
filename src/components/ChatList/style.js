import styled from "styled-components";
import List from '@material-ui/core/List';

// TODO: Detectar resize da janela, e ocultar "Side" (ChatList)
export const Container = styled.div`
  position: relative;
  display: block;
  flex: 2;
  max-height: 100vh;
  
  @media (max-width: 30em) {
    #Side {
      visibility: collapse;
    }
  }
`

export const ContactList = styled(List)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 2;
  max-height: 87vh;
  
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-color: rgba(0,0,0,.2) hsla(0,0%,100%,.1);
  scrollbar-width: thin;
`

export const DivToolbar = styled.div`
    height: 10vh;
`

export const ChatPicture = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ChatInfo = styled.div`
  width: calc(100% - 60px);
  height: 46px;
  padding: 15px 0;
  margin-left: 10px;
  border-bottom: 0.5px solid silver;
  position: relative;
`;

export const ChatName = styled.div`
  margin-top: 5px;
`;

export const MessageContent = styled.div`
  color: gray;
  font-size: 15px;
  margin-top: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const MessageDate = styled.div`
  position: absolute;
  color: gray;
  top: 20px;
  right: 0;
  font-size: 13px;
`;
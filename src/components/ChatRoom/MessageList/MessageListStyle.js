import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: block;
  flex: 2;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 14vh;

  scrollbar-color: rgba(0,0,0,.2) hsla(0,0%,100%,.1);
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 6px!important;
    height: 6px!important;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.2);
  }

  ::-webkit-scrollbar-track {
    background: hsla(0,0%,100%,.1);
  }
}
`;

export const MessageItem = styled.div`
display: inline-block;
position: relative;
max-width: 100%;
border-radius: 7px;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
margin-top: 10px;
margin-bottom: 10px;
clear: both;

&::after {
  content: '';
  display: table;
  clear: both;
}

&::before {
  content: '';
  position: absolute;
  bottom: 3px;
  width: 12px;
  height: 19px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
}

${(props) =>
  props.isMine
    ? css`
        float: right;
        background-color: #dcf8c6;

        &::before {
          right: -11px;
          background-image: url(/assets/message-mine.png);
        }
      `
    : css`
        float: left;
        background-color: #fff;

        &::before {
          left: -11px;
          background-image: url(/assets/message-other.png);
        }
      `}
`;

export const Contents = styled.div`
  padding: 5px 7px;
  word-wrap: break-word;
  max-width: 80vh;

  &::after {
    content: ' \\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0';
    display: inline;
  }

  ${(props) =>
    props.isError
    ? css`
        font-style: italic;
        color: gray;    
    `
    : css``}
`;

export const Timestamp = styled.div`
  position: absolute;
  bottom: 2px;
  right: 7px;
  color: gray;
  font-size: 12px;
`;
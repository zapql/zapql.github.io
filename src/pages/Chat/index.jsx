import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';

import ChatList from '../../components/ChatList';
import ChatRoom from '../../components/ChatRoom';
import ChatNoChoice from '../../components/ChatNoChoice';

const Chats = () => {
  const { id } = useParams();
  return (
    <Grid container>
      <Grid item xs={3}>
        <ChatList />
      </Grid>
      <Grid item xs={9}>
        {
          id ? <ChatRoom number={id} /> : <ChatNoChoice />
        }
      </Grid>
    </Grid>
  );
};

export default Chats;

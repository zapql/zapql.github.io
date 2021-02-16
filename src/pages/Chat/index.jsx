import React from 'react';
import Grid from '@material-ui/core/Grid';

import ChatList from '../../components/ChatList';
import ChatRoom from '../../components/ChatRoom';

const Chats = () => (
  <Grid container>
    <Grid item xs={3}>
      <ChatList />
    </Grid>
    <Grid item xs={9}>
      <ChatRoom />
    </Grid>
  </Grid>
);

export default Chats;

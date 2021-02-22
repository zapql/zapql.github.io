import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Redirect,
  RouteComponentProps,
  Switch
} from 'react-router-dom';

// Duas iteracoes com os mesmos componentes
import Dashboard from './pages/Dashboard';
import CallService from './pages/CallService';

const redirectToDashboard = () => <Redirect to="/chats" />;

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/chats" component={Dashboard} />
      <Route exact path="/chats/:chatId" 
        component={({ match }: RouteComponentProps<{ chatId: string }>) => (
          <CallService chatId={match.params.chatId} />
        )} />
    </Switch>
    <Route exact path="/" render={redirectToDashboard} />
  </BrowserRouter>
)

export default App;

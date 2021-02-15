import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Redirect,
  RouteComponentProps,
  Switch
} from 'react-router-dom';

// Duas iteracoes com os mesmos componentes
import Dashboard from './components/Dashboard';
import CallService from './components/CallService';

const redirectToDashboard = () => <Redirect to="/chats" />;

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/chats" component={Dashboard} />
      <Route exact path="/chats/:chatId" 
        component={({ match, history }: RouteComponentProps<{ chatId: string }>) => (
          <CallService chatId={match.params.chatId} history={history} />
        )} />
    </Switch>
    <Route exact path="/" render={redirectToDashboard} />
  </BrowserRouter>
)

export default App;

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
//yarn add react-router-doom
//yarn add @types/react-router-dom -D

import { AuthContextProvider } from './contexts/AuthContext';
import { Room } from './pages/Room';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}


export default App;

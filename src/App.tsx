import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { BrowserRouter, Route } from 'react-router-dom'
//yarn add react-router-doom
//yarn add @types/react-router-dom -D

import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact={true} component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}


export default App;

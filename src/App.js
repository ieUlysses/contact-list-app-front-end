import './App.css';
import Auth from './pages/Auth';
import Contacts from './pages/Contacts';
import GetContact from './pages/GetContact';

import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/contacts">
        <Contacts />
      </Route>
      <Route path="/get-contact">
        <GetContact />
      </Route>
      <Route path="/">
        <Auth />
      </Route>
    </Switch>
  );
}

export default App;
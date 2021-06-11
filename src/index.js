
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './index.css';

import { List } from './components/pages/Lista/List';
import { Vist_shiny } from './components/pages/Lista_shiny/Vist_shiny';
import { Form } from './components/molecule/formulari/Form';


import { Pokedex } from './components/pages/PokeList/Pokedex';
import { Vist } from './components/pages/Vist/Vist';
import { LenSenas } from './components/LenSenas/LenSenas';


ReactDOM.render(

  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/poke"><Pokedex /></Route>
        <Route exact path="/len"><LenSenas /> </Route>
        <Route exact path="/list"><List /></Route>
        <Route exact path="/list/:id"> <Vist_shiny />  </Route>
        <Route exact path="/vist"><Vist /></Route>

        <Route exact path="/for"><Form /></Route>
        <Redirect to="/len"><LenSenas /></Redirect>
      </Switch>
    </Router>

  </Provider>,
  document.getElementById('root')
);



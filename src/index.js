import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter, 
  Switch, 
  Route 
} from 'react-router-dom';

import './index.css';

import Home from './views/Home';
import CadastroVideo from './views/cadastro/Video';
import CadastroCategoria from './views/cadastro/Categoria';
import Page404 from './views/Page404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);



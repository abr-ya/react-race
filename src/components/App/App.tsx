import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Nav from '../Nav/Nav';
import About from '../../pages/About';
import Main from '../../pages/Main';
import Alert from '../Alert/Alert';

export interface ILink {
  link: string;
  name: string;
  exact: boolean;
}

const App = ({alert, showAlert, hideAlert}: any) => {
  const links: ILink[] = [
    { link: '/', name: 'Главная', exact: true },
    { link: '/about', name: 'О приложении', exact: true },
  ];

  const btnClickHandler = () => {
    showAlert('Проверка связи!');
  };

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="col-12">
          <Nav title="React, TS, Bootstrap..." links={links} />
        </div>
      </div>
      <div className="container">
        <div className="col-12">
          {/* eslint-disable-next-line react/button-has-type */}
          <button className="btn btn-success" onClick={btnClickHandler}>
            Тест Алерта-Ридакса
          </button>
          { alert.display ? <Alert alert={alert} hideAlert={hideAlert} /> : null }
        </div>
      </div>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

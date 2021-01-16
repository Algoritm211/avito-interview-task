import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import classes from './App.module.css';
import ImageScreen from "./components/ImageScreen/ImageScreen";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className={classes.mainHeader}>Test app</h1>
      </header>
      <section>
        <Switch>
          <Route
            path={'/images/:id?'}
            render={() => <ImageScreen />}/>
          <Redirect from={'/'} to={'/images/'}/>
        </Switch>
      </section>
    </div>
  );
}

export default App;

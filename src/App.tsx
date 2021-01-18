import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import classes from './App.module.css';
import ImageScreen from "./components/ImageScreen/ImageScreen";

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
      <div className={classes.footer}>
        @ 2019 - 2020
      </div>
    </div>
  );
}

export default App;

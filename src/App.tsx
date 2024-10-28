import React from 'react';
import { Pages } from './views/pages';
import "./App.css";

export const App = () => {
  return (
    <>
      <header>
        <link rel="stylesheet" href="./App.css"/>
      </header>
      <div>
        <Pages />
      </div>
    </>
  );
}
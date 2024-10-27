import React from 'react';
import { Pages } from './views/pages';
import "./App.css"

export const App = () => {
  return (
    <>
      <head>
        <link href="./App.css" rel="stylesheet"/>
      </head>
      <div>
        <Pages />
      </div>
    </>
  );
}
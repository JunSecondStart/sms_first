import React from 'react';
import { Pages } from './views/pages';
import { SmsFieldContextProvider } from "./context";

export const App:React.FC = () => {
  return (
    <>
      <header>
        <link rel="stylesheet" href="./App.css"/>
      </header>
      <div>
        <SmsFieldContextProvider>
          <Pages/>
        </SmsFieldContextProvider>
      </div>
    </>
  );
}
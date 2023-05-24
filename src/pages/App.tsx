import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './style.module.scss';
import Cronometer from '../components/Cronometer';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form/>
      <List/>
      <Cronometer/>
    </div>
  );
}

export default App;

import React, { Fragment } from 'react';
import './App.css';
import ContactItem from "./Components/ContactItem/ContactItem";

function App() {
  return (
    <Fragment>
      <ContactItem></ContactItem>
      <ContactItem></ContactItem>
      <ContactItem></ContactItem>
      <ContactItem></ContactItem>
    </Fragment>
  );
}

export default App;

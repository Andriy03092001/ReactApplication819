import React, { Fragment } from 'react';
import './App.css';
import ContactItem from "./Components/ContactItem/ContactItem";

function App() {
  return (
    <Fragment>
      <div className="card-deck">

        <ContactItem></ContactItem>
        <ContactItem></ContactItem>
        <ContactItem></ContactItem>
        <ContactItem></ContactItem>
        <ContactItem></ContactItem>
        <ContactItem></ContactItem>
        <ContactItem></ContactItem>

      </div>
    </Fragment>
  );
}

export default App;

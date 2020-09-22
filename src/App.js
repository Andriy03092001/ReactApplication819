import React, { Component, Fragment } from 'react';
import './App.css';
import ContactList from './Components/ContactList/ContactList';

class App extends Component {

  state = {
    List: [
      {
        name: "Andrii Riabii",
        phone: "+380 (05) 41 66 765",
        email: "cuanid236316@gmail.com",
        address: "Soborna 16",
        gender: "men",
        avatar: 3,
        isFavarite: true
      },
      {
        name: "Kate Yaroshik",
        phone: "+380 (05) 23 11 885",
        email: "kate@gmail.com",
        address: "Soborna 35",
        gender: "women",
        avatar: 6,
        isFavarite: false
      },
      {
        name: "Vlad Lemonov",
        phone: "+380 (15) 11 11 222",
        email: "vlad@gmail.com",
        address: "Soborna 35",
        gender: "men",
        avatar: 1,
        isFavarite: false
      }
    ]
  }

  render() {
    return (
      <Fragment>
        <ContactList DataContact={this.state.List}></ContactList>
      </Fragment >
    );
  }

}

export default App;

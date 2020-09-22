import React, { Component, Fragment } from 'react';
import './App.css';
import ContactList from './Components/ContactList/ContactList';

class App extends Component {


  state = {
    List: [
      {
        id: 1,
        name: "Andrii Riabii",
        phone: "+380 (05) 41 66 765",
        email: "cuanid236316@gmail.com",
        address: "Soborna 16",
        gender: "men",
        avatar: 3,
        isFavarite: false
      },
      {
        id: 2,
        name: "Kate Yaroshik",
        phone: "+380 (05) 23 11 885",
        email: "kate@gmail.com",
        address: "Soborna 35",
        gender: "women",
        avatar: 6,
        isFavarite: false
      },
      {
        id: 3,
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

  changeFavorite = id => {
    const index = this.state.List.findIndex(t => t.id === id);
    let tempList = this.state.List.slice();
    tempList[index].isFavarite = !tempList[index].isFavarite;
    this.setState({
      List: tempList
    });


    console.log(this.state.List);
  }

  render() {
    return (
      <Fragment>
        <ContactList
          DataContact={this.state.List}
          changeFavorite={this.changeFavorite.bind(this)}></ContactList>
      </Fragment >
    );
  }

}

export default App;

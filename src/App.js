import React, { Component, Fragment } from 'react';
import './App.css';
import ContactList from './Components/ContactList/ContactList';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import uuid from "react-uuid";

import Page404 from "./Components/Page404/Page404";
import AddContact from "./Components/AddContact/AddContact";
import EditContact from './Components/EditContact/EditContact';

class App extends Component {

  state = {
    List: [],
    currentContact: null
  }

  URL = "https://contactbook-9f583.firebaseio.com/list.json";

  getContacts = () => {
    fetch(this.URL, { method: "GET" })
      .then(data => {
        return data.json();
      })
      .then(contacts => {
        console.log("My contacts from firebase: ", contacts)
        this.setState({
          List: contacts
        })
      })
      .catch(error => {
        console.log("Error: ", error)
      })
  }

  componentDidMount() {
    this.getContacts();
  }

  saveChanges(ListData) {
    fetch(this.URL, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ListData)
    }).then(data => {
      console.log(data)
    })
      .catch(error => {
        console.log(error)
      })


    console.log("save changes");
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
  addContact = (name, address, phone, email, avatar) => {

    const newContact = {
      id: uuid(),
      name: name,
      phone: phone,
      email: email,
      address: address,
      gender: "men",
      avatar: avatar,
      isFavorite: false
    };
    console.log("NEW CONTACT ->", newContact);
    let tempList = [];
    if (this.state.List != null) {
      tempList = this.state.List.slice();
    }

    tempList.push(newContact);
    this.saveChanges(tempList);

    this.setState(state => {
      return {
        List: tempList
      };
    });
  }

  removeContact = (id) => {
    const indexRemoveElement = this.state.List.findIndex(item => item.id === id);
    this.state.List.splice(indexRemoveElement, 1);

    this.saveChanges(this.state.List);
    this.setState(
      {
        isCheck: true
      }
    )

  }

  editContact = (id) => {
    const index = this.state.List.findIndex(item => item.id === id);
    const currentContact = this.state.List[index];

    this.setState({
      currentContact: currentContact
    })
  }

  saveEditedContact = (name, address, phone, email, avatar, gender, isFavarite, id) => {

    const editedContact = {
      id: id,
      name: name,
      phone: phone,
      email: email,
      address: address,
      gender: gender,
      avatar: avatar,
      isFavarite: isFavarite
    }

    const contacts = this.state.List.map((c) => {
      if (c.id === id) {
        return editedContact;
      }
      return c;
    });
    this.setState({ List: contacts });
  }

  render() {

    return (
      <Fragment>
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-10">
              <Link className="navbar-brand" to="/">Contact book</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-item nav-link active" to="/">Contact list</Link>
                  <Link className="nav-item nav-link" to="/favoriteContact">Favorite contact</Link>
                  <Link className="nav-item nav-link" to="/addContact">Add contact</Link>
                </div>
              </div>
            </nav>

            <Switch>
              <Route
                path="/"
                exact
                render={() => <ContactList
                  DataContact={this.state.List}
                  changeFavorite={this.changeFavorite.bind(this)}
                  removeContact={this.removeContact.bind(this)}
                  editContact={this.editContact.bind(this)}></ContactList>
                }></Route>

              <Route
                path="/favoriteContact"
                exact
                render={() => <ContactList
                  DataContact={this.state.List}
                  changeFavorite={this.changeFavorite.bind(this)}></ContactList>
                }></Route>

              <Route
                path="/addContact"
                exact
                render={() =>
                  <AddContact addContact={this.addContact}></AddContact>
                }></Route>


              <Route
                path="/editContact"
                exact
                render={() =>
                  <EditContact
                    currentContact={this.state.currentContact}
                    saveEditedContact={this.saveEditedContact}></EditContact>}>
              </Route>

              <Route
                path="*"
                render={() => <Page404></Page404>}
              ></Route>

            </Switch>




          </div>
        </Router>
      </Fragment >
    );
  }

}

export default App;

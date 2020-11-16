import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import AccountPage from './components/AccountPage';
import CardShowPage from './components/CardShowPage';
import DeckPage from './components/DeckPage';
import DeckShowPage from './components/DeckShowPage';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import {
  registerUser,
  loginUser,
  verifyUser,
  getUserDecks,
  newDeck,
  addDeckCard,
  getDeck,
} from './services/api_helper';
import { Route, Switch } from 'react-router';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser })
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser })
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
    }
  }

  handleLogout = () => {
    localStorage.removeItem('authToken');
    this.setState({ currentUser: null });
  }

  handleNewDeck = async (e, formData) => {
    e.preventDefault();
    await newDeck(formData);
  }

  handleGetDecks = async () => {
    if (this.state.currentUser) {
      const userDecks = await getUserDecks(this.state.currentUser);
      if (userDecks) {
        this.setState({ userDecks })
      }
    }
  }

  handleGetSingleDeck = async (deck_id) => {
    const deck = await getDeck(deck_id)
    console.log(deck);
    if(deck) {
      return deck;
    }
  }

  handleAddCard = async (e, card_id, deck_id) => {
    e.preventDefault()
    const deckCardIds = {
      card_id: card_id,
      deck_id: deck_id
    }
    const deckCard = await addDeckCard(deckCardIds)
    console.log(deckCard);

  }

  componentDidMount() {
    this.handleVerify();
    if (this.state.currentUser) {
      this.handleGetDecks();
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path="/">
            <SearchPage
              userDecks={this.state.userDecks}
              handleGetDecks={this.handleGetDecks}
              handleAddCard={this.handleAddCard}
            />
          </Route>

          <Route path="/account" component={AccountPage} />

          <Route path="/decks/:deck_id" >
            <DeckShowPage handleGetSingleDeck={this.handleGetSingleDeck} />
          </Route>

          <Route path="/decks">
            <DeckPage
              currentUser={this.state.currentUser}
              userDecks={this.state.userDecks}
              handleNewDeck={this.handleNewDeck}
              handleGetDecks={this.handleGetDecks}
            />
          </Route>

          <Route path="/login">
            <LoginForm handleLogin={this.handleLogin} />
          </Route>

          <Route path="/register">
            <RegisterForm handleRegister={this.handleRegister} />
          </Route>

          <Route path="/card/:id" component={CardShowPage} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;

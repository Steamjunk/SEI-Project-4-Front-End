import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import AccountPage from './components/AccountPage';
import CardShowPage from './components/CardShowPage';
import DeckPage from './components/DeckPage';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { registerUser, loginUser, verifyUser, getUserDecks } from './services/api_helper';
import { Route } from 'react-router';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      userDecks: null
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

  handleGetDecks = async () => {
    const userDecks = await getUserDecks();
    if (userDecks) {
      this.setState({ userDecks })
    }
  }

  componentDidMount() {
    this.handleVerify();
    this.handleGetDecks();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} handleLogout={this.handleLogout} />

        <Route exact path="/" component={SearchPage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/decks">
          <DeckPage currentUser={this.state.currentUser} userDecks={this.state.userDecks} />
        </Route>
        <Route path="/login">
          <LoginForm handleLogin={this.handleLogin} />
        </Route>
        <Route path="/register">
          <RegisterForm handleRegister={this.handleRegister} />
        </Route>
        <Route path="/card/:id" component={CardShowPage} />

        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import * as A from "../styles/AuthStyles";


class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <A.StyledAuthForm onSubmit={(e) => this.props.handleLogin(e, this.state)}>
        <h3>Log In</h3>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Login" />
      </A.StyledAuthForm>
    )
  }
}

export default LoginForm;
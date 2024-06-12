// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password, errorMsg} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = response.json()
    if (response.ok === true) {
      this.onSuccessLogin()
    } else {
      this.setState({errorMsg: "*Username and Password didn't match"})
    }
  }

  renderUserNameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="username-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="input-field"
          onChange={this.onChangeUsername}
          value={username}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="username-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="input-field"
          onChange={this.onChangePassword}
          value={password}
        />
      </>
    )
  }

  render() {
    const {errorMsg} = this.state
    return (
      <div className="login-form-container">
        <div className="row-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-img"
          />
          <div>
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
                alt="website logo"
                className="login-page-website-img"
              />
              <div className="user-name-container">
                {this.renderUserNameField()}
              </div>
              <div className="user-name-container">
                {this.renderPasswordField()}
              </div>
              <button type="submit" className="login-btn">
                Login
              </button>
              <p className="error-msg">{errorMsg}</p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm

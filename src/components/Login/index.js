import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginContainer,
  LoginForm,
  AppLogo,
  UserNameContainer,
  PasswordContainer,
  Label,
  Input,
  ShowPasswordContainer,
  Checkbox,
  ShowPasswordLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value
          return (
            <UserNameContainer>
              <Label htmlFor="username" isLightTheme={isLightTheme}>
                USERNAME
              </Label>
              <Input
                type="text"
                id="username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </UserNameContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value
          return (
            <PasswordContainer>
              <Label htmlFor="password" isLightTheme={isLightTheme}>
                PASSWORD
              </Label>
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={this.onChangePassword}
              />
              <ShowPasswordContainer>
                <Checkbox
                  type="checkbox"
                  id="checkbox"
                  onChange={this.onChangeShowPassword}
                />
                <ShowPasswordLabel
                  htmlFor="checkbox"
                  isLightTheme={isLightTheme}
                >
                  Show Password
                </ShowPasswordLabel>
              </ShowPasswordContainer>
            </PasswordContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  render() {
    const {showError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value

          return (
            <LoginContainer isLightTheme>
              <LoginForm onSubmit={this.onSubmitForm} isLightTheme>
                <AppLogo
                  src={
                    isLightTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />
                {this.renderUsernameField()}
                {this.renderPasswordField()}
                <LoginButton type="submit">Login</LoginButton>
                {showError && <ErrorMsg>{errorMsg}</ErrorMsg>}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login

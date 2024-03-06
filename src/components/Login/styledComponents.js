import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#313131')};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginForm = styled.form`
  background-color: ${props => (props.isLightTheme ? ' #ffffff' : '#000000')};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 40vh;
  min-width: 40%;
  font-family: 'roboto';
`
export const AppLogo = styled.img`
  width: 30%;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  height: 35px;
  border: none;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
`
export const Label = styled.label`
  color: ${props => (props.isLightTheme ? '#64748b' : '#f8fafc')};
  font-weight: bold;
`
export const Input = styled.input`
  height: 35px;
  padding: 5px;
`
export const ShowPasswordLabel = styled.label`
  color: ${props => (props.isLightTheme ? '#231f20' : '#f8fafc')};
`
export const Checkbox = styled.input``

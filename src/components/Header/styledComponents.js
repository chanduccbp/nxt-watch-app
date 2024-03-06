import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const Navbar = styled.navbar`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  min-height: 10vh;
  font-family: 'roboto';
  background-color: ${props => (props.isLightTheme ? '#f1f5f9' : '#231f20')};
`

export const AppControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border: ${props =>
    props.isLightTheme ? 'solid 1px #3b82f6' : 'solid 1px #ffffff'};
  color: ${props => (props.isLightTheme ? '#3b82f6' : '#ffffff')};
  height: 35px;
  padding: 5px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutIconButton = styled.button`
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.isLightTheme ? '#ffffff' : '#1e293b')};
  color: ${props => (props.isLightTheme ? '#00306e' : '#ffffff')};
  font-family: 'roboto';
  border-radius: 5px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CancelButton = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border: solid 1px #94a3b8;
  color: #94a3b8;
  height: 35px;
  padding: 5px;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  height: 35px;
  padding: 5px;
`
export const AppLogo = styled.img``

export const ThemeButton = styled.button`
  border: none;
`
export const ProfilePic = styled.img``

export const LogoutText = styled.p``

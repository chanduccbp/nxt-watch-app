import {withRouter} from 'react-router-dom'
import {BsMoon} from 'react-icons/bs'
import {FiSun, FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import ThemeContext from '../../context/ThemeContext'

import {
  Navbar,
  AppLogo,
  LinkItem,
  AppControls,
  ThemeButton,
  ProfilePic,
  CancelButton,
  ConfirmButton,
  LogoutContainer,
  LogoutButton,
  LogoutText,
  ButtonsContainer,
  LogoutIconButton,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme, changeTheme, changeTab} = value

        const onClickingTheme = () => {
          changeTheme()
        }

        const onClickingLogo = () => {
          changeTab('HOME')
        }

        return (
          <Navbar isLightTheme={isLightTheme}>
            <LinkItem to="/">
              <AppLogo
                src={
                  isLightTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="website logo"
                onClick={onClickingLogo}
              />
            </LinkItem>
            <AppControls>
              <ThemeButton
                type="button"
                onClick={onClickingTheme}
                data-testid="theme"
              >
                {isLightTheme ? (
                  <BsMoon size={40} />
                ) : (
                  <FiSun size={40} color="white" />
                )}
              </ThemeButton>
              <ProfilePic
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogoutButton type="button" isLightTheme>
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <LogoutContainer isLightTheme={isLightTheme}>
                    <LogoutText>Are you sure,you want to logout?</LogoutText>
                    <ButtonsContainer>
                      <CancelButton type="button" onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </LogoutContainer>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <LogoutIconButton type="button">
                    <FiLogOut />
                  </LogoutIconButton>
                }
              >
                {close => (
                  <LogoutContainer isLightTheme={isLightTheme}>
                    <LogoutText>Are you sure,you want to logout?</LogoutText>
                    <ButtonsContainer>
                      <CancelButton type="button" onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </LogoutContainer>
                )}
              </Popup>
            </AppControls>
          </Navbar>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)

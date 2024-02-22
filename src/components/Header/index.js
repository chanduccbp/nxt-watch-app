import {Link, withRouter} from 'react-router-dom'
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
  CustomButton,
  LogoutContainer,
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
        const {isLightTheme, changeTheme} = value

        const onClickingTheme = () => {
          changeTheme()
        }

        return (
          <Navbar isLightTheme>
            <LinkItem to="/">
              <AppLogo
                src={
                  isLightTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="website logo"
              />
            </LinkItem>
            <AppControls>
              <ThemeButton
                type="button"
                onClick={onClickingTheme}
                data-testid="theme"
              >
                {isLightTheme ? <BsMoon /> : <FiSun />}
              </ThemeButton>
              <ProfilePic
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={<CustomButton type="button">Logout</CustomButton>}
              >
                {close => (
                  <LogoutContainer isLightTheme>
                    <LogoutText>Are you sure,you want to logout?</LogoutText>
                    <ButtonsContainer>
                      <CustomButton type="button" onClick={() => close()}>
                        Cancel
                      </CustomButton>
                      <CustomButton type="button" onClick={onClickLogout}>
                        Confirm
                      </CustomButton>
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
                  <LogoutContainer isLightTheme>
                    <LogoutText>Are you sure,you want to logout?</LogoutText>
                    <ButtonsContainer>
                      <CustomButton type="button" onClick={() => close()}>
                        Cancel
                      </CustomButton>
                      <CustomButton type="button" onClick={onClickLogout}>
                        Confirm
                      </CustomButton>
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

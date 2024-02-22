import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  NotFoundContainer,
  SidebarAndDescription,
  DescriptionContainer,
  Logo,
  Heading,
  Paragraph,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLightTheme} = value

      return (
        <NotFoundContainer>
          <Header />
          <SidebarAndDescription>
            <SideBar />
            <DescriptionContainer>
              <Logo
                src={
                  isLightTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                }
                alt="not found"
              />
              <Heading isLightTheme>Page Not Found</Heading>
              <Paragraph isLightTheme>
                We are sorry,the page you requested could not be found.
              </Paragraph>
            </DescriptionContainer>
          </SidebarAndDescription>
        </NotFoundContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

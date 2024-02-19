import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeContext from '../../context/ThemeContext'
import {
  SidebarContainer,
  TabsListContainer,
  TabItem,
  TabName,
  ContactUsContainer,
  Heading,
  Logo,
  Paragraph,
  LogoContainer,
} from './styledComponents'

const tabsList = [
  {id: 'HOME', tabName: 'Home', tabIcon: <AiFillHome />, tabPath: '/'},
  {
    id: 'TRENDING',
    tabName: 'Trending',
    tabIcon: <HiFire />,
    tabPath: '/trending',
  },
  {
    id: 'GAMING',
    tabName: 'Gaming',
    tabIcon: <SiYoutubegaming />,
    tabPath: '/gaming',
  },
  {
    id: 'SAVED VIDEOS',
    tabName: 'Saved videos',
    tabIcon: <CgPlayListAdd />,
    tabPath: '/saved-videos',
  },
]

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLightTheme, activeTab, changeTab} = value

      return (
        <SidebarContainer isLightTheme>
          <TabsListContainer>
            {tabsList.map(eachTab => {
              const onClickingTab = () => {
                changeTab(eachTab.id)
              }

              return (
                <Link to={eachTab.tabPath}>
                  <TabItem
                    key={eachTab.id}
                    onClick={onClickingTab}
                    isActive={activeTab === eachTab.id}
                    isLightTheme
                  >
                    {eachTab.tabIcon}
                    <TabName> {eachTab.tabName} </TabName>
                  </TabItem>
                </Link>
              )
            })}
          </TabsListContainer>
          <ContactUsContainer>
            <Heading>CONTACT US</Heading>
            <LogoContainer>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </LogoContainer>
            <Paragraph>
              Enjoy! Now to see your channels and recommendations!
            </Paragraph>
          </ContactUsContainer>
        </SidebarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar

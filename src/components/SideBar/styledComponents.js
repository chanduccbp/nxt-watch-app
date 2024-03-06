import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#f1f5f9' : '#231f20')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 20%;
  height: 100%;
`
export const TabsListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  font-family: 'roboto';
`
export const TabItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isActive ? ' #94a3b8' : 'transparent')};
  padding: 5px;
  color: ${props => (props.isActive ? '#ff0000' : '')};
`
export const TabName = styled.p`
  color: ${props => (props.isLightTheme ? '#0f0f0f' : '#ffffff')};
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  color: ${props => (props.isLightTheme ? '#0f0f0f' : '#ffffff')};
  font-family: 'roboto';
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Heading = styled.h1``

export const Paragraph = styled.p``

export const Logo = styled.img``

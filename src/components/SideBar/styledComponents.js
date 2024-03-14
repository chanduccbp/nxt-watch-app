import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#f1f5f9' : '#231f20')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  min-height: 100vh;
`
export const TabsListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  font-family: 'roboto';
`
export const TabItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isActive ? ' #94a3b8' : 'transparent')};
  padding: 5px;
  color: ${props => (props.isActive ? '#ff0000' : '#64748b')};
`
export const TabName = styled.p`
  color: ${props => (props.isLightTheme ? '#0f0f0f' : '#ffffff')};
  margin-left: 20px;
  font-weight: bold;
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
  align-items: center;
`
export const Heading = styled.h1`
  width: 70%;
`

export const Paragraph = styled.p`
  font-weight: bold;
`

export const Logo = styled.img`
  width: 15%;
  margin-right: 10px;
`

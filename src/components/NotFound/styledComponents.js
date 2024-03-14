import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  min-height: 100vh;
`
export const DescriptionContainer = styled.div`
  width: 80%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isLightTheme ? '#e2e8f0' : '#212121')};
`

export const Heading = styled.h1`
  color: ${props => (props.isLightTheme ? '#181818' : '#ffffff')};
`
export const Paragraph = styled.p`
  color: #475569;
`
export const Logo = styled.img`
  width: 40%;
`
export const SidebarAndDescription = styled.div`
  min-height: 90vh;
  display: flex;
`

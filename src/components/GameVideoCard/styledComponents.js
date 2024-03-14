import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
  width: 30%;
  height: 60vh;
`
export const VideoItem = styled.li`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 767px) {
    width: 45%;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
  height: 75%;
`
export const Heading = styled.h1`
  color: ${props => (props.isLightTheme ? '#231f20' : '#ffffff')};
  margin: 0px;
  font-size: 24px;
`

export const Paragraph = styled.p`
  color: #475569;
  margin: 0px;
`

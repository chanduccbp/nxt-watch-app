import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const VideoItem = styled.li`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Thumbnail = styled.img`
  width: 45%;
`
export const VideoDetailsContainer = styled.div`
  width: 45%;
`
export const Heading = styled.h1`
  color: ${props => (props.isLightTheme ? '#231f20' : '#ffffff')};
`
export const Paragraph = styled.p`
  color: #475569;
`

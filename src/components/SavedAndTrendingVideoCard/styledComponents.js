import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
  width: 80%;
  height: 40vh;
`

export const VideoItem = styled.li`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
`
export const Thumbnail = styled.img`
  width: 45%;
  height: 100%;
`
export const VideoDetailsContainer = styled.div`
  width: 45%;
  height: 100%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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

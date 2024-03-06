import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`
export const VideoItem = styled.li`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 45%;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ProfilePic = styled.img`
  width: 10%;
`
export const ChannelDetails = styled.div`
  width: 85%;
  font-family: 'roboto';
`
export const Heading = styled.h1`
  color: ${props => (props.isLightTheme ? '#231f20' : '#ffffff')};
`

export const Paragraph = styled.p`
  color: #475569;
`

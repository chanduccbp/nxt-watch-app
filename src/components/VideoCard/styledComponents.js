import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
  width: 32%;
  min-height: 40vh;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    width: 45%;
    height: 40vh;
  }
`
export const VideoItem = styled.li`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Thumbnail = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px;
`
export const ProfilePic = styled.img`
  width: 10%;
  margin-top: 5px;
`
export const ChannelDetails = styled.div`
  width: 85%;
  font-family: 'roboto';
`
export const VideoHeading = styled.p`
  color: ${props => (props.isLightTheme ? '#231f20' : '#ffffff')};
  margin: 0px;
  width: 100%;
  font-weight: bold;
`

export const Paragraph = styled.p`
  color: #475569;
  margin: 0px;
`

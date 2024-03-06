import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  min-height: 100vh;
`

export const SideBarAndVideo = styled.div`
  min-height: 90vh;
  display: flex;
`
export const VideoContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#ebebeb' : '#000000')};
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoaderContainer = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`
export const FailureViewContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  font-family: 'roboto';
`
export const FailureViewPic = styled.img`
  width: 50%;
`
export const Heading = styled.h1`
  color: ${props => (props.isLightTheme ? '#181818' : '#ffffff')};
`
export const Paragraph = styled.p`
  color: #475569;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  border: none;
  padding: 5px;
  border-radius: 5px;
  height: 35px;
  color: #ffffff;
`
export const VideoPlayerContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'roboto';
`
export const VideoText = styled.p`
  color: ${props => (props.isLightTheme ? '#181818' : '#ffffff')};
`
export const VideoLikesViewsAndSaveContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #475569;
`
export const VideoButtons = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const VideoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isLiked ? '#4f46e5' : '#475569')};
`
export const VideoButtonDislike = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isDisliked ? '#4f46e5' : '#475569')};
`
export const VideoButtonSave = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isSaved ? '#4f46e5' : '#475569')};
`
export const ButtonText = styled.span``

export const HorizontalLine = styled.hr`
  background-color: #475569;
  width: 100%;
`
export const ChannelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ChannelProfile = styled.img`
  width: 10%;
`
export const ChannelDetails = styled.div`
  width: 85%;
  font-family: 'roboto';
`
export const ChannelNameAndSubscribers = styled.div``

export const VideoParagraph = styled.p`
  color: #475569;
`

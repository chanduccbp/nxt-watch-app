import styled from 'styled-components'

export const GamingContainer = styled.div`
  min-height: 100vh;
`
export const SideBarAndVideos = styled.div`
  min-height: 90vh;
  display: flex;
`
export const VideosListContainer = styled.div`
  height: 100%;
  width: 80%;
  background-color: ${props => (props.isLightTheme ? '#ebebeb' : '#000000')};
`
export const LoaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const FailureViewContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
export const VideosContainer = styled.div`
  width: 80%;
  height: 100%;
`
export const TitleContainer = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.isLightTheme ? ' #ebebeb' : '#231f20')};
`
export const Title = styled.h1`
  color: ${props => (props.isLightTheme ? '#181818' : '#ffffff')};
`
export const VideoThumbnailsList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

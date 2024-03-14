import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  min-height: 100vh;
`
export const SavedVideosAndSidebar = styled.div`
  min-height: 90vh;
  display: flex;
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-height: 100vh;
  font-family: 'roboto';
  background-color: ${props => (props.isLightTheme ? ' #ebebeb' : '#0f0f0f')};
`
export const NoSavedVideosPic = styled.img`
  width: 40%;
`
export const Heading = styled.h1`
  color: ${props => (props.isLightTheme ? '#231f20' : '#ffffff')};
`
export const Paragraph = styled.p`
  color: #475569;
`
export const VideosContainer = styled.div`
  width: 80%;
  min-height: 100vh;
  background-color: ${props => (props.isLightTheme ? ' #ffffff' : '#0f0f0f')};
`
export const TitleContainer = styled.div`
  height: 15vh;
  display: flex;
  align-items: center;
  padding: 20px;
  padding-left: 25px;
  background-color: ${props => (props.isLightTheme ? ' #ebebeb' : '#212121')};
`
export const Title = styled.h1`
  color: ${props => (props.isLightTheme ? '#181818' : '#ffffff')};
  margin-left: 10px;
`
export const VideosList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px;
`

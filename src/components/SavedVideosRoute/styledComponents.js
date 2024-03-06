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
  height: 100%;
  font-family: 'roboto';
`
export const NoSavedVideosPic = styled.img`
  width: 80%;
`
export const Heading = styled.h1`
  color: ${props => (props.isLightTheme ? '#231f20' : '#ffffff')};
`
export const Paragraph = styled.p`
  color: #475569;
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
export const VideosList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

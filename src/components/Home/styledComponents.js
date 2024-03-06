import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
`
export const SideBarAndVideos = styled.div`
  min-height: 90vh;
  display: flex;
`

export const VideosContainer = styled.div`
  height: 100%;
  width: 80%;
`
export const VideosListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  width: 100%;
  background-color: ${props => (props.isLightTheme ? '#ebebeb' : '#000000')};
`
export const InputContainer = styled.div`
  width: 45%;
  display: flex;
  height: 35px;
`
export const SearchInputBar = styled.input`
  height: 100%;
  width: 80%;
  border: solid 1px #64748b;
  padding: 5px;
  background-color: transparent;
`
export const SearchButton = styled.button`
  height: 100%;
  width: 20%;
  border: solid 1px #64748b;
  padding: 5px;
  background-color: #cccccc;
`
export const LoaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`
export const FailureViewContainer = styled.div`
  flex-grow: 1;
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
export const NoResultsViewContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  font-family: 'roboto';
`
export const NoResultsViewPic = styled.img`
  width: 50%;
`

export const VideoThumbnailsList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  flex-grow: 1;
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

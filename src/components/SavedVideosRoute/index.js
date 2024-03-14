import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import SavedAndTrendingVideoCard from '../SavedAndTrendingVideoCard'

import {
  SavedVideosContainer,
  SavedVideosAndSidebar,
  NoSavedVideosContainer,
  NoSavedVideosPic,
  Heading,
  Paragraph,
  VideosContainer,
  VideosList,
  TitleContainer,
  Title,
} from './styledComponents'

const SavedVideosRoute = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLightTheme, savedVideos, changeTab} = value
      const noSavedVideos = savedVideos.length === 0

      const onClickingVideo = () => {
        changeTab('')
      }

      return (
        <SavedVideosContainer data-testid="savedVideos">
          <Header />
          <SavedVideosAndSidebar>
            <SideBar />
            {noSavedVideos ? (
              <NoSavedVideosContainer isLightTheme={isLightTheme}>
                <NoSavedVideosPic
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <Heading isLightTheme={isLightTheme}>
                  No saved videos found
                </Heading>
                <Paragraph>
                  You can save your videos while watching them
                </Paragraph>
              </NoSavedVideosContainer>
            ) : (
              <VideosContainer isLightTheme={isLightTheme}>
                <TitleContainer isLightTheme={isLightTheme}>
                  <HiFire size={50} color="red" />
                  <Title isLightTheme={isLightTheme}>Saved Videos</Title>
                </TitleContainer>
                <VideosList>
                  {savedVideos.map(eachVideo => (
                    <SavedAndTrendingVideoCard
                      key={eachVideo.id}
                      videoDetails={eachVideo}
                      isLightTheme={isLightTheme}
                      onClickingVideo={onClickingVideo}
                    />
                  ))}
                </VideosList>
              </VideosContainer>
            )}
          </SavedVideosAndSidebar>
        </SavedVideosContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideosRoute

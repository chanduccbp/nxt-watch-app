import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import SavedAndTrendingVideoCard from '../SavedAndTrendingVideoCard'

import {
  TrendingContainer,
  SideBarAndVideos,
  VideosContainer,
  VideosListContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureViewPic,
  Heading,
  Paragraph,
  RetryButton,
  TitleContainer,
  Title,
  VideoThumbnailsList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachObj => ({
        id: eachObj.id,
        title: eachObj.title,
        thumbnailUrl: eachObj.thumbnail_url,
        channelName: eachObj.channel.name,
        profileImageUrl: eachObj.channel.profile_image_url,
        viewCount: eachObj.view_count,
        publishedAt: eachObj.published_at,
      }))

      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickRetry = () => {
    this.getVideos()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value

        return (
          <FailureViewContainer>
            <FailureViewPic
              src={
                isLightTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              }
              alt="failure view"
            />
            <Heading isLightTheme>Oops! Something Went Wrong</Heading>
            <Paragraph isLightTheme>
              We are having some trouble to complete your request.Please try
              again.
            </Paragraph>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideosList = () => {
    const {videosList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value

          return (
            <VideosContainer>
              <TitleContainer isLightTheme>
                <HiFire />
                <Title>Trending</Title>
              </TitleContainer>
              <VideoThumbnailsList>
                {videosList.map(eachVideo => (
                  <SavedAndTrendingVideoCard
                    key={eachVideo.id}
                    videoDetails={eachVideo}
                    isLightTheme={isLightTheme}
                  />
                ))}
              </VideoThumbnailsList>
            </VideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value

          return (
            <TrendingContainer data-testid="trending">
              <Header />
              <SideBarAndVideos>
                <SideBar />
                <VideosListContainer isLightTheme>
                  {this.renderView()}
                </VideosListContainer>
              </SideBarAndVideos>
            </TrendingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingRoute

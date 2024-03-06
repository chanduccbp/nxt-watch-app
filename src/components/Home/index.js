import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import PremiumBanner from '../PremiumBanner'
import VideoCard from '../VideoCard'

import {
  HomeContainer,
  SideBarAndVideos,
  VideosContainer,
  VideosListContainer,
  InputContainer,
  SearchInputBar,
  SearchButton,
  LoaderContainer,
  FailureViewContainer,
  FailureViewPic,
  Heading,
  Paragraph,
  RetryButton,
  NoResultsViewContainer,
  NoResultsViewPic,
  VideoThumbnailsList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    showBanner: true,
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    videosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  onClickSearchIcon = () => {
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
    const showNoResultsView = videosList.length === 0

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value

          return showNoResultsView ? (
            <NoResultsViewContainer>
              <NoResultsViewPic
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <Heading isLightTheme>No Search results found</Heading>
              <Paragraph isLightTheme>
                Try different key words or remove search filter
              </Paragraph>
              <RetryButton type="button" onClick={this.onClickRetry}>
                Retry
              </RetryButton>
            </NoResultsViewContainer>
          ) : (
            <VideoThumbnailsList>
              {videosList.map(eachVideo => (
                <VideoCard
                  key={eachVideo.id}
                  videoDetails={eachVideo}
                  isLightTheme={isLightTheme}
                />
              ))}
            </VideoThumbnailsList>
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
          const {showBanner} = this.state

          return (
            <HomeContainer data-testid="home">
              <Header />
              <SideBarAndVideos>
                <SideBar />
                <VideosContainer>
                  {showBanner && <PremiumBanner />}
                  <VideosListContainer isLightTheme={isLightTheme}>
                    <InputContainer>
                      <SearchInputBar
                        onChange={this.onChangeSearchInput}
                        placeHolder="Search"
                      />
                      <SearchButton
                        type="button"
                        onClick={this.onClickSearchIcon}
                      >
                        <AiOutlineSearch />
                      </SearchButton>
                    </InputContainer>
                    {this.renderView()}
                  </VideosListContainer>
                </VideosContainer>
              </SideBarAndVideos>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home

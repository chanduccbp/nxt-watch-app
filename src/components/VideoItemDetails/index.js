import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  LoaderContainer,
  FailureViewContainer,
  FailureViewPic,
  Heading,
  Paragraph,
  RetryButton,
  VideoItemDetailsContainer,
  SideBarAndVideo,
  VideoContainer,
  VideoPlayerContainer,
  VideoText,
  VideoLikesViewsAndSaveContainer,
  VideoParagraph,
  VideoButtons,
  VideoButton,
  VideoButtonDislike,
  VideoButtonSave,
  ButtonText,
  HorizontalLine,
  ChannelContainer,
  ChannelProfile,
  ChannelDetails,
  ChannelNameAndSubscribers,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideo()
  }

  getVideo = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channelName: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        subscriberCount: data.video_details.subscriber_count,
        description: data.video_details.description,
      }

      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
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

  renderVideoPlayer = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    const {
      id,
      title,
      videoUrl,
      channelName,
      profileImageUrl,
      viewCount,
      publishedAt,
      subscriberCount,
      description,
    } = videoDetails

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme, updateSavedVideos, savedVideos} = value

          let isSaved
          const videoSaved = savedVideos.find(eachObj => eachObj.id === id)
          if (videoSaved === undefined) {
            isSaved = false
          } else {
            isSaved = true
          }

          const onClickSave = () => {
            updateSavedVideos(videoDetails)
          }

          return (
            <VideoPlayerContainer>
              <ReactPlayer url={videoUrl} controls width="100%" />
              <VideoText isLightTheme={isLightTheme}>{title}</VideoText>
              <VideoLikesViewsAndSaveContainer>
                <VideoParagraph>
                  {viewCount} views . {publishedAt}
                </VideoParagraph>
                <VideoButtons>
                  <VideoButton
                    type="button"
                    onClick={this.onClickLike}
                    isLiked={isLiked}
                  >
                    <AiOutlineLike />
                    <ButtonText>Like</ButtonText>
                  </VideoButton>
                  <VideoButtonDislike
                    type="button"
                    onClick={this.onClickDislike}
                    isDisliked={isDisliked}
                  >
                    <AiOutlineDislike />
                    <ButtonText>Dislike</ButtonText>
                  </VideoButtonDislike>
                  <VideoButtonSave
                    isSaved={isSaved}
                    onClick={onClickSave}
                    type="button"
                  >
                    <BiListPlus />
                    <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                  </VideoButtonSave>
                </VideoButtons>
              </VideoLikesViewsAndSaveContainer>
              <HorizontalLine />
              <ChannelContainer>
                <ChannelProfile src={profileImageUrl} alt="channel logo" />
                <ChannelDetails>
                  <ChannelNameAndSubscribers>
                    <VideoText isLightTheme={isLightTheme}>
                      {channelName}
                    </VideoText>
                    <VideoParagraph>
                      {subscriberCount} subscribers
                    </VideoParagraph>
                  </ChannelNameAndSubscribers>
                  <VideoText isLightTheme={isLightTheme}>
                    {description}
                  </VideoText>
                </ChannelDetails>
              </ChannelContainer>
            </VideoPlayerContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoPlayer()
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
            <VideoItemDetailsContainer data-testid="videoItemDetails">
              <Header />
              <SideBarAndVideo>
                <SideBar />
                <VideoContainer isLightTheme={isLightTheme}>
                  {this.renderView()}
                </VideoContainer>
              </SideBarAndVideo>
            </VideoItemDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails

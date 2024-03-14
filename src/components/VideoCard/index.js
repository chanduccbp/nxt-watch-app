import {
  LinkItem,
  VideoItem,
  Thumbnail,
  VideoDetailsContainer,
  ProfilePic,
  ChannelDetails,
  VideoHeading,
  Paragraph,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails, isLightTheme, onClickingVideo} = props
  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = videoDetails

  return (
    <LinkItem to={`/videos/${id}`}>
      <VideoItem onClick={onClickingVideo}>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <ProfilePic src={profileImageUrl} alt="channel logo" />
          <ChannelDetails>
            <VideoHeading isLightTheme={isLightTheme}>{title}</VideoHeading>
            <Paragraph>{channelName}</Paragraph>
            <Paragraph>
              {viewCount} views . {publishedAt}
            </Paragraph>
          </ChannelDetails>
        </VideoDetailsContainer>
      </VideoItem>
    </LinkItem>
  )
}

export default VideoCard

import {Link} from 'react-router-dom'
import {
  VideoItem,
  Thumbnail,
  VideoDetailsContainer,
  ProfilePic,
  ChannelDetails,
  Heading,
  Paragraph,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails, isLightTheme} = props
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
    <Link to={`/videos/${id}`}>
      <VideoItem>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <ProfilePic src={profileImageUrl} alt="channel logo" />
          <ChannelDetails>
            <Heading isLightTheme>{title}</Heading>
            <Paragraph>{channelName}</Paragraph>
            <Paragraph>
              {viewCount} views . {publishedAt}
            </Paragraph>
          </ChannelDetails>
        </VideoDetailsContainer>
      </VideoItem>
    </Link>
  )
}

export default VideoCard

import {Link} from 'react-router-dom'
import {
  VideoItem,
  Thumbnail,
  VideoDetailsContainer,
  Heading,
  Paragraph,
} from './styledComponents'

const SavedAndTrendingVideoCard = props => {
  const {videoDetails, isLightTheme} = props
  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    viewCount,
    publishedAt,
  } = videoDetails

  return (
    <Link to={`/videos/${id}`}>
      <VideoItem>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <Heading isLightTheme>{title}</Heading>
          <Paragraph>{channelName}</Paragraph>
          <Paragraph>
            {viewCount} views . {publishedAt}
          </Paragraph>
        </VideoDetailsContainer>
      </VideoItem>
    </Link>
  )
}

export default SavedAndTrendingVideoCard

import {
  LinkItem,
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
    <LinkItem to={`/videos/${id}`}>
      <VideoItem>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <Heading isLightTheme={isLightTheme}>{title}</Heading>
          <Paragraph>{channelName}</Paragraph>
          <Paragraph>
            {viewCount} views . {publishedAt}
          </Paragraph>
        </VideoDetailsContainer>
      </VideoItem>
    </LinkItem>
  )
}

export default SavedAndTrendingVideoCard

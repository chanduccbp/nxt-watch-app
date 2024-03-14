import {
  LinkItem,
  VideoItem,
  Thumbnail,
  VideoDetailsContainer,
  Heading,
  Paragraph,
} from './styledComponents'

const SavedAndTrendingVideoCard = props => {
  const {videoDetails, isLightTheme, onClickingVideo} = props
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
      <VideoItem onClick={onClickingVideo}>
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

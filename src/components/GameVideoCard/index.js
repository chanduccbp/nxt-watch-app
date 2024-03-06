import {
  LinkItem,
  VideoItem,
  Thumbnail,
  Heading,
  Paragraph,
} from './styledComponents'

const GameVideoCard = props => {
  const {videoDetails, isLightTheme} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <LinkItem to={`/videos/${id}`}>
      <VideoItem>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <Heading isLightTheme={isLightTheme}>{title}</Heading>
        <Paragraph>{viewCount} Watching Worldwide</Paragraph>
      </VideoItem>
    </LinkItem>
  )
}

export default GameVideoCard

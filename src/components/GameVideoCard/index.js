import {
  LinkItem,
  VideoItem,
  Thumbnail,
  Heading,
  Paragraph,
} from './styledComponents'

const GameVideoCard = props => {
  const {videoDetails, isLightTheme, onClickingVideo} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <LinkItem to={`/videos/${id}`}>
      <VideoItem onClick={onClickingVideo}>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <Heading isLightTheme={isLightTheme}>{title}</Heading>
        <Paragraph>{viewCount} Watching Worldwide</Paragraph>
      </VideoItem>
    </LinkItem>
  )
}

export default GameVideoCard

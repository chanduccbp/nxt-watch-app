import {Link} from 'react-router-dom'
import {VideoItem, Thumbnail, Paragraph} from './styledComponents'

const GameVideoCard = props => {
  const {videoDetails, isLightTheme} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <Link to={`/videos/${id}`}>
      <VideoItem>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <Paragraph isLightTheme>{title}</Paragraph>
        <Paragraph>{viewCount} Watching Worldwide</Paragraph>
      </VideoItem>
    </Link>
  )
}

export default GameVideoCard

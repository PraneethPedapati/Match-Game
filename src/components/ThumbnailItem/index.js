import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItem} = props
  const {thumbnailUrl} = thumbnailItem

  return (
    <li className="thumbnail-item">
      <button type="button" className="thumbnail-button">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ThumbnailItem

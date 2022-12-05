// Write your code here.
import './index.css'

const CardDetails = props => {
  const {card} = props
  const {title, description, className, imgUrl} = card
  return (
    <li className={className}>
      <div className="card">
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
        <div className="imgContainer">
          <img src={imgUrl} className="icon" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardDetails

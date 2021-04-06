import { Link } from 'react-router-dom'
import './ContactPreview.scss'

export function ContactPreview({ contact, onSelectContact }) {
  return (
    <Link to={'/contact/' + contact._id}>
      <div className="contact-preview">
        <img src={`https://robohash.org/${contact._id}`} alt="" />
        <p>{contact.name}</p>
        <small>{contact.phone}</small>
      </div>
    </Link>
  )
}

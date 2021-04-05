import './ContactList.scss'
import {ContactPreview} from '../../cmps/ContactPreview'

  export function ContactList({ contacts, onSelectContact }) {

    return (
      <div className="contact-list">
        {
          contacts && contacts.map(contact => <ContactPreview onSelectContact={onSelectContact} key={contact._id} contact={contact} />)
        }
      </div>
    )
  }
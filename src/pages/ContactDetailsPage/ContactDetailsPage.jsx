
import { Component } from 'react';
import { contactService } from '../../services/contactService'
import './ContactDetailsPage.scss'

export class ContactDetailsPage extends Component {
    state = {
      contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    async loadContact() {
        const contact = await contactService.getContactById(this.props.selectedContactId)
        this.setState({ contact })
    }

    
    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading Contact.....</div>
        return (
            <div>
                <img src={`https://robohash.org/${contact._id}`} alt="" />
                <p>Name: {contact.name}</p>
                <small>Email: {contact.email}</small>
                <p>Phone: {contact.phone}</p>
                <button onClick={() => this.props.onDeleteContact(contact._id)}>Delete</button>
            </div>
        )
    }
}

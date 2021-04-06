import { Component } from 'react'
import { contactService } from '../../services/contactService'
import './ContactPage.scss'
import {ContactList} from '../../cmps/ContactList'
// import {ContactDetailsPage} from '../ContactDetailsPage'
import { ContactFilter } from '../../cmps/ContactFilter/ContactFilter'
import { Link } from 'react-router-dom'
import plusImg from '../../assets/img/plus.png'

export class ContactPage extends Component {

  state = {
    contacts: null,
    filterBy: null,
  }

  componentDidMount() {
    this.loadContacts()
  }

  async loadContacts() {
    const contacts = await contactService.getContacts(this.state.filterBy)
    this.setState({ contacts })
  }

  // onDeleteContact = async (contactId) => {
  //   await contactService.deleteContact(contactId)
  //   this.setState({ selectedContactId: null })
  //   this.loadContacts()
  // }

  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadContacts)
  }

  render() {
    return (
      <div className="contact-page">
            <ContactFilter onChangeFilter={this.onChangeFilter} />
            <h3>contacts are:</h3>  

              <ContactList contacts = {this.state.contacts} />
              {/* <Link to="/contact/edit">Add Contact</Link> */}
              <Link to='/contact/edit'><img className="add-contact" src={plusImg} alt=""/></Link>
              {/* <Link to="/contact/edit">Add Contact</Link> */}
      </div>
    )
  }
}



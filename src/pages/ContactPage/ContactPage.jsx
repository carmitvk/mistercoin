import { Component } from 'react'
import { contactService } from '../../services/contactService'
import './ContactPage.scss'
import {ContactList} from '../../cmps/ContactList'
import {ContactDetailsPage} from '../ContactDetailsPage'
import { ContactFilter } from '../../cmps/ContactFilter/ContactFilter'

export class ContactPage extends Component {

  state = {
    contacts: null,
    selectedContactId: null,
    filterBy: null,
  }

  componentDidMount() {
    this.loadContacts()
  }

  async loadContacts() {
    const contacts = await contactService.getContacts(this.state.filterBy)
    this.setState({ contacts })
  }

  onSelectContact = (contactId)=>{
    this.setState({ selectedContactId: contactId })
  }

  onDeleteContact = async (contactId) => {
    await contactService.deleteContact(contactId)
    this.setState({ selectedContactId: null })
    this.loadContacts()
  }

  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadContacts)
  }

  render() {
    return (
      <div className="contact-page">
        {
          this.state.contacts && 
          <div>
            <ContactFilter onChangeFilter={this.onChangeFilter} />
            <h3>contacts are:</h3>  
            {
              !this.state.selectedContactId &&
              <ContactList contacts = {this.state.contacts} onSelectContact={this.onSelectContact} />
            }
            {
              this.state.selectedContactId &&
              // <ContactDetailsPage selectedContactId={this.state.selectedContactId} /> 
              <ContactDetailsPage onDeleteContact={this.onDeleteContact} selectedContactId={this.state.selectedContactId} /> 
            }
          </div>
        }
      </div>
    )
  }
}



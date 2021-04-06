import { Component } from 'react';
import { Link } from 'react-router-dom';
import { contactService } from '../../services/contactService'
import './ContactDetailsPage.scss'
import editImg from '../../assets/img/edit.png'
import backLogo from '../../assets/img/back.png'

export class ContactDetailsPage extends Component {
    state = {
      contact: null
    }

    componentDidMount() {
        console.log('this.props', this.props);
        this.loadContact()
    }

    // componentDidUpdate(prevProps, prevState) { //to nextContact
    //     if (prevProps.match.params.id !== this.props.match.params.id) {
    //         this.loadContact()
    //     }
    // }

    async loadContact() {
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }

    // onNextContact(id){
    //     this.props.match.params.id = contactService.getNextContactByIdx(this.props.match.params.id)
    // }

    
    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading Contact.....</div>
        return (
            <div className="contact-details-page">
                <img src={`https://robohash.org/${contact._id}`} alt="" />
                <p>Name: {contact.name}</p>
                <small>Email: {contact.email}</small>
                <p>Phone: {contact.phone}</p>
                {/* <button onClick={() => this.props.onDeleteContact(contact._id)}>Delete</button> */}
                {/* <Link to={'/'}>Back</Link> */}
                <Link to='/'><img src={backLogo} alt="" /></Link>
                <Link to={'/contact/edit/' + contact._id}><img className="edit-contact" src={editImg} alt=""/></Link>

                {/* <button onClick={() => this.onNextContact(contact._id)}>Next</button> */}
            </div>
        )
    }
}

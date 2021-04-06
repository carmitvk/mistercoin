
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { contactService } from '../../services/contactService'
import './ContactEditPage.scss'
import backLogo from '../../assets/img/back.png'
import deleteImg from '../../assets/img/delete.png'

export class ContactEditPage extends Component {

    inputRef = React.createRef()

    state = {
        contact: null,
        errMsg: ''
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        try {
            const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
            this.setState({ contact })
        } catch (err) {
            this.setState({ errMsg: 'Contact Not Found' })
        }
        // console.log('inputRef=',this.inputRef);
        // this.inputRef.current.focus()
        // this.inputRef.current.select()
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
    }
    onSaveContact = async (ev) => {
        ev.preventDefault()
        console.log(this.state.contact);
        await contactService.saveContact({ ...this.state.contact })
        this.props.history.push('/')
    }

    onDeleteContact = async (contactId) => {
        await contactService.deleteContact(contactId)
        // this.goBack()
        this.props.history.push('/')
    }

    // goBack(){
    //     this.props.history.push('/')
    // }

    render() {
        if (!this.state.contact) return <div>{this.state.errMsg || 'Loading'}</div>
        const { name, email, phone } = this.state.contact
        return (
            <form className='contact-edit' onSubmit={this.onSaveContact}>
                <div className="actions-edit">
                    <Link to='/'><img src={backLogo} alt="" /></Link>
                    {/* <button onClick="goBack">Back</button> */}
                    <button className="delete-btn" onClick={() => this.onDeleteContact(this.state.contact._id)}><img className="delete-icon" src={deleteImg} alt="" /></button>
                </div>
                <div className="fields-edit">
                    <label htmlFor="nameId">Name</label>
                    <input ref={this.inputRef} required type="text" id="nameId" value={name} onChange={this.handleChange} name="name" />

                    <label htmlFor="emailId">Email</label>
                    <input required type="text" id="emailId" value={email} onChange={this.handleChange} name="email" />

                    <label htmlFor="phoneId">Phone</label>
                    <input required type="number" id="phoneId" value={phone} onChange={this.handleChange} name="phone" />
                </div>

                <p>{this.state.errMsg}</p>
                <button className="save-btn">Save</button>
            </form >
        )
    }
}


import React, { Component } from 'react'
import { contactService } from '../../services/contactService'
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';

import './ContactEdit.scss'

export class ContactEdit extends Component {

    state = {
        contact: null,
        errMsg: ''
    }

    inputRef = React.createRef()

    async componentDidMount() {
        const { id } = this.props.match.params
        try {
            const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
            this.setState({ contact })
        } catch (err) {
            this.setState({ errMsg: 'contact Not Found' })
        }
        console.log(this.inputRef);
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
        this.props.history.push('/contact')
    }

    onDeleteContact = async (contactId) => {
        await contactService.deleteContact(contactId)
        this.props.history.push('/contact')
    }

    get title() {
        return this.state.contact._id ? 'Edit contact' : 'Add new contact'
    }

    render() {
        if (!this.state.contact) return <div>{this.state.errMsg || 'Loading'}</div>
        const { name, phone, email } = this.state.contact
        const route = this.state.contact._id ? `/contact/${this.state.contact._id}` : '/contact'

        return (
            <div className="contact-edit-container">

                <h2>{this.title}</h2>
                <form className='flex align-center column contact-edit' onSubmit={this.onSaveContact}>
                    {/* <TextField ref={this.inputRef} required type="text" id="name" label="Name"  value={name} name="name" variant="outlined" onChange={this.handleChange} /> */}
                    <label htmlFor="name">Name</label>
                    <input ref={this.inputRef} required type="text" id="name" value={name} onChange={this.handleChange} name="name" />
                    {/* <TextField ref={this.inputRef} required type="tel" id="phone" label="Phone"  value={phone} name="phone" variant="outlined" onChange={this.handleChange} /> */}

                    <label htmlFor="phone">Phone</label>
                    <input required type="tel" id="phone" value={phone} onChange={this.handleChange} name="phone" />

                    <label htmlFor="email">Email</label>
                    <input required type="email" id="email" value={email} onChange={this.handleChange} name="email" />

                    <div className="flex space-between header-edit">
                        <Link to={route}>
                            <img src={require('../../assets/icons/back.svg').default} title="back" alt="Back" className="icon" />
                        </Link>
                        <p>{this.state.errMsg}</p>
                        <button className="el-btn save-btn"> <img src={require('../../assets/icons/download.svg').default} title="save" alt="save" className="icon" /></button>
                        <button className="el-btn" onClick={() => this.onDeleteContact(this.state.contact._id)}>
                            <img src={require('../../assets/icons/delete.svg').default} title="delete" alt="delete" className="icon" /></button>
                    </div>

                </form>



            </div>
        )
    }
}

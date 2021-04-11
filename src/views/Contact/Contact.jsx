
// import { Component } from 'react'
// import { connect } from 'react-redux'
// import { ContactList } from '../../cmps/ContactList'
// import { ContactFilter } from '../../cmps/ContactFilter'
// import { loadContacts, removeContact } from '../../store/actions/contactActions'
// import './Contact.scss'
// import { Link } from 'react-router-dom'

// class _Contact extends Component {

//   state = {
//     // contacts: null,
//     // filterBy: null,
//   }

//   componentDidMount() {
//     this.loadContacts();
//   }

//   async loadContacts(filterBy = {}) {
//     await this.props.loadContacts(filterBy);
//   }
//   onChangeFilter = (filterBy) => {
//     this.loadContacts(filterBy)
//   }

//   onDeleteContact = async (contactId) => {
//     await this.props.removeContact(contactId);
//   }


//   render() {
//     const { contacts } = this.props
//     return (
//       <div className="contact">
//         <div className=" main-content main-layout justify-center flex align-center header-contact">
//           <ContactFilter onChangeFilter={this.onChangeFilter} />
//           <Link to="/contact/edit"><img src={require('../../assets/icons/addUser.png').default} title="add user" alt="save" className="user-add" /></Link>
//         </div>
//         { <ContactList contacts={contacts} />}

//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     contacts: state.contactReducer.contacts
//   }
// }

// const mapDispatchToProps = {
//   loadContacts,
//   removeContact
// }

// export const Contact = connect(mapStateToProps, mapDispatchToProps)(_Contact)

import { Component } from 'react';
import { contactService } from '../../services/contactService';
import { ContactList } from '../../cmps/ContactList';
import { ContactFilter } from '../../cmps/ContactFilter';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadContacts, removeContact } from '../../store/actions/contactActions';
import './Contact.scss';

class _Contact extends Component {
  // state = {
  //   contacts: null,
  //   filterBy: null,
  // };

  componentDidMount() {
    this.loadContacts();
  }

  async loadContacts(filterBy = {}) {
    await this.props.loadContacts(filterBy);
  }

  onChangeFilter = (filterBy) => {
    this.loadContacts(filterBy);
  }

  onDeleteContact = async (contactId) => {
    await this.props.removeContact(contactId);
  }

  render() {
    const { contacts } = this.props
    return <div className="flex align-center column main-layout contact-page">
      <div className="flex align-center menu-contact">
        <ContactFilter onChangeFilter={this.onChangeFilter} />
        <Link to={'/contact/edit/'}>
          <img src={require('../../assets/icons/add.svg').default} alt="Add" title="Add" className="icon plus-icon" />
        </Link>
      </div>
      {contacts && <ContactList onSelectContact={this.onSelectContact} contacts={contacts} />}
    </div>;
  }
}
const mapStateToProps = (state) => ({
  contacts: state.contactReducer.contacts,
});

const mapDispatchToProps = {
  loadContacts,
  removeContact,
};

export const Contact = connect(mapStateToProps, mapDispatchToProps)(_Contact);
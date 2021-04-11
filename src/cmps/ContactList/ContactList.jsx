import './ContactList.scss'
import { ContactPreview } from '../ContactPreview';

export function ContactList({ contacts, onSelectContact }) {

    return (
        <div className=" main-content main-layout contact-list">
            {
                contacts && contacts.map(contact =>
                    <ContactPreview
                        onSelectContact={onSelectContact}
                        key={contact._id}
                        contact={contact}
                    />)
            }

        </div>
    )
}


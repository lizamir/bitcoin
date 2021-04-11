
import { Component } from 'react'

import './ContactFilter.scss'

export class ContactFilter extends Component {

    state = {
        term: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({ ...this.state })
        })
    }

    render() {
        const { term } = this.state
        return (
            <form className="contact-filter" onSubmit={(ev) => ev.preventDefault()}>
            <input type="text" placeholder="Search contact.." id="term" name="term" value={term} onChange={this.handleChange} />
            </form>

        )
    }
}

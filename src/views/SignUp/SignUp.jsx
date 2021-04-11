
import { Component } from 'react'
import { userService } from '../../services/userService'

import './SignUp.scss'

export class SignUp extends Component {

    state = {
        user: null,
    }

    onSaveUser = async (ev) => {
        ev.preventDefault()
        await userService.signup(this.state.user.name)
        this.props.history.push('/contact')
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ user: { ...prevState.user, [field]: value } }))
    }

    render() {
        return (
            <div className="flex column  justify-center signup-container">
                <h2>Signup for your account</h2>
                <form onSubmit={this.onSaveUser}>
                    <input required type="text" id="name" onChange={this.handleChange} name="name" />
                    <button className="el-btn btn">Signup</button>
                </form>
            </div>
        )
    }
}

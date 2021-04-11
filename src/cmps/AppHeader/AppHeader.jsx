
import { NavLink, withRouter } from 'react-router-dom'


import './AppHeader.scss'

const _AppHeader = (props) => {

    return (
        <div className="flex align-center space-between header-layout app-header">
            <div className="flex align-center logo">
                 <img src={require('../../assets/icons/logo-footer.svg').default} alt="save" className="img-logo" />
            </div>
            <ul className="clean-list flex nav-list" >
                <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active-nav">Contacts</NavLink></li>
                <li><NavLink to="/statistic" activeClassName="active-nav">Statistic</NavLink></li>
                <li><NavLink to="/signup" activeClassName="active-nav">Signup</NavLink></li>
            </ul>
        </div>

    )
}

export const AppHeader = withRouter(_AppHeader)



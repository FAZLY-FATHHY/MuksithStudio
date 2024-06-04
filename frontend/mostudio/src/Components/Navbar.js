import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css';
import logo from '../Assets/Logo.png'

class Navbar extends Component {
    state = { clicked: false };

    handleclick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <nav className='NavbarItems'>
                <img className='navbar-logo' src= {logo} alt="Logo" /> 
              
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems && MenuItems.map((item, index) => (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='menu-icons' onClick={this.handleclick}>
                    {this.state.clicked ? <CloseIcon /> : <MenuIcon />}
                </div>
            </nav>
        );
    }
}

export default Navbar;

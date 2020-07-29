import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import './Menu.css';
import logo from '../../assets/logo.png';

export default function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="logotipo HSRMax"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    )
}
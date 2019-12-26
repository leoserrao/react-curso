import React, { Component } from 'react';

import './styles.css';

/*
Stateless component

const Header = () => (
    <h1>Olá mundo!</h1>
);

Modelo de componente usado a partir de um conceito de estado

class Header extends Component {
    render(){
        return <h1>Olá Brasil!</h1>
    }
}
*/

const Header = () => <header id="main-header">JSHunt</header>;

export default Header;

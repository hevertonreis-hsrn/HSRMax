import React from 'react';
import { FooterBase } from './styles';

import logo from '../../assets/ronin.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/hevertonreis/">
        <img src={logo} alt="Logo Ronin" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;

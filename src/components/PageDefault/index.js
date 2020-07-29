import React from 'react';

import Menu from '../Menu';
import Footer from '../Footer';

import styled from 'styled-components';

const Main = styled.main`
  background-color: #111;
  color: var(--white);
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

export default function PageDefault({ children }) {
    return (
        <>
            <Menu />
                <Main>
                    { children }
                </Main>
            <Footer />
        </>
    )
}
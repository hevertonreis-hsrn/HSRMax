import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

export default function CadastroVideo() {
    return (
        <>
            <PageDefault>
                <h1>Cadastro de Video</h1>

                <Link to="/cadastro/categoria">
                    Ir para Cadastro de Categoria
                </Link>
            </PageDefault>      
        </>
    )
}
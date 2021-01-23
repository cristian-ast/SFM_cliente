import React, { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import BaseDatosProvider from '../context/BaseDatosContext';
import AnunciosProvider from '../context/AnunciosContext';
import Container from '../components/Container';

import AlertaContext from '../context/alertas/alertaContext';
import AuthContext from '../context/autenticacion/authContext';

const IniciarSesion = () => {
    // extraer los valores del context
    // const alertaContext = useContext(AlertaContext);
    // const { alerta, mostrarAlerta } = alertaContext;

    // const authContext = useContext(AuthContext);
    // const { mensaje, autenticado, iniciarSesion } = authContext;

    //   // En caso de que el password o usuario no exista
    //   useEffect(() => {
    //     if(autenticado) {
    //         props.history.push('/proyectos');
    //     }

    //     if(mensaje) {
    //         mostrarAlerta(mensaje.msg, mensaje.categoria);
    //     }
    //     // eslint-disable-next-line
    // }, [mensaje, autenticado, props.history]);

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // extraer de usuario
    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // // Validar que no haya campos vacios
        // if(email.trim() === '' || password.trim() === '') {
        //     mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        // }

        // // Pasarlo al action
        // iniciarSesion({ email, password });
    }

    return (
        <BaseDatosProvider>
            <AnunciosProvider>
                <Container>
                    <Head>
                        <title>Somos SFM - Iniciar Sesión </title>

                        {/*Open Graph / Facebook*/}
                        <meta property="og:title" content="Somos SFM - Iniciar Sesión"/>

                        {/* Twitter */}
                        <meta property="twitter:title" content="Somos SFM - Iniciar Sesión"/>
                    </Head>
                    <div className="inicio">
                        <div className="sub-inicio">
                            <div className="sub-cuerpo">
                                <div className="form-usuario">
                                    <div className="contenedor-form">
                                        <h2>Iniciar Sesión</h2>
                                        <form
                                            onSubmit={onSubmit}
                                        >
                                            <div className="campo-form">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Ingrese su Correo"
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="campo-form">
                                                <label htmlFor="email">Contraseña</label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    placeholder="Ingrese su Contraseña"
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="campo-form">
                                                <input
                                                    type="submit"
                                                    className="btn-iniciar-secion"
                                                    value="Iniciar Sesión"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container> 
            </AnunciosProvider>
        </BaseDatosProvider>
    );
}

export default IniciarSesion;
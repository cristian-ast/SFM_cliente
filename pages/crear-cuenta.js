import React, { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import BaseDatosProvider from '../context/BaseDatosContext';
import AnunciosProvider from '../context/AnunciosContext';
import Container from '../components/Container';

import logo from '../images/logo.jpeg';
import { Description } from '@material-ui/icons';

const CrearCuenta = () => {
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: '',
        repetir: ''
    });

    // extraer de usuario
    const { email, password, repetir } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // state de las alertas
    const [mostrarAlerta, guardarMostrarAlerta] = useState({
        mostrar: false,
        description : "Todos los campos son obligatorios"
    });

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === '' || repetir.trim() === '') {
            
            guardarMostrarAlerta({
                ...mostrarAlerta,
                mostrar: true,
                description : "Todos los campos son obligatorios"
            });

            setTimeout(() => {
              guardarMostrarAlerta({
                ...mostrarAlerta,
                mostrar: false,
                });

            }, 5000);

            return;
        }

        // Validar que las contraseñas sean minino de 6 caracteres
        if(password.length < 6 || repetir.length < 6 ) {
            
            guardarMostrarAlerta({
                ...mostrarAlerta,
                description : "La contraseña debe ser mínimo de 6 caracteres",
                mostrar: true
            });

            setTimeout(() => {
              guardarMostrarAlerta({
                ...mostrarAlerta,
                mostrar: false,
                });

            }, 5000);

            return;
        }

        // Validar que las contraseñas sean iguales
        if(!(password === repetir) ){
            
            guardarMostrarAlerta({
                ...mostrarAlerta,
                description : "La contraseña debe ser iguales en ambos campos",
                mostrar: true
            });

            setTimeout(() => {
              guardarMostrarAlerta({
                ...mostrarAlerta,
                mostrar: false,
                });

            }, 5000);

            return;
        }



    }

    return (
        <BaseDatosProvider>
            <AnunciosProvider>
                <Container>
                    <Head>
                        <meta charset="utf-8" />
                        <title>Somos SFM - Crear Cuenta </title>
                        <meta name="description" content="Página de noticias en la ciudad de San Francisco de Macorís, República Domnicana" />
                        <link rel="icon" href="/favicon.ico" />
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" />
                        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
                        <link href="https://fonts.googleapis.com/css2?family=Redressed&display=swap" rel="stylesheet" />

                        {/*Open Graph / Facebook*/}
                        <meta property="og:title" content="Somos SFM - Iniciar Sesión"/>
                        <meta property="og:description" content="Página de noticias en la ciudad de San Francisco de Macorís, República Domnicana" />
                        <meta property="og:image" content={logo}></meta>

                        {/* Twitter */}
                        <meta property="twitter:title" content="Somos SFM - Iniciar Sesión"/>
                        <meta property="twitter:description" content="Página de noticias en la ciudad de San Francisco de Macorís, República Domnicana"/>
                        <meta property="twitter:image" content={logo}></meta>
                    </Head>
                    <div className="inicio">
                        <div className="sub-inicio">
                            <div className="sub-cuerpo">
                                <div className="form-usuario">
                                    <div className="contenedor-form">
                                        <h2>Crear Cuenta</h2>
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
                                                <label htmlFor="email">Repite tu Contraseña</label>
                                                <input
                                                    type="password"
                                                    id="repetir"
                                                    name="repetir"
                                                    placeholder="Repite tu Contraseña"
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
                                        {mostrarAlerta.mostrar ? <div className="mostrarAlerta">{mostrarAlerta.description}</div> : null}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                </Container> 
            </AnunciosProvider>
        </BaseDatosProvider>
    );
}

export default CrearCuenta;
import React, { createContext, useState } from 'react';

// crear el Contex
export const AuthContext = createContext();

// provider es donde se encuenran las funciones y state
const AuthProvider = (props) => {

    const [ AuthUsuario, GuardarAuthUsuario ] = useState({
        token: null,
        autenticado: null,
        usuario: null,
        mensaje: null
    });

    return (
        <AuthContext.Provider
            value={{
                AuthUsuario,
                GuardarAuthUsuario
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
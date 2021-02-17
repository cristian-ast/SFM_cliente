import emailjs from "emailjs-com";
import React, { useState, Fragment } from 'react';

const ContactForm = () => {

    const [ MensajeAlerta, GuardarMensajeAlerta ] =  useState(false)

    function sendEmail(e) {
        e.preventDefault();

        GuardarMensajeAlerta("Enviando");

        emailjs.sendForm('service_jqqqg2a', 'template_93l8z2u', e.target, 'user_aBlJT1tOKbd3Gmr5rzvfK')
        .then((result) => {
            console.log(result.text);
            GuardarMensajeAlerta("Mensaje enviado Exitosamente");

            setTimeout(() => {
                GuardarMensajeAlerta(false);
            }, 2000);

        }, (error) => {
            console.log(error.text);
            GuardarMensajeAlerta("Hubo un error");

            setTimeout(() => {
                GuardarMensajeAlerta(false);
            }, 2000);
        });
        e.target.reset();
    }

    return(
        <div>
            <div className="Contenedoe-Send_email">
                {MensajeAlerta ? (<h3 className="alerta-email">{MensajeAlerta}</h3>) : 
                <Fragment>
                    <h3>Déjanos un mensaje:</h3>
                    <form onSubmit={sendEmail}>
                        <div className="">
                            <div className="campo-form campo-form-with2">
                                <input type="text" className="form-control" placeholder="Nombre" name="name"/>
                            </div>
                            <div className="campo-form campo-form-with2">
                                <input type="email" className="form-control" placeholder="Correo" name="email"/>
                            </div>
                            <div className="campo-form campo-form-with2">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Escriba su mensaje" name="message"></textarea>
                            </div>
                            <div className="form-group-send">
                                <input type="submit" className="btn-enviar" value="Enviar Mensaje"></input>
                            </div>
                        </div>
                    </form>
                </Fragment>}
            </div>
        </div>
    )
}

export default ContactForm;
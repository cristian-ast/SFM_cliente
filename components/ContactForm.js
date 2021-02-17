import emailjs from "emailjs-com";
import React from 'react';

const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_jqqqg2a', 'template_93l8z2u', e.target, 'user_aBlJT1tOKbd3Gmr5rzvfK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="Contenedoe-Send_email">
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
            </div>
        </div>
    )
}

export default ContactForm;
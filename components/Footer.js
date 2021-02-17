import facebook from '../images/facebook.png';
import gmail from '../images/gmail.png';
import whatsapp from '../images/whatsapp.png';
import ContactForm from './ContactForm';

const Footer = (props) => {
    return (
        <div className="footerComponent">
            <div className="footerComponent-2">
                <ContactForm/>
                <footer className="footer">
                    <div className="contenidoFooter">
                        <div className="redes">
                            <a href="https://facebook.com/victorteinformasfm" target="_blank" rel="noreferrer">
                                <img src={facebook} alt="Facebook" />Facebook
                            </a>
                        </div>
                        <div className="redes">
                            <a href="mailto:victormanueldiazrosado@gmail.com" target="_blank" rel="noreferrer">
                                <img src={gmail} alt="Gmail" /> Gmail
                            </a>
                        </div>
                        <div className="redes">
                            <a href="https://api.whatsapp.com/send?phone=18093158252&text=Buenas" target="_blank" rel="noreferrer">
                                <img src={whatsapp} alt="Whatsapp" /> +1809-315-8252
                            </a>
                        </div>
                        
                    </div>
                    <br/><br/>
                    <div className="despc">
                        San Francisco de Macorís, Duarte, Rep. Dom.
                    </div>
                    <div className="despc">
                        Victor Manuel 2021
                    </div>
                    <br/><br/>
                </footer>
            </div>
        </div>
    )
}

export default Footer;
import Navbar from './Navbar';
import {ThemeProvider} from '@material-ui/core/styles';
import AuthContext from '../context/AuthContext';
import theme from '../temaConfing';
import Footer from './Footer';

const Container = (props) => (
    <AuthContext>
        <ThemeProvider theme={theme}>

            <Navbar/>

            {props.children}

            <Footer/>

        </ThemeProvider> 
    </AuthContext>
);
export default Container;
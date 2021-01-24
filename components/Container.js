import Navbar from './Navbar';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from '../temaConfing';
import Footer from './Footer';

const Container = (props) => (
    <ThemeProvider theme={theme}>

        <Navbar/>

        {props.children}

        <Footer/>

    </ThemeProvider> 
)

export default Container;
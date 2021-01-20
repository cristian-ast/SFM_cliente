import Head from 'next/head';
import Navbar from './Navbar';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from '../temaConfing';
import Footer from './Footer';

const Container = (props) => (
    <ThemeProvider theme={theme}>

        <Head>
            <meta charset="utf-8" />
            <title>Somos SFM</title>
            <meta
              name="description"
              content="Página de noticias en la ciudad de San Francisco de Macorís, República Domnicana"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar/>

        {props.children}

        <Footer/>

    </ThemeProvider> 
)

export default Container;
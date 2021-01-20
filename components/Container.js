import Head from 'next/head';
import Navbar from './Navbar';

const Container = (props) => (
    <div>
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

        <div className="container p-4">
            {props.children}
        </div>
    </div>
)

export default Container;
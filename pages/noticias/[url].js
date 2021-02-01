import BaseDatosProvider from '../../context/BaseDatosContext';
import AnunciosProvider from '../../context/AnunciosContext';
import Container from '../../components/Container';

import AdsComputadora from '../../components/AdsComputadora';
import AdsMovil from '../../components/AdsMovil';

import React, {Fragment} from 'react';
import Head from 'next/head';

const PageNoticia = ({datos}) => {

    const multiploDe3 = (n) => {
        var resto = n % 3;

        if(resto === 0) return true;
        
        else return false;
    }

    let contador = 0;

    const MostarAnuncios = () => {
        contador++
        if (multiploDe3(contador)) {
            return (
                <AdsMovil />
            );
        } else {
            return null;
        }
    }

    return (
        <BaseDatosProvider>
            <AnunciosProvider>
                <Container>
                    <div className="inicio">
                        <div className="cuerpo--noticias">
                            <Head>
                                <title>{datos.titulo}</title>
                                <meta name="description" content={datos.cuerpo[0].slice( 0 , 95) + "..."} />

                                {/*Open Graph / Facebook*/}
                                <meta property="og:title" content={datos.titulo}/>
                                <meta property="og:description" content={datos.cuerpo[0].slice( 0 , 95) + "..."} />
                                <meta property="og:image" content={datos.img}></meta>

                                {/* Twitter */}
                                <meta property="twitter:title" content={datos.titulo}/>
                                <meta property="twitter:description" content={datos.cuerpo[0].slice( 0 , 95) + "..."}/>
                                <meta property="twitter:image" content={datos.img}></meta>

                            </Head>

                            <div className="cuerpo--noticias--cabecera">
                                {datos.video == null 
                                ?
                                  (
                                    <img className="cuerpo--noticias--imagen" src={datos.img} alt="imagen" />
                                  )
                                :
                                  (
                                    <iframe className="cuerpo--noticias--video" src={datos.video} frameborder="0" ></iframe>
                                  )
                                }
                                <div className="cuerpo--noticias--titulo__fecha">
                                    <h1 className="cuerpo--noticias--titulo">{datos.titulo}</h1>
                                    <p className="cuerpo--noticias--fecha">{datos.tipo} {'>>'} {datos.fecha}</p>
                                </div>
                            </div>

                            <div className="cuerpo--noticias--desarrollo">
                                {datos.cuerpo.map((parrafo) => (
                                    <Fragment>
                                        <p key={parrafo} className="cuerpo--noticias--desarrollo--parrafo">{parrafo}</p>
                                        {MostarAnuncios()}
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                        <AdsComputadora />
                    </div>
                </Container> 
            </AnunciosProvider>
        </BaseDatosProvider>
    );
}

PageNoticia.getInitialProps = (ctx) => {
    const baseDatos = {
        noticias : [
          {
            titulo : "Matan a tiros artista urbano francomacorisano MC Yow",
            url : "Matan-a-tiros-artista-urbano-francomacorisano-MC-Yow",
            fecha : "ENERO 30, 2021",
            autor : "Victor Manuel",
            tipo : "Justicia",
            img : "https://festive-fermat-68fe12.netlify.app/static/media/MatanatirosartistaurbanofrancomacorisaoMCYow.197ced95.png",
            video : null,
            cuerpo : [
              "Las autoridades investigan el hecho en el que murió de un disparo de manos de personas hasta el momento desconocidas el rapero francomacorisano conocido en el mundo artístico como “MC Yow”",
              "Se trata de Juan Joel Durán, conocido en el mundo artístico como“MC Yow” quien fue ultimado de un disparo por personas hasta el momento desconocidas que se desplazaban en una camioneta en la urbanización Castellanos de esta ciudad.",
              "En tanto que familiares de Durán descartan que éste tuviera enemigos, por lo que desconocen las razones.",
              "Mientras que miembros de la Policía Nacional se presentaron al lugar a los fines de recolectar información para de inmediato iniciar las investigaciones, junto al Ministerio Publico y  un médico legista para realizar el levantamiento del cadáver y enviarlo a la morgue del hospital San Vicente de Paúl de esta localidad."
            ]
          },
          {
            titulo : "Se entregó el joven Ricky Joel de la Cruz",
            url : "Se-entrego-el-joven-Ricky-Joel-de-la-Cruz",
            fecha : "ENERO 29, 2021",
            autor : "Victor Manuel",
            tipo : "Justicia",
            img : "https://festive-fermat-68fe12.netlify.app/static/media/eljovenRickyJoeldelaCruzquienerabuscado.a1bff4c2.jpg",
            video : null,
            cuerpo : [
              "Se entregó esta tarde en el Palacio de la Policía Nacional en la ciudad capital Distrito Nacional, el joven Ricky Joel de la Cruz, quien era buscado para ser investigado con relación a la muerte de dos jóvenes y un niño, ocurrido en una barbería del sector El Capacito de esta ciudad el pasado lunes.",
              "La Policía Nacional ha realizado varios allanamiento a la vivienda de De La Cruz, sin embargo no fue encontrado en la misma, ubicada en la calle 4 del sector San Martin de Porres (Rabo Chivo).",
              "Miembros del Departamento de Investigaciones Criminales (DICRIM) del cuerpo del orden partieron hacia Santo Domingo a los fines de trasladar el detenido a la ciudad de San Francisco de Macorís, para ser investigado y ponerlo a disposición de la justicia.",
              "Las autoridades investigan el asesinato del niño de dos años Jacob Tejada Mora, su tío Yenier Tejada Dickson y el joven Ranfiel Jimenez, hecho en el que resultaron heridos los nombrados Jeffrey Sanchez Cruz y Luis Angel Bonilla.",
              "Por el hecho la policía busca activamente a Alex Jose Hernandez alias El Flow y a un tal Juan El Santiaguero, señalados como el gatillero y el conductor de la motocicleta, respectivamente."
            ]
          },
          {
            titulo : "SI ESTO YA NO SE JODIÓ, DÍGAME QUE FALTA ENTONCES?",
            url : "SI-ESTO-YA-NO-SE-JODIO-DIGAME-QUE-FALTA-ENTONCES",
            fecha : "ENERO 28, 2021",
            autor : "Victor Manuel",
            tipo : "Justicia",
            img : "https://festive-fermat-68fe12.netlify.app/static/media/SIESTOYANOSEJODI%C3%93D%C3%8DGAMEQUEFALTAENTONCES.f8b7f2f1.jpg",
            video : null,
            cuerpo : [
              "Un preso fue sacado de la Cárcel La Victoria para supuestamente ser intervenido quirúrgicamente en el Hospital Moscoso Puello, pero todo fue una trama para escapar.",
              "Según informe policial, el interno Carlos Alberto Rodríguez fue referido al Hospital Moscoso Puello bajo custodia del cabo Natanael Reyes, las autoridades de la cárcel le otorgaron el permiso, sin imaginarse que había un muñeco armado para un escape.",
              "Resulta que el agente policial ya estando en el Centro de salud, llamó a su superior para comunicarle que el preso Rodríguez se había muerto  cuando era intervenido quirúrgicamente por una gastritis aguda.",
              "Al custodia le pidieron una foto del cadáver para corroborar los hechos, éste sin pensarlo dos veces la envío, pensando que él y el interno lograron con éxito su hazaña, sin embargo fue enviado al centro de salud al primer teniente Peña Reynoso quien fue a contactar todos los detalles y a reconocer el cuerpo, al llegar allí se encontró con una gran sorpresa la imagen que le habían enviado era falsa y el hermano del preso se hizo pasar por él, mientras Rodríguez llegó a escapar.",
              "Al ser cuestionado el cabo indicó que el interno pidió entrará al baño y que supuestamente luego lo encañonó y después lo obligó a montarse con él en un carro hasta conducirlo al sector El Capotillo."
            ]
          },
          {
            titulo : "Estos delincuentes se hacían pasar por miembros de la DNCD",
            url : "Estos-delincuentes-se-hacian-pasar-por-miembros-de-la-DNCD",
            fecha : "ENERO 27, 2021",
            autor : "Victor Manuel",
            tipo : "Justicia",
            img : "https://festive-fermat-68fe12.netlify.app/static/media/Estosdelincuentessehac%C3%ADanpasarpormiembrosdelaDNCD.e7d5f3a6.jpg",
            video : null,
            cuerpo : [
              "Dirección Regional Santo Domingo Oeste arresta cinco civiles y un militar falsos agentes de la DNCD y que formarían parte de una banda de sicarios en Los Alcarrizos. Les ocupan cinco pistolas y otros pertrechos.",
              "Un equipo de policías encabezados por el coronel Franklin Grullon Collado capturaron a seis hombres, incluyendo un militar que se hacían pasar como agentes de la Dirección Nacional de Control de Drogas (DNCD) y a los que les fueron ocupadas cinco pistolas y otros pertrechos y quienes formarían parte una banda de sicarios, de acuerdo a la Policia.",
              "En una operación relámpago realizada por la Dirección Regional Santo Domingo Oeste encabezada por el coronel Franklin Grullon Collado, los seis hombres fueron atrapados en el kilómetro 17 de la autopista Duarte cuando se dirigían por el carrir que conduce a la región Norte del País.",
              "En el operativo fue arrestado Carlos David Matos Fernández, a quien se les ocupó una escopeta marca Saiga con tres cargadores, (32) cartuchos, un cuchillo tipo bayoneta, una pistola marca Glock 26, número PLY907, dos cargadores para la misma, un cargador de 30 cápsulas, un cargador de 17 capsulas, 30 cápsulas 9 milímetros, tres celulares Phone y un carnet de la DNCD.",
              "Así también Javier Jasmil Sánchez Reyes, a quien se les ocupó una pistola marca Glock 17 número KHC851, dos cargadores para la misma, un cargador de 30 cápsulas 9 milímetros y un celular iPhone.",
              "De igual modo Yoanty Javier Segura Ramírez, ocupandole una pistola marca Glock 19 número LUB374, tres cargadores para la misma, 22 cápsulas, un carnet de la DNCD, un carnet de Prensa del canal 19 como corresponsal y dos celulares Phone.",
              "Además el cabo de la Fuerza Aérea de la República Dominicana (FARD) Joniel Bonilla, ocupandole una pistola marca Glock número BPSH553 con dos cargadores para la misma, un cargador de 45 cápsulas 9 milímetros, dos celulares y un carnet de la (FARD).",
              "Junto a los falsos agentes con carnet falsificados, fueron arrestados los nombrados, Samil Alberto Perdoma y Sergio Antonio Méndez sin ninguna identificación, quienes dijeron ser supuestos informantes."
            ]
          },
          {
            titulo : "Hallan mujer italiana muerta dentro de una nevera en Punta Cana",
            url : "Hallan-mujer-italiana-muerta-dentro-de-una-nevera-en-Punta-Cana",
            fecha : "ENERO 22, 2021",
            autor : "Victor Manuel",
            tipo : "Justicia",
            img : "https://festive-fermat-68fe12.netlify.app/static/media/UnamujerdenacionalidaditalianafuehalladamuertaM.f73ed20e.png",
            video : null,
            cuerpo : [
              "Una mujer de nacionalidad italiana fue hallada muerta dentro de un refrigerador en su vivienda  en un residencial de Bávaro.",
              "Claudia Lopone, italiana, pero residente en el país fue encontrada muerta dentro de una nevera en la casa en la que vivía, en un residencial de la zona de Bávaro.",
              "El encargado la Dirección Central de Investigaciones Criminales de la Policía Nacional en esta localidad, Frank Teófilo Valenzuela, dijo que por el hecho hay dos personas de origen italiano, para fines de investigación.",
              "Hay dos personas detenidas para investigación sobre el caso de una italiana que fue encontrada sin vida dentro de un refrigerador en la zona de Bávaro, adelantó el oficial policial.",
              "Explicó que los apresados son también Italianos, mientras que hay un dominicano al que buscan por su presunta participación en el hecho. Detalló que la señora Claudia Lopone, italiana pero residente en el país fue encontrada muerta dentro de una nevera en la casa en la que vivía, en un residencial de la zona de Bávaro.",
              "Las autoridades no detallaron si la fémina fue asesinada o encerrada viva en el refrigerador."
            ]
          },
          {
            titulo : "PN y ERD desmantelan gallera clandestina en Los Miches de Dajabón",
            url : "PN-y-ERD-desmantelan-gallera-clandestina-en-Los-Miches-de-Dajabon",
            fecha : "ENERO 22, 2021",
            autor : "Victor Manuel",
            tipo : "Justicia",
            img : "https://festive-fermat-68fe12.netlify.app/static/media/PNyERDdesmantelangalleraclandestinaM.f980fc5c.jpeg",
            video : null,
            cuerpo : [
              "PN y ERD desmantelan gallera clandestina en Los Miches de Dajabón; ocupan motocicletas y otras evidencias. ",
              "Dajabón. -Miembros de la Policía Nacional y del Ejército de la República Dominicana desmantelaron ayer una gallera clandestina que operaba en la comunidad el Cerro de Juan Calvo, de la sección Los Miches, en la ciudad fronteriza de Dajabón. ",
              "En el lugar, donde varios individuos jugaban gallos y lograron escapar, fueron dejadas abandonadas cinco motocicletas, cuatro tanques plásticos pequeños con botellas de cerveza y de agua, dos gallos vivos y dos muertos, además de cuatro vasijas con comida. ",
              "En cuanto a las evidencias encontradas, fueron llevadas al Departamento de la Policía de Dajabón, donde se procederá a depurar las motocicletas, a fin de identificar sus propietarios y proceder a su búsqueda para apresarlos y someterlos a la justicia."
            ]
          },
          {
            titulo : "Incendio en Serum Institute of India",
            url : "Incendio-en-Serum-Institute-of-India",
            fecha : "ENERO 21, 2021",
            autor : "Victor Manuel",
            tipo : "Actualidad",
            img : "https://festive-fermat-68fe12.netlify.app/static/media/Unincendioseregistr%C3%B3lama%C3%B1anaM.ffe67b4e.jpg",
            video : null,
            cuerpo : [
              "Un incendio se registró la mañana de este jueves en la compañía india de biotecnología y productos farmacéuticos, Serum Institute of India, el mayor fabricante de vacunas del mundo, según imágenes mostradas en la televisión local.",
              "En el Serum Institute of India se producen al momento lotes de millones de dosis de la vacuna contra el covid-19 desarrollada por AstraZeneca y la universidad de Oxford, sin embargo, de acuerdo a los reportes de medios que captaron la catástrofe, un colaborador de la empresa aseguró que la producción no se verá afectada.",
              "“No afectará la producción de la vacuna Covid-19”, dijo a AFP una fuente de la empresa, agregando que el incendio se produjo en una nueva planta en construcción, ubicada en la ciudad de Pune, en el estado de Maharashtra, en el oeste de India."
            ]
          },
          {
            titulo : "Aclara desconocidos usurpan nombre de general Then para estafar",
            url : "Policia-Nacional-aclara-desconocidos-usurpan-nombre-de-general-Then-para-estafar",
            fecha : "ENERO 17, 2021",
            autor : "Victor Manuel",
            tipo : "Justicia",
            img : "http://condescending-borg-7b7585.netlify.app/static/media/AclaradesconocidosusurpanM.e09a4b5e.jpg",
            video : null,
            cuerpo : [
              "A través del DICAT realiza investigación para identificar las cuentas de redes sociales y números telefónicos utilizados para ese tipo de delito.",
              "Santiago RD, 16 de enero 2021.- Nuestra Policía Nacional hizo la aclaración que desaprensivos se están dedicando a utilizar el nombre del Director Regional Cibao Central, para estafar a los ciudadanos solicitándoles dinero en efectivo a cambio de gestionar la supuesta libertad de los detenidos por violentar el toque de queda.",
              "En una nota de prensa la Policía en Santiago exhortó a los ciudadanos a ser precavidos  y a no dejarse confundir por personas que a través de  las redes sociales usurpan el nombre  del general de brigada Eduardo Alberto Then,  haciendo  falsas promesas para estafar y conseguir dinero de esa manera ilícita.",
              "El cuerpo del orden precisó que esa acción contraria a la ética y lineamientos institucional  nunca ha sido ni será patrocinada por general Then, ya que desde su designación como Director Regional ha venido trabajando para hacer cumplir las leyes y que los ciudadanos respeten el decreto presidencial que establece el toque de queda y las medidas de sanidad impuestas para evitar la propagación del Covid-19.",
              "En ese sentido, la Policía hace el llamado a los ciudadanos para que denuncien ante las autoridades las cuentas de redes sociales y los números telefónicos, a través de las cuales  utiliza el nombre del General Then para engañar y estafar.",
              "Comunicó además, que el Departamento de Investigación de Crímenes y Delitos de Alta Tecnología (DICAT) ya abrió una investigación para identificar y apresar a las personas que se dedican a realizar ese tipo de acción delictiva.",
              "SUBDIRECCION DE COMUNICACIONES ESTRATGICAS DE LA POLICIA NACIONAL, DIRECCIOM REGIONAL CIBAO CENTRAL"
            ]
          },
          {
            titulo : "Detienen a ramon antonio simó alias mantonio por agredir a palos a señora",
            url : "Detienen-a-ramon-antonio-simo-alias-mantonio-por-agredir-a-palos-a-senora",
            fecha : "ENERO 17, 2021",
            autor : "Victor Manuel",
            tipo : "Justicia",
            img : "http://condescending-borg-7b7585.netlify.app/static/media/DetienenaramonantonioM.1918aea1.jpg",
            video : null,
            cuerpo : [
              "Miches - Detienen a ramon antonio simó alias mantonio por agredir a palos a la señora yanaira severino mientras esta buscaba a su hijo que se encotraba en una pelea con el hijo de este. ",
              "Mantonio agredio a yanaira severino con un palo mandandola al hospital, gracias a Dios la señora esta bien de salud solo le quedan las cicatrices, abajo hay una imagen cuando la mando al hospital y otra imagen actual tomada hoy y enviada a nuestra redaccion por la señora severino, esperamos que le caiga todo el peso de la ley a este señor",
              "Gracias al poder de las redes sociales hoy esta detenido este señor. ",
              "NO VIOLENCIA CONTRA LA MUJER!"
            ]
          },
          {
            titulo : "Recuerda que hoy, a partir del mediodía, hay que quedarse en casa",
            url : "Recuerda-que-hoy-a-partir-del-mediodia-hay-que-quedarse-en-casa",
            fecha : "ENERO 16, 2021",
            autor : "Victor Manuel",
            tipo : "Justicia",
            img : "http://condescending-borg-7b7585.netlify.app/static/media/Recuerdaquehoyapartirdelmediod%C3%ADaM.2bb3a4d5.jpg",
            video : null,
            cuerpo : [
              "No te dejes sorprender, recuerda que el horario del toque de queda por la vida de este sábado 16 y mañana domingo 17, inicia a las 12:00 del mediodía, con libre tránsito hasta las 3:00 de la tarde.",
              "Es importante que aproveches cada minuto de tu tiempo esta mañana para realizar las actividades cotidianas que ameriten estar fuera de tu residencia, antes que comience el horario restringido, pues violentarlo amerita detención y sanciones administrativas con presentación ante un juez, por lo que como servidores de complimiento de ley no queremos que pases por esa situación.",
              "Trabajamos unidos y en orden para salvar vidas."
            ]
          },
          {
            titulo : "Senador Héctor Acosta pide libre tránsito en toque de queda",
            url : "Senador-Hector-Acosta-pide-libre-transito-en-toque-de-queda",
            fecha : "ENERO 15, 2021",
            autor : "Victor Manuel",
            tipo : "Actualidad",
            img : "http://condescending-borg-7b7585.netlify.app/static/media/SenadorH%C3%A9ctorAcostapidelibretr%C3%A1nsitoM.61d28dd5.jpg",
            video : null,
            cuerpo : [
              "A la queja por el toque de queda que se aplica en el país se sumó hoy el senador de la provincia Monseñor Noel, quien consideró es mejor   permitir el libre tránsito siempre que se eviten las aglomeraciones.",
              "Héctor Acosta consideró que el país debe verse en el espejo de otras naciones que en lugar de encerrar a la gente lo que se hace es mejor la aplicación de los protocolos de distanciamiento y el uso de las mascarillas.",
              "“No podemos trancar a la gente, ni tampoco entrar en sus casas a buscarlos porque están compartiendo. Se puede hacer un toque de queda con movilidad, y diciéndole a los bares y restaurantes que límite la cantidad de personas”, dijo.",
              "El senador perremeista destacó que las personas tienen derecho a caminar, ejercitarse, respirar y compartir, pero enfatizándole que deben protegerse sin tener que hacer uso de la violencia o atropellos.",
              "“Mi gobierno ha dicho que la policía está cansada y si continuamos encerrando a la gente seguirán las alteraciones y confrontaciones de civiles y los agentes debido al estrés mutuo”, expresó.",
              "Acosta entiende que, de seguir manteniendo el encierro de la gente, los hechos de violencia continuarán, productos del estrés y podría dar al traste con una escalada social que podría no tener control, por lo cual hay que evitarla a toda costa.",
              "“Yo temo que como van las cosas halla un desbordamiento social sin control producto del cansancio, las reacciones violentas y la falta de producción de recursos económicos”, consideró Acosta.",
              "Es lamentable que a las personas muchas de ellas con situaciones reales que se le han presentado, se les aprese y luego se les obligue a pagar una multa que es injusta por demás."
            ]
          },
          {
            titulo : "Joven oriunda en de Santo Domingo perdió la vida de manera inesperadamente",
            url : "Joven-oriunda-en-de-Santo-Domingo-perdio-la-vida-de-manera-inesperadamente",
            fecha : "ENERO 15, 2021",
            autor : "Victor Manuel",
            tipo : "Actualidad",
            img : "http://condescending-borg-7b7585.netlify.app/static/media/JovenoriundaendeSantoM.7cb7a2e6.jpg",
            video : null,
            cuerpo : [
              "Una joven oriunda en de Santo Domingo y quien por mucho tiempo laboró en algunos centros de diversiones de la ciudad de La Romana,  perdió la vida de manera inesperadamente y en plena juventud.",
              "La joven Khyara Yolanda Castellano Ogando, fue muy querida por amigas y amigos que con ella llegaron a compartir. Muchos ellos todavía se les hace difícil creer que ha fallecido.",
              "La joven sufría de asma y lamentablemente perdió la vida esta mañana de un infarto al miocardio en la ciudad de Santo Domingo.",
              "-Una gran muchacha amiga y excelente ser humano con una educación en igualable, dice en un comentario una joven que la conocía.",
              "El asma es una peligrosa enfermedad del aparato respiratorio que se caracteriza por una respiración anhelosa y difícil, tos, sensación de ahogo y ruidos sibilantes en el pecho."
            ]
          },
          {
            titulo : "Un contingente policial detiene a un delivery durante el toque de queda",
            url : "Un-contingente-policial-detiene-a-un-delivery-durante-el-toque-de-queda",
            fecha : "ENERO 14, 2021",
            autor : "Victor Manuel",
            tipo : "Justicia",
            img : "http://condescending-borg-7b7585.netlify.app/static/media/UncontingentepolicialdetieneaM.8af570e5.jpg",
            video : null,
            cuerpo : [
              "Testigos califican como abuso"
            ]
          },
          {
            titulo : "Echan a Bruce Willis de una farmacia al negarse a llevar mascarilla",
            url : "Echan-a-Bruce-Willis-de-una-farmacia-al-negarse-a-llevar-mascarilla",
            fecha : "ENERO 11, 2021",
            autor : "Victor Manuel",
            tipo : "Farándula",
            img : "http://condescending-borg-7b7585.netlify.app/static/media/Echan-a-Bruce-Willis-de-una-farmaciaM.7be10aeb.jpg",
            video : null,
            cuerpo : [
              "LUEGO QUE ESTA SITUACIÓN SE HICIERA TENDENCIA, EL ARTISTA DECIDIÓ",
            ]
          },
          {
            titulo : "Más de RD$92 millones por multas toque de queda",
            url : "Mas-de-RD$92-millones-ha-cobrado-el-Ministerio-Publico-por-multas-toque-de-queda",
            fecha : "ENERO 11, 2021",
            autor : "Victor Manuel",
            tipo : "Justicia",
            img : "http://condescending-borg-7b7585.netlify.app/static/media/M%C3%A1sRD$92millonesM.7cc66ffe.jpeg",
            video : null,
            cuerpo : [
              "El Ministerio Público informó este lunes que  han cobrado un total RD$92.7 millones por sanciones a personas y negocios, que violentan las disposiciones sanitarias para mitigar los contagios del Covid-19 en el país.",
              "Mediante un comunicado, el órgano persecutor de la justicia indicó que las personas arrestadas por violar el toque de queda impuesto por el Gobierno y que tengan dificultades económicas para cubrir el monto de la multa correspondiente, podrán realizar trabajo comunitario, siempre que logren la autorización de un juez competente.",
              "Así lo dispone una instrucción impartida por la procuradora general de la República, Miriam Germán Brito, a todos los miembros del Ministerio Público.",
              "“En caso de verificar que el pago de una multa constituiría una imposibilidad para el imputado, que soliciten al juez competente la conversión de la multa en trabajo comunitario, de utilidad pública o interés comunitario en una institución estatal u organización sin fines de lucro”, dice.",
              "El instructivo, acompañado de las referencias al marco legal correspondiente, dispone que los agentes de la Policía Nacional deben presentar, “sin demora y sin falta”, por ante el Ministerio Público a toda persona arrestada por violación al toque de queda y a las medidas relativas a las aglomeraciones de más de 10 personas en espacios públicos y privados de uso público.",
              "Dichas restricciones, que se extienden hasta el 21 de este mes, se corresponden con lo dispuesto por el Decreto 7-21, emitido por el Poder Ejecutivo el pasado 8 de enero.",
              "La instrucción de la magistrada Germán Brito establece los montos a imponer a los ciudadanos y los negocios que desacaten las medidas dispuestas por las autoridades para contener la expansión de la COVID-19, provocada por el coronavirus SARS-CoV-2, y que afecta a la humanidad desde el año pasado.",
              "Los transeúntes que violen las medidas deberán pagar RD$1,000; los motociclistas RD$2,000; una persona que se desplace en un vehículo RD$5,000 y una persona sorprendida en un centro o espacio de diversión RD$2,000.",
              "Un bar, restaurante o un centro o espacio de diversión, así como una fiesta privada que viole las medidas implicará una sanción de RD$100,000.",
              "El propietario o responsable de un autobús que transporte personas será sancionado con RD$50,000; el de un vehículo de carga RD$30,000 y el de una gallera RD$100,000.",
              "Cuando el cúmulo de faltas exceda los RD$100,000, “en ningún caso el monto no precisado podrá ser inferior a RD$100,000”.",
              "Desde que se estableció el toque de queda, a la Procuraduría General de la República ha ingresado un monto de RD$92,655,290 por sanciones impuestas a personas y negocios que violentan las disposiciones sanitarias.",
              "De esos RD$92.7 millones, un total de RD$6.4 millones ingresaron en abril; RD$13.6 millones en mayo; RD$8.4 millones en junio; RD$1.9 millones en julio; RD$6.9 millones en agosto; RD$8.8 millones en septiembre; RD$11.8 millones en octubre; RD$13.5 millones en noviembre y RD$21.3 millones en diciembre.",
              "La Procuraduría General de la República recordó que mantiene su respaldo permanente a las medidas dispuestas por las autoridades sanitarias para enfrentar la pandemia de la COVID-19.",
            ]
          },
          {
            titulo : "PN arresta a 1,225 personas por violar el toque de queda",
            url : "PN-arresta-a-1225-personas-por-violar-el-toque-de-queda",
            fecha : "ENERO 11, 2021",
            autor : "Victor Manuel",
            tipo : "Justicia",
            img : "https://condescending-borg-7b7585.netlify.app/static/media/PNarrestaa1225personasM.1229c667.jpeg",
            video : null,
            cuerpo : [
              "La Policía Nacional informó este lunes que en la jornada de ayer domingo arrestó a 1,225 persona por violar el toque de queda impuesto por el Gobierno para mitigar los contagios de COVID-19.",
              "Mediante un comunicado, la entidad indicó que de esa cantidad de personas 372 fueron sometidas a sanciones administrativas por ni utilizar mascarillas.",
              "De igual forma señaló que en la misma jornada, 20 negocios fueron cerrados y 588 motocicletas y 129 vehículos propiedad de los infractores, fueron retenidos.",
              "Según el informe de la PN, la mayoría de apresamientos fueron en el Distro Nacional con 193 personas, seguidas de 122 en Santo Domingo Oeste y 96 en Santo Domingo Este.",
              "Mientras que, en Santiago hubo 86 detenciones, seguidas de 72 en Santo Domingo Norte y 67 en Barahona. La Policía Nacional reiteró su llamado a la población de respetar las medidas impuestas para evitar mayor propagación del referido virus."
            ]
          },
          {
            titulo : "Ministro pide a agentes no “atropellar” a ciudadanos durante apresamientos",
            url : "Ministro-de-Interior-y-Policia-pide-a-agentes-no-atropellar-a-ciudadanos-durante-apresamientos",
            fecha : "ENERO 10, 2021",
            autor : "Victor Manuel",
            tipo : "Justicia",
            img : "https://condescending-borg-7b7585.netlify.app/static/media/MinistropideaagentesM.a99025d0.jpeg",
            video : null,
            cuerpo : [
              "Jesús Vásquez Martínez, ministro de Interior y Policía. El ministro de Interior y Policía, Jesús Vásquez (Chú), exhortó la tarde de este domingo a los agentes que participan en labores de patrullaje durante el toque de queda a “no cometer atropellos contra las personas” al momento de su detención.",
              "Sus palabras llegan justo en momento en que las redes sociales tienen varios videos de excesos y agresiones de parte de los policías y militares cuando detienen a ciudadanos por violar el decreto presidencial que busca reducir el contagio del COVID-19.",
              "“Si bien es cierto la población debe contribuir cada día para respetar el trabajo de @PoliciaRD , de igual forma exhortamos a los agentes a no cometer atropellos de ninguna índole contra ningún ciudadano al momento de ser detenido por el toque de queda”, dijo en su cuenta de Twitter @chuvasquez",
              "Precisamente este domingo se ha hecho viral un video de un hombre que fue apresado frente a su familia en una villa que había alquilado para pasar estos días “para evitar estar en la calle”, según sus palabras.",
              "El hombre fue apresado casi desnudo (estaba en traje de baño) y le pedía a los agentes que le permitieran ponerse ropa, lo cual no logró. Otra cosa que ocurrió durante el hecho fue que algunos de los agentes que acudieron al lugar, en varios vehículos, penetraron a la villa.",
              "Cuando el hombre exigió hacer una llamada “como lo establece la ley” le fue negada y le dijeron que “haría su llamada” cuando estuviera en el destacamento.",
              "El video fue compartido por el artista Wason Brazobán en su cuenta de Instagram con el mensaje: “Ya esto es un abuso!!! Una gente que rentan una villa y están en familia ! También está prohibido compartir en familia privado ? Hasta donde es que van a llegar ? Quieren que él ser humano se vuelva loco y de deprima ? Abusadores!!!”."
            ]
          },
          {
            titulo : "Allanan casa exadministrador de Edenorte en La Vega",
            url : "Allanan-casa-exadministrador-de-Edenorte-en-La-Vega",
            fecha : "ENERO 10, 2021",
            autor : "Victor Manuel",
            tipo : "Justicia",
            img : "https://condescending-borg-7b7585.netlify.app/static/media/allanamientoM.8b09b041.jpeg",
            video : null,
            cuerpo : [
              "Fue allanada durante 9 horas la residencia del ex administrador de la Empresa Distribuidora de Electricidad del Norte (Edenorte), Julio César Correa Mena, en el residencial Don Bartolo, en La Vega.",
              "Correa Mena, quien se desempeñó como administrador de Edenorte durante los ochos de gobierno de Danilo Medina, supuestamente es investigado por actos de corrupción en dicha institución.",
              "El operativo fue realizado por la Procuraduría Especializada de Persecución de la Corrupción Administrativa (Pepca), en conjunto con agentes policiales SWAT.",
              "La Procuraduría General de la República no se ha referido aún al allanamiento en la residencia del exfuncionario.",
              "Correa es también miembro del Comité Central del Partido de la Liberación Dominicana (PLD)."
            ]
          },
          {
            titulo : "Presidente viaja hoy a Elías Piña a recorrer zona fronteriza",
            url : "Presidente-viaja-hoy-a-Elias-Pina-a-recorrer-zona-fronteriza",
            fecha : "ENERO 10, 2021",
            autor : "Victor Manuel",
            tipo : "Actualidad",
            img : "https://condescending-borg-7b7585.netlify.app/static/media/viajeafronteraM.dd16c12b.jpeg",
            video : null,
            cuerpo : [
              "El presidente Luis Abinader viaja este domingo a la provincia de Elias Piña, donde realizará un recorrido por la zona fronteriza.",
              "La actividad está pautada para iniciar a las 10:00 de la mañana, según informó la Dirección de Comunicación.",
              "El sábado el Presidente realizó una visita a la Primera Brigada del Ejército Nacional.",
              "Allí anunció que en las próximas semanas informará la forma en que serán aumentados los salarios para los miembros de las Fuerzas Armadas."
            ]
          },
          {
            titulo : "Asociación de Bares de la Zona Colonial convocan cacerolazo este martes",
            url : "Asociacion-de-Bares-de-la-Zona-Colonial-convocan-cacerolazo-este-martes",
            fecha : "ENERO 9, 2021",
            autor : "Victor Manuel",
            tipo : "Economía",
            img : "https://condescending-borg-7b7585.netlify.app/static/media/Asociacion-de-Bares-deM.b10f8069.jpeg",
            video : null,
            cuerpo : [
              "La Asociación de Bares de la Zona Colonial convocó este sábado a un cacerolazo en el Distrito Nacional, en busca de protesta contra el Gobierno por las medidas establecidas como prevención de contagio al coronavirus.",
              "«Este toque de queda se ha convertido en toque de quiebra, para las medianas y pequeñas empresas, los emprendedores , no pueden respirar, luego de haber invertido y aplicado , con sacrificio, protocolos de bioseguridad, el estado dominicano aplica un nuevo toque de queda en un horario imposible para trabajar, negocios cerrados, miles de personas desempleadas, miles de empleos indirectos perdidos.’’ Explicaron en un comunicado publicado en las redes sociales.",
              "De igual forma aseguran que las actuales medidas están propiciando aglomeraciones en el metro, en los supermercados, en las paradas de guaguas, en los bancos. ‘’Este toque de queda nos está asfixiando’’ destacaron.",
              "La convocatoria, que busca se les permita trabajar a los negocios pequeños y medianos, es para el próximo martes 12 de enero a las 8:30 PM."
            ]
          },
          {
            titulo : "Onamet advierte que vaguada producirá aguaceros sobre el país este miércoles",
            url : "Onamet-advierte-que-vaguada-producira-aguaceros-sobre-el-pais-este-miercoles",
            fecha : "ENERO 6, 2021",
            autor : "Victor Manuel",
            tipo : "Actualidad",
            img : "https://condescending-borg-7b7585.netlify.app/static/media/onametadviertequeM.d90e0bab.jpeg",
            video : null,
            cuerpo : [
              "La Oficina Nacional de Meteorología (Onamet) pronosticó que para este miércoles las condiciones del tiempo no experimentarán cambios significativos en gran parte del territorio nacional.",
              "En su informe del tiempo la Onamet indicó que solo debido a una vaguada ubicada al oeste de Puerto Rico, se estarán generando algunos incrementos nubosos con lluvias dispersas.",
              "La Onamet precisó que el referido fenómeno producirá, además, aisladas ráfagas de viento sobre las regiones: noreste, sureste y algunos puntos aislados de la región suroeste.",
              "El órgano meteorológico adelantó que para mañana jueves, seguimos con la incidencia de la vaguada provocando algunas lluvias débiles a moderadas principalmente en el noreste, sureste y la cordillera Central. En el resto del territorio continuaremos con escasas lluvias."
            ]
          },
          {
            titulo : "Gobierno cede y permite oficializaciones de cultos y misas en iglesias",
            url : "Gobierno-cede-y-permite-oficializaciones-de-cultos-y-misas-en-iglesias",
            fecha : "ENERO 5, 2021",
            autor : "Victor Manuel",
            tipo : "Actualidad",
            img : "https://condescending-borg-7b7585.netlify.app/static/media/gobiernocedeypermiteM.b749c4cd.jpeg",
            video : null,
            cuerpo : [
              "El Gobierno anunció este martes que nueva vez se permite la apertura y la celebración de las actividades de las diferentes iglesias o denominaciones religiosas de todo tipo.",
              "La información fue ofrecida mediante el decreto número 2-21, el cual establece que dichas actividades podrán realizarse tres veces a la semana, guardando los horarios establecidos por el  toque de queda y acatando los protocolos de prevención contra el Covid-19.",
              "“Se deroga el artículo 10 del Decreto núm. 740-20 del 30 de diciembre de 2020, que dispone el cese de actividades de las diferentes iglesias o denominaciones religiosas de todo tipo”, indica la comunicación.",
              "«Se permite la apertura y celebración de actividades de las diferentes iglesias y otras denominaciones religiosas, las cuales podrán realizarse tres veces a la semana, guardando los horarios establecidos para el toque de queda y acatando los protocolos generales y sectoriales vigentes contra la COVlD-19»."
            ]
          }
        ]
    };

    const URLactual = ctx.query.url;

    const datos = baseDatos.noticias.find(({ url }) => url === URLactual);

    return {datos}
}

export default PageNoticia;
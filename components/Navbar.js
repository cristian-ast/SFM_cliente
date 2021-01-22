import React from 'react';

import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import usuario from '../images/user.png';

import HomeIcon from '@material-ui/icons/Home';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import PolicyIcon from '@material-ui/icons/Policy';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PollIcon from '@material-ui/icons/Poll';

//import InfoIcon from '@material-ui/icons/Info';
//import ContactsIcon from '@material-ui/icons/Contacts';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

import NavDrawer from './Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {

  const classes = useStyles();


  return (
    <div id ="do">
      <div className="navbar--moviles">
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <NavDrawer />
            </IconButton>
              <Typography variant="h6" className={classes.title} style={{flexGrow: 1 }}>
                Somos SFM
              </Typography>
              <Button color="inherit"><img className="logoUsuario" src={usuario} alt="usuario"/></Button>
          </Toolbar>
        </AppBar>
      </div>
      
      <div className="navbar--computadoras">

        <div className="navbar--computadoras--nombre">
          <p>Somos SFM</p>
        </div>

        <div className="navbar--computadoras--division">
          <p>|</p> 
        </div>

        <Link href="/">
          <div className="navbar--computadoras--boton">
              <HomeIcon style={{ fontSize: 20 }}/> <p>Inicio</p> 
          </div>
        </Link>
        
        <Link href="/Actualidad">
          <div className="navbar--computadoras--boton" >
            <ImportContactsIcon style={{ fontSize: 20 }} /> <p>Actualidad</p> 
          </div>
        </Link>
        
        <Link href="/Deportes">
          <div className="navbar--computadoras--boton">
            <SportsCricketIcon style={{ fontSize: 20 }} /> <p>Deportes</p> 
          </div>
        </Link>
        
        <Link href="/Justicia">
          <div className="navbar--computadoras--boton">
            <PolicyIcon style={{ fontSize: 20 }} /> <p>Justicia</p> 
          </div>
        </Link>
        
        <Link href="/Farandula">
          <div className="navbar--computadoras--boton">
            <MusicNoteIcon style={{ fontSize: 20 }} /> <p>Farándula</p> 
          </div>
        </Link>
        
        <Link href="/Economia">
          <div className="navbar--computadoras--boton">
            <PollIcon style={{ fontSize: 20 }} /> <p>Economía</p> 
          </div>
        </Link>
        
        <div className="navbar--computadoras--division">
          <p>|</p> 
        </div>

        {/* <Link href="/Sobre-Nosotros">
          <div className="navbar--computadoras--boton">
            <InfoIcon style={{ fontSize: 20 }} /> <p>Sobre Nosotros</p> 
          </div>
        </Link> */}
        
        {/* <Link href="/Contacto">
          <div className="navbar--computadoras--boton">
            <ContactsIcon style={{ fontSize: 20 }} /> <p>Contacto</p> 
          </div>
        </Link> */}
        
        <Link href="/Politicas-De-Uso">
          <div className="navbar--computadoras--boton">
            <VerifiedUserIcon style={{ fontSize: 20 }} /> <p>Politicas de uso</p> 
          </div>
        </Link>
        

        <div className="navbar--computadoras--division">
          <p>|</p> 
        </div>

        <Button color="inherit"><img className="logoUsuario" src={usuario} alt="usuario"/></Button>

      </div>
    </div>
  )
}

export default Navbar;
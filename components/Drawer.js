import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

import HomeIcon from '@material-ui/icons/Home';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import PolicyIcon from '@material-ui/icons/Policy';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PollIcon from '@material-ui/icons/Poll';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const NavDrawer = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      
        <Link href="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary={"Inicio"} />
          </ListItem>
        </Link>
        
        <Link href="/Actualidad">
          <ListItem button>
            <ListItemIcon>
              <ImportContactsIcon/>
            </ListItemIcon>
            <ListItemText primary={"Actualidad"} />
          </ListItem>
        </Link>
        
        <Link href="/Deportes">
          <ListItem button>
            <ListItemIcon>
              <SportsCricketIcon/>
            </ListItemIcon>
            <ListItemText primary={"Deportes"} />
          </ListItem>
        </Link>
        
        <Link href="/Justicia">
          <ListItem button>
            <ListItemIcon>
              <PolicyIcon/>
            </ListItemIcon>
            <ListItemText primary={"Justicia"} />
          </ListItem>
        </Link>
        
        <Link href="/Farandula">
          <ListItem button>
            <ListItemIcon>
              <MusicNoteIcon/>
            </ListItemIcon>
            <ListItemText primary={"Farándula"} />
          </ListItem>
        </Link>
        
        <Link href="/Economia">
          <ListItem button>
            <ListItemIcon>
              <PollIcon/>
            </ListItemIcon>
            <ListItemText primary={"Economía"} />
          </ListItem>
        </Link>
        
   
      </List>
      <Divider />
      <List>
        
      <Link href="/Politicas-De-Privacidad">
        <ListItem button>
          <ListItemIcon>
            <VerifiedUserIcon/>
          </ListItemIcon>
          <ListItemText primary={"Políticas de Privacidad"} />
        </ListItem>
      </Link>
        

      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true) } />
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default NavDrawer;
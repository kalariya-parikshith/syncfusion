import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRight from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#292C60',
    marginLeft: '7%'
  },
  toolbar: theme.mixins.toolbar,
  list: {
    marginTop: '30%',
    marginBottom: '0'
  },
  item: {
    fontSize: '0.8rem',
    color: '#ffffff',
    fontWeight: 400,
    width: '100%'
  },
  listItem: {
    paddingLeft: '0',
    paddingRight: '0',
    width: '100%',
    paddingLeft: '20%',
    backgroundColor: 'rgb(51, 55, 114)'
  },
  bottomListItem: {
    paddingLeft: '0',
    paddingRight: '0',
    width: '100%',
    paddingLeft: '20%'
  },
  bottomItem: {
    fontSize: '1rem',
    color: '#ffffff',
    fontWeight: 700
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper
        }}
        anchor='left'
      >
        <div />
        <List className={classes.list}>
          {[
            'Spend Reports',
            'Team Report',
            'Recruiting Efficiency',
            'MSP Efficiency',
            'Candidate Pipeline Report'
          ].map((text, index) => (
            <ListItem button key={text} className={classes.listItem}>
              <ListItemText
                primary={text}
                classes={{ primary: classes.item }}
              />
            </ListItem>
          ))}
          {['Vendor Reports'].map((text, index) => (
            <ListItem button key={text} className={classes.bottomListItem}>
              <ListItemText
                primary={text}
                classes={{ primary: classes.bottomItem }}
              />
              <ChevronRight style={{ color: '#2C9BC5' }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default PermanentDrawerLeft;

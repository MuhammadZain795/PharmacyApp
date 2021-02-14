// import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import db from './firebase';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Button, ListItemIcon, Modal } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
function Medicine(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openModal, setOpenModal]=useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    const handleClose = ()=>{
        setOpenModal(false);
    };

    const handleOpne=()=>{
        setOpenModal(!openModal);
    };
  
    return (
        <>
        <Modal
            open={openModal}
            onClose={handleOpne}
        >
            <div>
                <h1>open</h1>
                <button onClick={handleOpne}>Modal</button>
            </div>
        </Modal>
      <List className={classes.root}>
        <ListItem button onClick={handleClick}>
          <ListItemText primary={props.medicine.medicine} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary={props.medicine.price} secondary={props.medicine.count} />
            </ListItem>
            <ListItemIcon>
                <EditIcon onClick={e => handleOpne(true)}/>
            </ListItemIcon>
            <ListItemIcon>
                <DeleteIcon onClick={event => {db.collection('medicines').doc(props.medicine.id).delete()}}/>
            </ListItemIcon>
          </List>
        </Collapse>
      </List>
      </>
    );
  }

export default Medicine;
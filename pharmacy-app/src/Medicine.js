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
import { Button, ListItemIcon, Modal, FormControl, InputLabel, Input } from '@material-ui/core';


const useStylesModal = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

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
    const classesModal = useStylesModal();
    const [open, setOpen] = React.useState(false);
    const [openModal, setOpenModal]=useState(false);
    const [inputMed, setInputMed]=useState('');
    const [inputPrice, setInputPrice]=useState('');
    const [inputCount, setInputCount]=useState('');

    const handleClick = () => {
      setOpen(!open);
    };

    const handleClose = ()=>{
        setOpenModal(false);
    };

    const handleOpne=()=>{
        setOpenModal(!openModal);
    };

    const updateMedicine=()=>{
        setOpenModal(!openModal);
    }
  
    return (
        <>
        <Modal
            open={openModal}
            onClose={handleOpne}
        >
            <div className={classesModal.paper}>
                <h1>I am Modal</h1>
                <form>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input value={inputMed} onChange={event=>setInputMed(event.target.value)}/>
                    </FormControl>
                    <FormControl>
                    <InputLabel>Price</InputLabel>
                    <Input value={inputPrice} type="number" onChange={event=>setInputPrice(event.target.value)}/>
                    </FormControl>
                    <FormControl>
                    <InputLabel>Count</InputLabel>
                    <Input value={inputCount} type="number" onChange={event=>setInputCount(event.target.value)}/>
                </FormControl>
                <Button disabled={!inputMed} disabled={!inputPrice} disabled={!inputCount}  type="submit" onClick={handleOpne} variant="contained" color="primary">
                Update
                </Button>
            </form>
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
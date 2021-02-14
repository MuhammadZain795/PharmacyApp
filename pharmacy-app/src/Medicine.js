import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import db from './firebase';

function Medicine(props) {
    return (
        <ul>{props.medicine.medicine}</ul>
        // <List className="list_class">
        //     <ListItem>
        //         <ListItemAvatar>
        //         </ListItemAvatar>
        //         <ListItemText primary={props.medicine.medicine} secondary="Deadline"/>
        //     </ListItem>
        //     {/* <Button onClick={event => db.collection('medicines').doc(props.text.id).delete()}>Delete</Button> */}
        // </List>
    );
}

export default Medicine;
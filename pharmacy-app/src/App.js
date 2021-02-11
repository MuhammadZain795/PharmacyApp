import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import React , {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [medicines, setMedicines]=useState([]);
  const [input, setInput]=useState('');

  // useEffect(()=>{
  //   db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
  //     setTodos(snapshot.docs.map(doc=> ({id: doc.id ,todo: doc.data().task})))
  //   })
  // }, []);

  const addMedicine=(event)=>{
    //to prevent refreshing of the page on clicking enter...
    event.preventDefault();
    // db.collection('todos').add({
    //   task:input,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // })

    setMedicines([...medicines, input])
    setInput('')
  }

  return (
    <div className="App">
      <h1>
        Pharmacy App
      </h1>
      <form>
        <FormControl>
          <InputLabel>Add</InputLabel>
          <Input value={input} onChange={event=>setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addMedicine} variant="contained" color="primary">
          Add
        </Button>
      </form>
      <ul>
        {medicines.map(medicine=>(
          <li>{medicine}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

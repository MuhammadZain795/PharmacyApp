import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import React , {useEffect, useState} from 'react';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import Medicine from './Medicine';

function App() {
  const [medicines, setMedicines]=useState([]);
  const [inputMed, setInputMed]=useState('');
  const [inputPrice, setInputPrice]=useState('');
  const [inputCount, setInputCount]=useState('');

  useEffect(()=>{
    db.collection('medicines').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setMedicines(snapshot.docs.map(doc=> ({id: doc.id ,medicine: doc.data().medicine, price: doc.data().price, count: doc.data().count})))
    })
  }, []);

  const addMedicine=(event)=>{
    //to prevent refreshing of the page on clicking enter...
    event.preventDefault();
    db.collection('medicines').add({
      medicine:inputMed,
      price:inputPrice,
      count: inputCount,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMedicines([...medicines, input])
    setInputMed('');
    setInputPrice('');
    setInputCount('');
  }

  return (
    <div className="App">
      <h1>
        Pharmacy App
      </h1>
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
        <Button disabled={!inputMed} disabled={!inputPrice} disabled={!inputCount}  type="submit" onClick={addMedicine} variant="contained" color="primary">
          Add
        </Button>
      </form>
      <ul>
        {medicines.map(medicine=>(
          <Medicine medicine={medicine}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
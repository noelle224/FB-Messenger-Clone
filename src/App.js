
import { Button, Input , FormControl, InputLabel, FormHelperText} from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase/compat/app';

function App() {
  const[input, setInput] = useState("");
  const[messages, setMessages] = useState([
    {username : 'bhavika', message : "hey whats up"}, 
    {username : 'deepika', message : "hey whats up"}
  ]);
  const[username, setUsername] = useState('');

  const inputHandler = (event) => {
   event.preventDefault();
   setInput(event.target.value);
  }

  useEffect(() => {
   db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
     setMessages(snapshot.docs.map(doc => ({id : doc.id , message : doc.data()} )))
   })
   }, [])


  useEffect(() => {
   setUsername(prompt('Please enter your name'));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message : input,
      username : username,
      timestamp : firebase.firestore.FieldValue.serverTimestamp() 
    })
    setInput('');
  }

  return (
    <div className="App">
      <img className="logo" src="https://static-prod.adweek.com/wp-content/uploads/2017/08/facebook-messenger-logo.jpg"/>
    <h1>Hello,{username} Welcome to the messenger ;)</h1>

    <form className='app__form'>

    <FormControl>
  <InputLabel>Enter a message...</InputLabel>
  <Input onChange={inputHandler} value={input}/>
  <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
  </FormControl>
   
    </form>
    

    {
      messages.map(({id,message}) => (
        <Message key = {id} username={username} message={message}/>
      ))
    }

    </div>
  );
}

export default App;

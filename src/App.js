import React, {useState, useCallback} from 'react';
import AllMessages from './Message/AllMessages';
import Form from './Form/Form';
import Modal from './Modal/Modal';
import './App.css';

import firebase from 'firebase/app';
import db from './firebase';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  const getIsAuth = useCallback(e => {
    e.preventDefault();
    setIsAuth(true);
    db.collection('messages').orderBy('timeStamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
      })));
      window.scrollTo(0, document.body.scrollHeight);
    });
  }, []);

  const sendMessage = useCallback(e => {
    e.preventDefault();
    db.collection('messages').add({
      text: input.trim(),
      user: username,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
    window.scrollTo(0, document.body.scrollHeight);
  }, [username, input]);

  return (
    <div className="App">
      {isAuth ?
        <>
          <AllMessages messages={messages} username={username}/>
          <Form onSubmit={sendMessage} onChange={setInput} value={input}/>
        </>
      :  
        <Modal username={username} setUsername={setUsername} getIsAuth={getIsAuth} />
      }
    </div>
  );
}

export default App;

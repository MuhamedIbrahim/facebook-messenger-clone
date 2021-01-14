import React from 'react';
import './Modal.css';

const Modal = ({username, setUsername, getIsAuth}) => {
    return (
        <div className="modal">
            <div className="modal__content">
                <h2>Enter your chatting name</h2>
                <form onSubmit={e => getIsAuth(e)}>
                    <input placeholder="Your name" type="text" value={username} onInput={e => setUsername(e.target.value)} />
                    <button disabled={!username} type="submit">Enter</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
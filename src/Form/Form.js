import React from 'react';
import SendIcon from '@material-ui/icons/Send';

const Form = ({value, onChange, onSubmit}) => {
    return (
        <form onSubmit={onSubmit} className="App__form">
            <input autoComplete="off" className="App__form__input" placeholder="Aa" value={value} onInput={e => onChange(e.target.value)} id="message" />
            <button className="App__form__button" disabled={!value} type="submit">
            <SendIcon className="App__form__button__svg"/>
            </button>
        </form>
    );
};

export default Form;
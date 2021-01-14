import React, {forwardRef} from 'react';
import './Message.css';

const Message = forwardRef(({message, username, extraClass}, ref) => {
    const isUser = message.user === username;
    return (
        <div ref={ref} className={`message ${isUser ? 'message--user' : 'message--others'} ${extraClass}`}>
            <span className="message__user">{!isUser && (extraClass !== 'message--inner' && extraClass !== 'message--outer_bottom') && (message.user || 'Other')}</span>
            <span className="message__text">{message.text}</span>
        </div>
    );
});

export default Message;
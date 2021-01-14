import React, {useState, useEffect} from 'react';
import FlipMove from 'react-flip-move';
import Message from './Message';

const AllMessages = React.memo(({messages, username}) => {
    const [messageClasses, setMessageClasses] = useState([]);

    useEffect(() => {
        let classesArray = [];
        if(messages.length !== 0) {
          messages.forEach((msg, index) => {
            if(index === 0) {
              if(messages[index + 1]) {
                classesArray.push(msg.data.user === messages[index + 1].data.user ? 'message--outer_top' : '');
              } else {
                classesArray.push('');
              }
            } else {
              if(msg.data.user === messages[index - 1].data.user) {
                if(messages[index - 2]) {
                  if(msg.data.user !== messages[index - 2].data.user) {
                    classesArray[index - 1] = 'message--outer_top';
                  }
                }
                if(messages[index + 1]) {
                  if(msg.data.user === messages[index + 1].data.user) {
                    classesArray.push('message--inner');
                  } else {
                    classesArray.push('message--outer_bottom');
                  }
                } else {
                  classesArray.push('message--outer_bottom');
                }
              } else {
                classesArray.push('');
              }
            }
          });
          setMessageClasses(classesArray);
        }
      }, [messages]);

    return (
        <div className="App__all_messages">
            <FlipMove>
                {messages.map((msg, index) => (
                    <Message
                        key={msg.id}
                        username={username}
                        message={msg.data}
                        extraClass={messageClasses[index]}
                    />
                ))}
            </FlipMove>
        </div>
    );
});

export default AllMessages;
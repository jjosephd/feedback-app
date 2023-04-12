import React from 'react';
import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextUpdate = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be more than 10 characters');
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  return (
    <Card>
      <h2>Rate your experience:</h2>
      <div className="input-group">
        <input
          onChange={handleTextUpdate}
          type="text"
          placeholder="Write a Review"
          value={text}
        />

        <Button type="submit" isDisabled={btnDisabled}>
          Send
        </Button>
      </div>
      {message && <div className="message">{message}</div>}
    </Card>
  );
};

export default FeedbackForm;

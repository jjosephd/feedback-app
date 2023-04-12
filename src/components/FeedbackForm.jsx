import React from 'react';
import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextUpdate = (e) => {
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
    </Card>
  );
};

export default FeedbackForm;

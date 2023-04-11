import React from 'react';
import Card from './shared/Card';
import { useState } from 'react';

const FeedbackForm = () => {
  const [text, setText] = useState('');

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
        <button type="submit">Send</button>
      </div>
    </Card>
  );
};

export default FeedbackForm;

import React from 'react';

function FeedbackStats({ feedback }) {
  //Calculate avg rating score
  let average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Feedback Score: {average}</h4>
    </div>
  );
}

export default FeedbackStats;

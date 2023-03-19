import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback }) {
    
    {/*If there is no feedback object or feedback object length = 0 return paragraph */}

    if (!feedback || feedback.length === 0) {
        return <p>No feedback Yet</p>
    }


    return (
        <div className="feedback-list">

            {/*map through feedback array which is a prop that has already been called. Item iterates thru feedback to give us feedbackitem */}

            {feedback.map((item) => (
              
                <FeedbackItem key={item.id} item={item} />
            ))}
              {/* */}
      </div>
  )
}

export default FeedbackList

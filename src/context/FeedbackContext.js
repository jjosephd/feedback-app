import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    edit: false,
    item: {},
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  //Fetch Feedback data

  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    );

    const data = await response.json();
    setFeedback(data);
    setLoading(false);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Set item to be updated to add feedback, delete feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      edit: true,
    });
  };

  const addFeedback = (newFeedback) => {
    {
      /**Create unique ID using uuid hook */
    }
    newFeedback.id = uuidv4();
    {
      /**Create a new array using '...' spread operater that renders previous feedback and placing into array with newFeedback*/
    }
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        loading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

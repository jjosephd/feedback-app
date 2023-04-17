import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/feedbackdata';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

function App() {
  {
    /*App- level state (global) that can be passed down to child components

In this case, feedback is created as state using FeedbackData which has been imported above*/
  }

  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
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
    <Router>
      {/**Using React router v6 library  to create direct route to JSX elements. exact path "/" is typically going to be index/landing page*/}
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAddition={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink></AboutIconLink>
      </div>
    </Router>
  );
}

export default App;

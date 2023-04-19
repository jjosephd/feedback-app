import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { FeedbackProvider } from './context/FeedbackContext';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

function App() {
  {
    /*App- level state (global) that can be passed down to child components

In this case, feedback is created as state using FeedbackData which has been imported above*/
  }

  return (
    <FeedbackProvider>
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
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink></AboutIconLink>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>
          This application was built using react to leave feedback for a product
          or service.
        </p>
        <p>Version 1.0.1</p>
        <p>
          <Link to="/">Return Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;

import { AiFillQuestionCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const AboutIconLink = () => {
  return (
    <div className="about-link">
      <Link to="/about">
        <AiFillQuestionCircle size={30} />
      </Link>
    </div>
  );
};

export default AboutIconLink;

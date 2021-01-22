import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

import './Stars.scss';

const Stars = ({ stars }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return <span className="stars">{tempStars}</span>;
};

export default Stars;

import './Title.scss';

const Title = ({ title }) => {
  return (
    <div className="title pb-4">
      <div className="title__line"></div>
      <h3 className="title__heading">{title}</h3>
      <div className="title__line"></div>
    </div>
  );
};

export default Title;

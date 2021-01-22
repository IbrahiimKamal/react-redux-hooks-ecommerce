import './Title.scss';

const Title = ({ title }) => {
  return (
    <section className="pb-2">
      <div className="container title">
        <div className="title__line"></div>
        <h3 className="title__heading">{title}</h3>
        <div className="title__line"></div>
      </div>
    </section>
  );
};

export default Title;

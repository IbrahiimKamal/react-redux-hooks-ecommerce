import './Stores.scss';

const Stores = ({ image, title }) => {
  return (
    <div className="store">
      <img src={image} alt="our store" className="store__image" />
      <div className="store__overlay"></div>
      <p className="store__title">{title}</p>
    </div>
  );
};

export default Stores;

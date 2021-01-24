import './Category.scss';

const Category = ({ title, image }) => {
  return (
    <div className="category">
      <img src={image} alt="category" className="category__image" />
      <button className="btn category__btn">{title}</button>
    </div>
  );
};

export default Category;

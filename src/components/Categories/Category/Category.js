import categoryBg from '../../../assets/images/categories/category3.jpg';

import './Category.scss';

const Category = ({ title }) => {
  return (
    <div className="category">
      <img src={categoryBg} alt="category" className="category__image" />
      <button className="btn category__btn">{title}</button>
    </div>
  );
};

export default Category;

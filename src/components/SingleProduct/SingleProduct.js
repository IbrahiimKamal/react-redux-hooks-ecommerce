import Gallery from '../Gallery/Gallery';
import SingleProductInfo from './SingleProductInfo/SingleProductInfo';
import Title from '../Title/Title';

import Hero from '../Hero/Hero';
import ClientSlider from '../ClientSlider/ClientSlider';

const SingleProduct = ({ singleProduct }) => {
  const {
    image,
    gallarey,
    id,
    name,
    brand,
    price,
    stars,
    desription,
  } = singleProduct;

  return (
    <>
      <section className="py-5">
        <div className="container">
          <Title title={name} />
          <div className="row py-5">
            <div className="col-10 col-md-6 mx-auto">
              <Gallery id={id} image={image} gallarey={gallarey} />
            </div>
            <div className="col-10 col-md-6 mx-auto">
              <SingleProductInfo
                name={name}
                brand={brand}
                price={price}
                stars={stars}
                desription={desription}
                id={id}
              />
            </div>
          </div>
        </div>
      </section>
      <Hero
        subtitleHeading="extra"
        subtitleFooter="online"
        offer="30% off"
        title="lifestyle collection"
        text="free shipping on orders over $99"
      />
      <ClientSlider />
    </>
  );
};

export default SingleProduct;

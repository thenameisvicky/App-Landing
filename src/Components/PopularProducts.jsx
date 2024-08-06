import { products } from '../Constants';
import PopularProductCard from '../MainComponent/PopularProductCard';

const PopularProducts = () => {
  return (
    <section id="products" className="px-4 md:px-8 mt-12 md:mt-16">
      <div className="flex flex-col justify-start gap-5 max-w-7xl mx-auto">
        <h2 className="font-bold font-palanquin text-3xl md:text-4xl">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="text-gray-400 font-montserrat lg:max-w-lg mt-2">Experience the Top-Class quality and style with our collections <br /> Discover a world of comfort and design.</p>
        <div className="mt-16 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;

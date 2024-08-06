import {products} from '../Constants'
import PopularProductCard from '../MainComponent/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-bold font-palanquin text-4xl">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="text-gray-400 font-montserrat lg:max-w-lg mt-2 ">Experince the Top-Class quality and style with our collections <br/> Discover a world of comfort and design.</p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product)=>(
          <PopularProductCard key={product.name} {...product}/>
        ))}
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
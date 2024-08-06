import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../MainComponent/Button";

const SpecialOffer = () => {
  return (
    <section className="px-4 md:px-8 mt-12 md:mt-16 flex flex-col xl:flex-row justify-between items-center gap-10 max-w-7xl mx-auto">
      <div className="flex-1">
        <img src={offer} alt="Shoe Promotion" className="w-full max-w-md object-contain" />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="font-palanquin text-3xl md:text-4xl font-bold"><span className="text-coral-red">Special Offer</span></h2>
        <p className="mt-4 lg:max-w-lg text-gray-400">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="mt-6 lg:max-w-lg text-gray-400">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="mt-6 flex gap-4">
          <Button label="Shop now" icon={arrowRight} />
          <button className="px-6 py-3 border border-coral-red rounded-full text-slate-gray hover:bg-coral-red hover:text-white transition">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;

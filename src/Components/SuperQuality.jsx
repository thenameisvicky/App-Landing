import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../MainComponent/Button";

const SuperQuality = () => {
  return (
    <section id="about-us" className="px-4 md:px-8 mt-12 md:mt-16 flex flex-col lg:flex-row justify-between items-center gap-10 max-w-7xl mx-auto">
      <div className="flex flex-col flex-1">
        <h2 className="font-palanquin text-3xl md:text-4xl font-bold">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h2>
        <p className="mt-4 lg:max-w-lg text-gray-400">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="mt-6 lg:max-w-lg text-gray-400">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-6">
          <Button label="View details" icon={arrowRight} />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="" className="w-full max-w-md object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;

import Button from "../MainComponent/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../Constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../MainComponent/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section id="home" className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 px-4 md:px-8">
      <div className="relative flex flex-col justify-center items-start w-full xl:w-2/5 pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer collections</p>
        <h1 className="mt-10 font-palanquin text-4xl md:text-6xl lg:text-8xl font-bold">
          <span className="relative z-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-3 mb-3 max-w-xs sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label="Shop now" icon={arrowRight} />
        <div className="flex gap-8 mt-3">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-bold text-2xl md:text-4xl font-palanquin">{stat.value}</p>
              <p className="leading-5 text-gray-400 font-semibold font-montserrat">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen py-20 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="Shoe" width={500} height={500} className="object-contain relative z-10" />
        <div className="flex gap-4 sm:gap-6 absolute bottom-[-12%] sm:left-[10%] px-4 sm:px-0">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => setBigShoeImg(shoe)} bigShoeImg={bigShoeImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Button from "../MainComponent/Button";

const Subscribe = () => {
  return (
    <section className="px-4 md:px-8 mt-12 md:mt-16 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <h3 className="text-3xl md:text-4xl leading-normal lg:max-w-md font-palanquin font-bold">
          Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
        </h3>
        <div className="lg:max-w-lg w-full flex items-center gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
          <input type="text" placeholder="subscribe@nike.com" className="input border-none" />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label="Sign Up" fullWidth />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

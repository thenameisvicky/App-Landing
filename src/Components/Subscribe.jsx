import Button from "../MainComponent/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex flex-col lg:flex-row justify-between items-center gap-6"
    >
      <h3 className="text-3xl md:text-4xl leading-snug md:leading-[68px] font-palanquin font-bold text-center lg:text-left">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="w-full lg:max-w-[40%] flex flex-col sm:flex-row items-center gap-4 p-2 border border-slate-gray rounded-lg">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="flex-1 w-full text-base leading-normal text-slate-gray pl-4 py-2 border-none outline-none rounded-md"
        />
        <div className="w-full sm:w-auto">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

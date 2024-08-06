import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../MainComponent/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container" >
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className="flex flex-col">
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'><span className='text-coral-red'>Special</span> Offer</h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' icon={arrowRight} />
          <button className="flex  items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-white rounded-full text-slate-gray border-coral-red hover:scale-105 transform duration-300">Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
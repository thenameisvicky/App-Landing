import { star } from "../assets/icons"

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full p-2 rounded-lg transition transform duration-300 hover:scale-105 hover:border-gray-300 hover:bg-gray-100 hover:border ">
    <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
    <div className=" mt-8 flex justify-start  gap-2.5">
        <img src={star} alt="rating" width={24} height={24}/> <p className="font-montserrat text-xl leading-normal text-slate-gray"  >(4.5)</p>
    </div>
    <h3 className="mt-3 text-2xl font-montserrat font-medium" >{name}</h3>
    <p className="mt-2 text-coral-red font-montserrat font-semibold" >{price}</p>
  </div>
  )
}

export default PopularProductCard
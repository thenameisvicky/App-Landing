const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350] sm:min-w-[350] w-full rounded-3xl shadow-3xl px-10 py-10">
     <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
     <img src={imgURL} alt={label} width={24} height={24}/>
     </div>
     <h3 className="font-bold text-3xl leading-normal font-palanquin mt-3 mb-3 " >{label}</h3>
     <p className="text-slate-gray mt-3 break-words font-montserrat text-ld leading-normal" >{subtext}</p>
    </div>
  )
}

export default ServiceCard
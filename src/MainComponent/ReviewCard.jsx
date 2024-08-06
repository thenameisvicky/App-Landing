import { star } from "../assets/icons"

const ReviewCard = ({imgURL,customername,rating,feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col" >
        <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]" />
        <p className="info-text max-w-sm text-center mt-5" >{feedback}</p>
        <div className="mt-5"><img src={star}  width={24} height={24} className="object-contain m-0"/><p className="mt-3 font-montserrat text-slate-gray">({rating})</p></div>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold" >{customername}</h3>
    </div>
  )
}

export default ReviewCard
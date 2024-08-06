import { services } from "../Constants"
import ServiceCard from "../MainComponent/ServiceCard"

const Services = () => {
  return (
    <section className=" flex flex-wrap gap-10 justify-center">
      {services.map((service)=>(
          <ServiceCard key={service.label} {...service}/>
        ))}
    </section>
  )
}

export default Services
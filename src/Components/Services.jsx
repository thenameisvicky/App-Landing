import { services } from "../Constants";
import ServiceCard from "../MainComponent/ServiceCard";

const Services = () => {
  return (
    <section className="px-4 md:px-8 mt-12 md:mt-16 flex flex-col gap-10 max-w-7xl mx-auto">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;

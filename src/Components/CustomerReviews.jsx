import { reviews } from "../Constants";
import ReviewCard from "../MainComponent/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="px-4 md:px-8 mt-12 md:mt-16 max-w-7xl mx-auto">
      <h3 className="font-palanquin text-3xl md:text-4xl font-bold text-center">What Our <span className="text-coral-red">Customers</span> Say?</h3>
      <p className="m-auto mt-4 max-w-lg text-center info-text">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="mt-12 grid gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;

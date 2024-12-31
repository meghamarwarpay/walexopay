import Image from "next/image";
import img1 from '../../assets/pinkcityimg/userman.png'; // Update with male image
import img2 from '../../assets/pinkcityimg/userman.png'; // Update with another male image

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Arvind P.',
      role: 'Verified Customer',
      feedback:
        'Shopping on WalexoPay has been a great experience! The quality of the products is top-notch, and the delivery is always on time. Highly recommend!',
      image: img1, // Male image
    },
    {
      name: 'Raghav S.',
      role: 'Frequent Shopper',
      feedback:
        'Customer support is excellent. I had an issue with my order, and they resolved it quickly. I am very satisfied with the service.',
      image: img2, // Another male image
    },
    {
      name: 'Vikas K.',
      role: 'New Customer',
      feedback:
        'I found everything I needed on WalexoPay. The website is easy to navigate, and I love the variety of products available. Definitely coming back!',
      image: img1, // Male image
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center text-pink mb-4">What Our Customers Say</h1>
      <p className="text-center text-secondary mb-5">
        Our customers love us! Here's what some of our male customers have to say about their experience shopping on PinkCity.
      </p>

      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle mb-3"
                  style={{ width: '100px', height: '100px' }}
                />
                <h5 className="card-title text-dark">{testimonial.name}</h5>
                <h6 className="text-muted">{testimonial.role}</h6>
                <p className="card-text text-secondary mt-3">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import './Triptypes.css';
import honeymoon from '../../assets/honeymoon.jpg';
import family from '../../assets/family.jpg';
import adventure from '../../assets/adventure.jpg';
import cultural from '../../assets/cultural.jpg';
import wildlife from '../../assets/wildlife.jpg';
import luxury from '../../assets/luxury.jpg';
import beach from '../../assets/beach.jpg';

function TripTypes() {
  const packages = [
    { 
      title: 'Honeymoon',
      image: honeymoon,
      description: 'Romantic getaways with luxurious stays, candlelight dinners, and breathtaking views.',
      pricing: 'Starting at Ksh 50,000 per couple',
    },
    { 
      title: 'Family',
      image: family,
      description: 'Fun-filled vacations perfect for all ages, with family-friendly activities and accommodations.',
      pricing: 'Starting at Ksh 30,000 per family',
    },
    { 
      title: 'Adventure',
      image: adventure,
      description: 'Thrill-seeking experiences like hiking, zip-lining, and white-water rafting.',
      pricing: 'Starting at Ksh 20,000 per person',
    },
    { 
      title: 'Cultural Tours',
      image: cultural,
      description: 'Immersive journeys into local traditions, history, and authentic cultural experiences.',
      pricing: 'Starting at Ksh 15,000 per person',
    },
    { 
      title: 'Wildlife Safaris',
      image: wildlife,
      description: 'Up-close encounters with Africa’s iconic wildlife in stunning national parks.',
      pricing: 'Starting at Ksh 40,000 per person',
    },
    { 
      title: 'Luxury Vacations',
      image: luxury,
      description: 'Top-tier accommodations, private tours, and bespoke travel experiences.',
      pricing: 'Starting at Ksh 100,000 per person',
    },
    { 
      title: 'Beach Holidays',
      image: beach,
      description: 'Relaxing escapes to sun-soaked shores with crystal-clear waters.',
      pricing: 'Starting at Ksh 35,000 per person',
    },
  ];

  return (
    <div className="trip-types-container">
      <h1>Discover Our Trip Packages</h1>
      <div className="trip-types-grid">
        {packages.map((pkg, index) => (
          <div className="trip-card" key={index}>
            <img src={pkg.image} alt={pkg.title} />
            <h3>{pkg.title}</h3>
            <p>{pkg.description}</p>
            <p className="pricing">{pkg.pricing}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripTypes;


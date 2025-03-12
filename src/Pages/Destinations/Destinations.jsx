import './Destinations.css';
import mtKenya from '../../assets/mt-kenya.jpg';
import ruwenzori from '../../assets/mt-ruwenzori.jpg';
import lakeNakuru from '../../assets/Lake-nakuru.jpg';
import tsavo from '../../assets/Tsavo-national-park.jpg';
import nairobiPark from '../../assets/Nairobi-national-park.jpg';
import coastalKenya from '../../assets/Costal-kenya.jpg';

function Destinations() {
  return (
    <div className="destinations-container">
      <h1>Explore Our Destinations</h1>
      <div className="destinations-grid">
        
        <div className="destination-card">
          <img src={mtKenya} alt="Mt. Kenya" />
          <h3>Mt. Kenya</h3>
          <p>A breathtaking hike to Africa’s second-highest peak.</p>
          <p>Group: Ksh 5,000 | Solo: Ksh 3,000</p>
          <button>View Details</button>
        </div>

        <div className="destination-card">
          <img src={ruwenzori} alt="Mt. Ruwenzori" />
          <h3>Mt. Ruwenzori</h3>
          <p>The mystical "Mountains of the Moon" with lush landscapes.</p>
          <p>Group: Ksh 5,000 | Solo: Ksh 3,500</p>
          <button>View Details</button>
        </div>

        <div className="destination-card">
          <img src={lakeNakuru} alt="Lake Nakuru" />
          <h3>Lake Nakuru</h3>
          <p>Famous for flamingos and diverse wildlife.</p>
          <p>Group: Ksh 4,000 | Solo: Ksh 2,500</p>
          <button>View Details</button>
        </div>

        <div className="destination-card">
          <img src={tsavo} alt="Tsavo National Park" />
          <h3>Tsavo National Park</h3>
          <p>Kenya’s largest park, home to elephants and lions.</p>
          <p>Group: Ksh 6,000 | Solo: Ksh 4,000</p>
          <button>View Details</button>
        </div>

        <div className="destination-card">
          <img src={nairobiPark} alt="Nairobi National Park" />
          <h3>Nairobi National Park</h3>
          <p>A unique safari just outside Nairobi city.</p>
          <p>Group: Ksh 3,000 | Solo: Ksh 2,000</p>
          <button>View Details</button>
        </div>

        <div className="destination-card">
          <img src={coastalKenya} alt="Coastal Kenya" />
          <h3>Coastal Kenya</h3>
          <p>White sandy beaches and rich Swahili culture.</p>
          <p>Group: Ksh 7,000 | Solo: Ksh 5,000</p>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
}

export default Destinations;



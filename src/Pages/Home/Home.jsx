import './Home.css';
import coastalKenya from '../../assets/Costal-kenya.jpg'; // Double-check if the file name should be "Coastal-kenya.jpg"
import mtKenya from '../../assets/mt-kenya.jpg';
import ruwenzori from '../../assets/mt-ruwenzori.jpg';
import lakeNakuru from '../../assets/Lake-nakuru.jpg'; // Fixed variable name
import tsavo from '../../assets/Tsavo-national-park.jpg';
import nairobiPark from '../../assets/Nairobi-national-park.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img 
          src={coastalKenya} 
          alt="Safari Adventure" 
          className="hero-image" 
        />
        <div className="hero-text">
          <h1>Explore the world with us</h1>
          <p>Best safaris and adventures await you!</p>
          <button>Start Exploring</button> 
        </div>
      </div>

      <div className="about-section">
        <h2>About Zaph Tours</h2>
        <p>
          At Zaph Tours, we turn dreams into unforgettable adventures. Whether you're exploring Kenya’s pristine beaches, 
          venturing on a safari through iconic national parks, or immersing yourself in vibrant local cultures, we’ve got you covered.
        </p>
        <p>
          Our experienced guides and personalized itineraries ensure you make the most out of every journey. 
          We are passionate about showcasing the beauty of nature, the richness of wildlife, and the warmth of Kenyan hospitality.
        </p>
        <p>
          Join us and let Zaph Tours take you on an experience of a lifetime!
        </p>
      </div>

      <div className="destinations-section">
        <h2>Featured Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img src={mtKenya} alt="Mt. Kenya" />
            <h3>Mt. Kenya</h3>
            <p>
               A majestic peak standing tall as Africa’s second-highest mountain, perfect for hiking and wildlife spotting.
              </p>
            <p>Starting from Ksh5,000</p>
            
          </div>
          <div className="destination-card">
            <img src={ruwenzori} alt="Mt. Ruwenzori" />
            <h3>Mt. Ruwenzori</h3>
            <p>
               Known as the "Mountains of the Moon," this lush, mist-covered range offers stunning landscapes and unique flora.
            </p>
            <p>Starting from Ksh5,000</p>
          </div>
          <div className="destination-card">
            <img src={lakeNakuru} alt="Lake Nakuru" />
            <h3>Lake Nakuru</h3>
            <p>
              Famous for its vibrant flamingos and rich wildlife, this beautiful lake is a haven for bird watchers and nature lovers.
            </p>
            <p>Starting from Ksh5,000</p>
          </div>
          <div className="destination-card">
            <img src={tsavo} alt="Tsavo National Park" />
            <h3>Tsavo National Park</h3>
            <p>
               One of Kenya’s largest parks, home to diverse wildlife including elephants, lions, and dramatic volcanic landscapes.
            </p>
            <p>Starting from Ksh5,000</p>
          </div>
          <div className="destination-card">
            <img src={nairobiPark} alt="Nairobi National Park" />
            <h3>Nairobi National Park</h3>
            <p>
               A unique safari experience just outside the capital city, where you can spot wildlife against a city skyline.
            </p>
            <p>Starting from Ksh3,000</p>
          </div>
          <div className="destination-card">
            <img src={coastalKenya} alt="Coastal Kenya" />
            <h3>Coastal Kenya</h3>
            <p>
               White sandy beaches, turquoise waters, and a rich Swahili culture make this an idyllic tropical getaway.
            </p>
            <p>Starting from Ksh7,000</p>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;

import './Contact.css';

function ContactUs() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Our Information</h2>
        <p>Email: zaphtours123@gmail.com</p>
        <p>Phone: +254 115 547 079</p>
        <p>Address: Zaph Towers, Muranga, Kenya</p>
      </div>

      <div className="map">
        <h2>Our Location</h2>
        <iframe 
          title="map"
          src="https://maps.google.com/maps?q=nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="office-hours">
        <h2>Office Hours</h2>
        <p>Monday - Friday: 9 AM - 6 PM</p>
        <p>Saturday: 10 AM - 3 PM</p>
        <p>Sunday: Closed</p>
      </div>

      <div className="social-links">
        <h2>Follow Us</h2>
        <a href="#" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/elkido_official/" target="_blank">Instagram</a>
        <a href="#" target="_blank">Twitter</a>
      </div>
    </div>
  );
}

export default ContactUs;


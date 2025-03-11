import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div>
        <footer class="footer-section">
    <div class="footer-container">
        <div class="footer-links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="Home">Home</a></li>
                <li><a href="Destinations">Destinations</a></li>
                <li><a href="triptypes">Triptypes</a></li>
                <li><a href="contact-us">Contact-us</a></li>
            </ul>
        </div>

        <div class="footer-contact">
            <h3>Contact Us</h3>
            <p><i class="fas fa-map-marker-alt"></i> Zaph Tours, Muranga, Kenya</p>
            <p><i class="fas fa-envelope"></i> zaphtours123@gmail.com</p>
            <p><i class="fas fa-phone"></i> +254 115 547 079</p>
        </div>

        <div class="footer-social">
            <h3>Follow Us</h3>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/elkido_official/"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <p>&copy; 2025 Zaph Tours.</p>
    </div>
</footer>

    </div>
  )
}

export default Footer
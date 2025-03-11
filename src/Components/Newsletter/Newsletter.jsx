import React from "react";
import './Newsletter.css';

function Newsletter() {
  return (
    <div>
        <div>
        <section class="newsletter-section">
            <h2>Stay Updated with Zaph Tours</h2>
            <p>Sign up for our newsletter and get weekly updates on the best safaris and adventure spots!</p>
  
            <form class="newsletter-form">
                  <input 
                   type="email" 
                   placeholder="Enter your email" 
                   required 
                   class="newsletter-input" 
                  />
             <button type="submit" class="newsletter-btn">Subscribe</button>
           </form>
         </section>
</div>
    </div>
  )
}

export default Newsletter




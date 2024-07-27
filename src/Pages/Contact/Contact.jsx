import './Contact.css';

export default function Contact(){
    return(
       <div className="contactWrapper">
         <h1>Contact</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at velit vel dolor vehicula lobortis ut in massa. Maecenas ut tortor vel est elementum pretium. Integer sagittis bibendum convallis.</p>

         <div className="df">
            <div className="left">
                <h2>Write your message</h2>
                <div className="form">
                   <div>
                   <label htmlFor="name">Name:</label>
                   <input type="text" name="Name" id="Name" />
                   </div>
                   <div>
                   <label htmlFor="Name">Email:</label>
                   <input type="text" name="email:" id="Email:" />
                   </div>
                   <div>
                   <label htmlFor="Name">Subject:</label>
                   <input type="text" name="same" id="Name" />
                   </div>
                   <div>
                   <label htmlFor="Message">Message:</label>
                   <textarea name="message" id="Message"></textarea>
                   </div>
                </div>
            </div>
            <div className="right">
          <h2>Our Address</h2>
          <div className="df">
            <div>
                <h3>First Location</h3> 

                <p>330-060 Nullam lacus diam,
                Pulvinar sit amet convallis eget, 12260</p>
                <p>Lorem ipsum dolor</p>
            </div>
            <div>
                <h3>First Location</h3> 

                <p>330-060 Nullam lacus diam,
                Pulvinar sit amet convallis eget, 12260</p>
                <p>Lorem ipsum dolor</p>
            </div>
          </div>

          <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.7202273285!2d76.82493337076835!3d28.42316029475759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1721930380965!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
            </div>
            
         </div>
       </div>
    )
}
function Contact() {
  return (
    <section id="contact" className="contact section reveal">
      <h2>Contact</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:stenisfranklin0725@gmail.com">
              stenisfranklin0725@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919345153370">+91 93451 53370</a>
          </p>
          <p>
            <strong>Location:</strong> Chennai, India
          </p>
        </div>

        {/* Formspree contact form */}
        <form
          action="https://formspree.io/f/myzadkgr"
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>
      </div>
      <p className="note">
        This form is powered by Formspree. Messages are sent directly to my
        email.
      </p>

      <footer className="footer">
        <p>
          © <span id="year">{new Date().getFullYear()}</span> Stenis Franklin
          A. All Rights Reserved.
        </p>
      </footer>
    </section>
  );
}

export default Contact;

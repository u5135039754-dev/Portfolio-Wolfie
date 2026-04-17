import animationGit from '../Animations/Github/github.svg';
import animationInsta from '../Animations/Instagram/instagram.svg';
import animationLinked from '../Animations/Linkedin/linkedin.svg';

import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';

export const Footer = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    toast.info("Sending Message...");

    emailjs.sendForm(
      'service_mhn95ka',
      'template_ba3mdfo',
      event.target,
      '0RAakZrZJpkbIPJ3r'
    )
    .then(() => {
      toast.success("Success");
      event.target.reset();
    })
    .catch(() => {
      toast.error("Error");
    });
  };

  return (
    <footer className="footer section">
    <h1 className="section__title">Contact Me</h1>
    <div className="footer__content">
      <form onSubmit={sendEmail} id="form" className="footer__form">
        <input
          type="text"
          name="user_name"
          autoComplete="off"
          placeholder="Name"
          className="footer__form-input footer__form-name"
          required
        />
        <input
          type="email"
          name="user_email"
          autoComplete="off"
          placeholder="Email"
          className="footer__form-input"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="footer__form-input footer__form-text"
          required
        />
        <button type="submit" className="footer__form-submit">Send</button>
      </form>
    </div>
    <div className="main__about-socials">
      <a className="main__about-social" href={'https://github.com/u5135039754-dev'}>
        <img src={animationGit} alt="" />
      </a>
      <a className="main__about-social" href={'https://www.linkedin.com/in/borys-torzhanskyi-5a032838b/'}>
        <img src={animationLinked} alt="" />
      </a>
      <a className="main__about-social" href={'https://www.instagram.com/totenwilk/'}>
        <img src={animationInsta} alt="" />
      </a>
    </div>
  </footer>
)
}
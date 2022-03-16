import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wbw9jut",
        "template_p20vgn5",
        e.target,
        "LWy6sRSkucf2qHz0M"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={sendEmail}>
        <div>
          <label>
            Your Name
            <input type="text" id="name" name="name" />
          </label>
        </div>
        <div>
          <label>
            Your E-Mail
            <input type="text" id="user-email" name="user-email" />
          </label>
        </div>
        <div>
          <label>
            Your Message
            <textarea type="text" id="message" name="message" />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;

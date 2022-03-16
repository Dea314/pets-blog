import React from "react";
import Axios from "axios";
import { useState } from "react";

const Contact = () => {
  const url = "";
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      email: data.email,
      message: data.message,
    }).then((res) => {
      console.log(res.data);
    });
  };

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={(e) => submit(e)}>
        <div>
          <label>
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={(e) => handle(e)}
            />
          </label>
        </div>
        <div>
          <label>
            Your E-Mail
            <input
              type="text"
              id="email"
              name="email"
              value={data.email}
              onChange={(e) => handle(e)}
            />
          </label>
        </div>
        <div>
          <label>
            Your Message
            <textarea
              type="text"
              id="message"
              message="message"
              value={data.message}
              onChange={(e) => handle(e)}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;

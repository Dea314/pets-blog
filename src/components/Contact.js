import { useState } from "react";
import emailjs from "emailjs-com";
import { Box, Button, TextField, Typography } from "@mui/material";

const Contact = () => {
  const [{ name, user_email, message }, setFormState] = useState({
    name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState(null);

  const handleInputChange = (e) => {
    setErrors(null);
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const sendEmail = async (e) => {
    try {
      e.preventDefault();
      if (!name || !user_email || !message) {
        if (!name) {
          setErrors((prev) => ({ ...prev, name: "Name is required" }));
        }
        if (!user_email) {
          setErrors((prev) => ({ ...prev, user_email: "Email is required" }));
        }
        if (!message) {
          setErrors((prev) => ({ ...prev, message: "Message is required" }));
        }
        return;
      }
      const res = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      );
      console.log(res);
      setFormState({ name: "", user_email: "", message: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Box
        m="auto"
        component="form"
        onSubmit={sendEmail}
        sx={{
          width: "50%",
          marginTop: "50px",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <Typography variant="h3" align="center">
          Contact Us
        </Typography>
        <TextField
          type="text"
          id="name"
          name="name"
          label="Your Name"
          size="small"
          margin="normal"
          value={name}
          onChange={handleInputChange}
          error={Boolean(errors?.name)}
          helperText={errors?.name}
        />
        <TextField
          type="email"
          id="user_email"
          name="user_email"
          label="Your E-Mail"
          size="small"
          margin="normal"
          value={user_email}
          onChange={handleInputChange}
          error={Boolean(errors?.user_email)}
          helperText={errors?.user_email}
        />
        <TextField
          multiline
          type="text"
          id="message"
          name="message"
          label="Your Message"
          margin="normal"
          value={message}
          onChange={handleInputChange}
          error={Boolean(errors?.message)}
          helperText={errors?.message}
        />
        <Button type="submit" variant="contained" disableElevation size="large">
          Send
        </Button>
      </Box>
    </div>
  );
};

export default Contact;

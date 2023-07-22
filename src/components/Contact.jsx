import { forwardRef, useState } from "react";
import { styled } from "styled-components";
import emailjs from "emailjs-com";

const Contact = forwardRef((props, contactRef) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service details
    const serviceID = "service_8f9bzjr";
    const templateID = "template_394xyqt";
    const userID = "UhYr82x0EAGl_F-Ce";

    // Sending email using EmailJS
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully!", response);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });

    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <Section ref={contactRef}>
      <Content>
        <Title>Contact Me</Title>
        <FormWrapper onSubmit={handleSubmit}>
          <InputWrapper>
            <StyledInput
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <StyledInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </InputWrapper>
          <StyledTextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="6"
            required
          />
          <StyledButton type="submit">Submit</StyledButton>
        </FormWrapper>
      </Content>
    </Section>
  );
});

Contact.displayName = "Contact";

export default Contact;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Content = styled.div`
  background-color: #2c3333;
  color: white;
  margin: 100px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    margin: 100px 0;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 1.1;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledInput = styled.input`
  width: 375px;
  padding: 10px;
  border: none;
  font-size: 1rem;
  /* @media screen and (max-width: 900px) {
    flex-direction: column;
  } */
`;

const StyledTextArea = styled.textarea`
  width: 780px;
  padding: 10px;
  margin: 0;
  font-size: 1rem;
  resize: none;
  border: none;
  @media screen and (max-width: 900px) {
    width: 375px;
  }
`;

const StyledButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  width: 800px;
  background-color: #0e8388;
  color: #fff;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 900px) {
    width: 395px;
  }
`;

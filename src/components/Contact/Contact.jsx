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
      <Title>Get In Touch</Title>
      <Content>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin-bottom: 50px;
`;

const Content = styled.div`
  background-color: ${(props) => props.theme.colors.secondbg};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  padding: 50px;
  border-radius: 10px;
  color: white;
  width: 80%;
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: calc(100% + 7px + 0.9vw * 0.42);
  color: ${(props) => props.theme.colors.text.subtle};
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  align-items: center;
  @media screen and (max-width: 900px) {
    gap: 15px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const StyledInput = styled.input`
  width: 50%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #eaeaea;
  color: #383838;
  &::placeholder {
    color: #757575;
  }
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const StyledTextArea = styled.textarea`
  width: calc(100% - 20px);
  padding: 10px;
  margin: 0;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  resize: none;
  border: none;
  border-radius: 5px;
  background-color: #eaeaea;
  color: #383838;
  &::placeholder {
    color: #757575;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  background-image: ${(props) => props.theme.colors.primary};
  color: #f8f8f8;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 400;
  padding: 12px;
  transition: 250ms;
  &:hover {
    color: ${(props) => props.theme.colors.highlight};
  }
`;

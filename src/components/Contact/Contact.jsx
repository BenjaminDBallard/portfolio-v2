import { forwardRef, useState } from "react";
import { styled } from "styled-components";
import emailjs from "emailjs-com";
import {CommonBackground, CommonButton, CommonTitle} from "../Common/common.js";

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
      <CommonTitle>GET IN TOUCH</CommonTitle>
      <CommonBackground>
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
          <ButtonCont>
            <CommonButton type="submit">SUBMIT</CommonButton>
          </ButtonCont>
        </FormWrapper>
      </Content>
      </CommonBackground>
    </Section>
  );
});

Contact.displayName = "Contact";

export default Contact;

const Section = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 60px 0 50px;
  background-color: ${(props) => props.theme.colors.mainbg};
  z-index: 1;
`;

const Content = styled.div`
  background-color: ${(props) => props.theme.colors.secondbg};
  box-shadow: ${(props) => props.theme.boxShadows.main};
  padding: 50px;
  border-radius: 10px;
  color: white;
  width: calc(80%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 95%;
    padding: 50px 20px;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  align-items: center;
  z-index: 5;
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
  background-color: ${(props) => props.theme.colors.form};
  color: ${(props) => props.theme.colors.text.body};
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
  width: calc(100%);
  padding: 10px;
  margin: 0;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  resize: none;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.form};
  color: ${(props) => props.theme.colors.text.body};
  &::placeholder {
    color: #757575;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const ButtonCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

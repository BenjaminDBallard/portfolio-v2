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
  background-color: #333338;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1720px;
  height: 100vh;
  min-height: 500px;
  /* border-radius: 10px 10px 0 0px; */
  /* border-right: 10px solid rgb(162, 241, 249);
  border-top: 10px solid rgb(162, 241, 249); */
  margin-bottom: 50px;

  @media screen and (max-width: 1720px) {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
  @media screen and (max-width: 900px) {
    height: 100vh;
  }
`;

const Content = styled.div`
  background-color: #1f1f2381;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.442), 30px -30px rgb(162, 241, 249),
    -40px -70px rgba(119, 134, 249);
  padding: 50px;
  border-radius: 10px;
  color: white;
  width: 675px;
  margin: 50px;
  height: 500px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    justify-content: flex-start;
    padding: 100px 0 0 0;
    margin: 0;
    width: 90%;
    /* height: calc(100% - 100px); */
    /* height: 100vh; */
    box-shadow: 10px 10px rgba(0, 0, 0, 0.442), 10px -30px rgb(162, 241, 249),
      -10px -70px rgba(119, 134, 249);
  }
  @media screen and (min-width: 1921px) {
    /* margin-right: 20px; */
    /* padding: 0 100px; */

    max-width: 1720px;
    /* font-size: 40px; */
  }
  /* @media screen and (min-width: 1921px) {
    width: 1012.5px;
    padding: 60px;
  }
  @media screen and (min-width: 2921px) {
    width: 1350px;
    padding: 80px;
  } */
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 1.1;
  color: rgb(162, 241, 249);
  /* @media screen and (min-width: 1921px) {
    font-size: 60px;
  }
  @media screen and (min-width: 2921px) {
    font-size: 80px;
  } */
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
  /* @media screen and (min-width: 1921px) {
    gap: 15px;
  }
  @media screen and (min-width: 2921px) {
    gap: 20px;
  } */
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
  /* @media screen and (min-width: 1921px) {
    gap: 15px;
  }
  @media screen and (min-width: 2921px) {
    gap: 20px;
  } */
`;

const StyledInput = styled.input`
  width: 375px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #cfcfe7;
  color: #cfcfe7;
  &::placeholder {
    color: #9797a9;
  }
  background-color: transparent;
  font-size: 20px;
  font-family: Archivo;
  @media screen and (max-width: 900px) {
    width: calc(80% - 20px);
  }
  /* @media screen and (min-width: 1921px) {
    padding: 15px;
    width: 562.5px;
    font-size: 30px;
  }
  @media screen and (min-width: 2921px) {
    padding: 20px;
    width: 750px;
    font-size: 40px;
  } */
`;

const StyledTextArea = styled.textarea`
  width: 655px;
  padding: 10px;
  margin: 0;
  font-size: 20px;
  font-family: Archivo;
  resize: none;
  border: none;
  border-bottom: 1px solid #cfcfe7;
  color: #cfcfe7;
  &::placeholder {
    color: #9797a9;
  }
  background-color: transparent;
  @media screen and (max-width: 900px) {
    width: calc(80% - 20px);
  }
  /* @media screen and (max-width: 900px) {
    width: 375px;
  } */
  /* @media screen and (min-width: 1921px) {
    width: 982.5px;
    padding: 15px;
    font-size: 30px;
  }
  @media screen and (min-width: 2921px) {
    width: 1310px;
    padding: 20px;
    font-size: 40px;
  } */
`;

const StyledButton = styled.button`
  padding: 10px;
  font-size: 20px;
  width: 675px;
  background-color: rgba(119, 134, 249);
  color: #fff;
  border: 1px solid rgba(119, 134, 249);
  cursor: pointer;

  border-radius: 5px;
  font-weight: 600;
  padding: 15px 40px;
  transition: 500ms;
  &:hover {
    background-color: transparent;
    border: 1px solid rgba(119, 134, 249);
    color: rgba(119, 134, 249);
  }
  @media screen and (max-width: 900px) {
    width: 80%;
  }
  /* @media screen and (max-width: 900px) {
    width: 395px;
  } */
  /* @media screen and (min-width: 1921px) {
    padding: 15px;
    font-size: 30px;
    width: 1012.5px;
  }
  @media screen and (min-width: 2921px) {
    padding: 20px;
    font-size: 40px;
    width: 1350px;
  } */
`;

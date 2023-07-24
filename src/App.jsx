import { useRef } from "react";
import { styled } from "styled-components";
// import useScrollSnap from "react-use-scroll-snap";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  // const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const handleLinkClick = (refType) => {
    const refMapping = {
      home: homeRef,
      about: aboutRef,
      work: workRef,
      contact: contactRef,
    };

    refMapping[refType].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Global>
      <Webpage>
        <Navbar handleLinkClick={handleLinkClick} />

        <Home ref={homeRef} handleLinkClick={handleLinkClick} />
        <hr />
        <About ref={aboutRef} />
        <hr />
        <Work ref={workRef} />
        <hr />
        <Contact ref={contactRef} />
      </Webpage>
    </Global>
  );
}

export default App;

const Global = styled.div`
  font-family: Archivo;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Webpage = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  hr {
    border: none;
    border-bottom: 1px solid black;
    width: 85%;
  }
`;

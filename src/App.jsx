import { useRef } from "react";
import { styled } from "styled-components";
// import useScrollSnap from "react-use-scroll-snap";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import table from "./assets/wood-table-background.jpg";
import "./index.css";

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
        <About ref={aboutRef} />
        <Work ref={workRef} />
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
  background-color: #333338;
  /* background-image: url(${table});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 1720px) {
    background-image: none;
  } */
`;
const Webpage = styled.div`
  display: flex;
  flex-direction: column;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  /* gap: 30px; */
  @media screen and (max-width: 1720px) {
    background-color: #333338;
  }
`;

// hr {
//   margin: 12px 0;
//   border: 0;
//   text-align: center;

//   &:before {
//     content: "\2022 \2022 \2022";
//     font-size: 20px;
//     color: #4F8BCA;
//   }
// }

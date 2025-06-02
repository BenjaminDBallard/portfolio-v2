import { useRef, useState } from "react";
import { styled, ThemeProvider } from "styled-components";
import { light, dark } from "./theme/theme";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import Work from "./components/Work/Work";
import "./index.css";
import Projects from "./components/Projects/Projects.jsx";

function App() {
  // const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const [theme, setTheme] = useState(light);

  const handleLinkClick = (refType) => {
    const refMapping = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      work: workRef,
      contact: contactRef,
    };
    refMapping[refType].current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleThemeChange = () => {
    if (theme === light) {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Webpage>
        <Navbar
          handleLinkClick={handleLinkClick}
          handleThemeChange={handleThemeChange}
        />
        <MobileNavbar
          handleLinkClick={handleLinkClick}
          handleThemeChange={handleThemeChange}
        />
        <Home ref={homeRef} handleLinkClick={handleLinkClick} />
        <About ref={aboutRef} theme={theme === dark}/>
        <Projects ref={projectsRef} theme={theme === dark}/>
        <Work ref={workRef} theme={theme === dark}/>
        <Contact ref={contactRef} />
      </Webpage>
    </ThemeProvider>
  );
}

export default App;

const Webpage = styled.div`
  background-color: ${(props) => props.theme.colors.mainbg};
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
`;

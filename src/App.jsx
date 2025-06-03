import { useRef, useState } from "react";
import { styled, ThemeProvider } from "styled-components";
import { createTheme } from "./theme/utils.js"
import { light, dark } from "./theme/theme";
import { one } from "./theme/accent"
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import Work from "./components/Work/Work";
import "./index.css";
import Projects from "./components/Projects/Projects.jsx";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const [theme, setTheme] = useState(light);
  const [accent, setAccent] = useState(one);

  const handleLinkClick = (refType) => {
    const refMapping = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      experience: experienceRef,
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

  const handleAccentChange = (accentTheme) => {
    setAccent(accentTheme);
  };

  const composedTheme = createTheme(theme, accent);

  return (

        <ThemeProvider theme={composedTheme}>
          <Webpage>
            <Navbar
                handleLinkClick={handleLinkClick}
                handleThemeChange={handleThemeChange}
            />
            <MobileNavbar
                handleLinkClick={handleLinkClick}
                handleThemeChange={handleThemeChange}
            />
            <Home ref={homeRef} handleLinkClick={handleLinkClick} handleAccentChange={handleAccentChange} />
            <About ref={aboutRef} $isDark={theme === dark} />
            <Projects ref={projectsRef} $isDark={theme === dark} />
            <Work ref={experienceRef} $isDark={theme === dark} />
            <Contact ref={contactRef} />
          </Webpage>
        </ThemeProvider>
  );
}

export default App;

const Webpage = styled.div`
  background-color: ${(props) => props.theme.colors.mainbg};
  font-family: Montserrat;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

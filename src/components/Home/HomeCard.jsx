/* eslint-disable react/no-unescaped-entities */
import { useRef, useEffect, useState } from "react";
import { withTheme } from "styled-components";
import styled from "styled-components";

function repeatString(str, count) {
  let maxCount = str.length * count;
  count = Math.floor(Math.log(count) / Math.log(2));
  while (count) {
    str += str;
    count--;
  }
  str += str.substring(0, maxCount - str.length);
  return str;
}

function copyToClipboard(str) {
  var el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

export const CodeCard = () => {
  const [text, setText] = useState(`new Date().getFullYear() - 1997;`);
  const age = new Date().getFullYear() - 1997;
  // trimed down polyfill of String.repeat
  const changeText = () => {
    let space = repeatString(" ", 54);
    setText(age + ";" + space);
  };
  return (
    <CodeCardWrapper>
      <pre>
        1&nbsp;&nbsp;class <b>Person</b> {"{"}
      </pre>
      <pre>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() {"{"}</pre>
      <pre>
        3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = "
        <b>Ben Ballard</b>";
      </pre>
      <pre>
        4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = ["
        <b>DESIGN</b>", "<b>DEV</b>"];
      </pre>
      <pre onClick={changeText}>
        5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age = {text}
      </pre>
      <pre>6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"}"}</pre>
      <pre>7&nbsp;&nbsp;{"}"}</pre>
    </CodeCardWrapper>
  );
};

const ColorBox = ({ color }) => {
  const tooltipRef = useRef();
  useEffect(() => {
    return tooltipRef.current.addEventListener("animationend", () => {
      tooltipRef.current.classList.remove("tooltip-animate");
    });
  });
  const copy = () => {
    copyToClipboard(color);
    tooltipRef.current.classList.add("tooltip-animate");
  };

  return (
    <ColorBoxWrapper
      ref={tooltipRef}
      onClick={copy}
      style={{ background: color }}
    />
  );
};

export const ColorPalette = withTheme(({ theme }) => {
  return (
    <ColorPaletteWrapper>
      <ColorBox color={theme.colors.primary} />
      <ColorBox color={theme.colors.highlight} />
      <ColorBox color="#6A98F0" />
      <ColorBox color={theme.colors.text.body} />
      <ColorBox color={theme.colors.text.subtle} />
    </ColorPaletteWrapper>
  );
});

export default function HomeCard() {
  return (
    <HeroCardWrapper>
      <CodeCard />
      <ColorPalette />
    </HeroCardWrapper>
  );
}

export const HeroCardWrapper = styled.div`
  position: relative;
  /* z-index: 2; */

  @media screen and (max-width: 768px) {
    /* releated to "things i love" section bug */
    margin-top: 25px;
    width: 360px;
  }
`;

export const CodeCardWrapper = styled.div`
  padding: 30px 35px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.secondbg};
    box-shadow: ${(props) => props.theme.boxShadows.main};
  pre {
    text-align: left;
    font-size: calc(100% + -9px + 0.9vw * 0.42);
    color: ${(p) => p.theme.colors.text.body};
  }
`;

export const ColorPaletteWrapper = styled.div`
  /* z-index: 2; */
  position: absolute;
  bottom: -40px;
  left: -90px;

  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.secondbg};
    box-shadow: ${(props) => props.theme.boxShadows.main};
  padding: 8px;
  border-radius: 5px;

  @media screen and (max-width: 786px) {
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%) !important;
  }
`;

export const ColorBoxWrapper = styled.div`
  /* z-index: 2; */
  width: 40px;
  height: 40px;
  margin: 3px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  position: relative;

  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
  &:active {
    transform: scale(0.7);
    transition: 0.1s;
  }

  &:before {
    pointer-events: none;
    position: absolute;
    text-align: center;
    content: "Copied";
    opacity: 0;
    width: 50px;
    bottom: -130%;
    left: 50%;
    padding: 10px;
    border-radius: 10px;
    color: inherit;
    background: ${(p) => p.theme.secondbg};
      box-shadow: ${(props) => props.theme.boxShadows.main};
    font-size: 12px;
    transition: 0.3s;
    transform: translateX(-50%);
  }
`;

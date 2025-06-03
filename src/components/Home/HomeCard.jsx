/* eslint-disable react/no-unescaped-entities */
import { useRef, useEffect, useState } from "react";
import { withTheme } from "styled-components";
import styled from "styled-components";
import { one, two, three, four, five } from "../../theme/accent";

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

const AccentPalette = ({ onAccentSelect }) => {
    const accents = [one, two, three, four, five];

    return (
        <ColorPaletteWrapper>
            {accents.map((accentObj, index) => (
                <ColorBoxWrapper
                    key={index}
                    onClick={() => onAccentSelect(accentObj)}
                    style={{ background: accentObj.accentButton }}
                    title={`Accent ${index + 1}`}
                />
            ))}
        </ColorPaletteWrapper>
    );
};

export default function HomeCard({ handleAccentChange }) {
    return (
        <HeroCardWrapper>
            <CodeCard />
            <AccentPalette onAccentSelect={handleAccentChange} />
        </HeroCardWrapper>
    );
}

export const HeroCardWrapper = styled.div`
  position: relative;

  @media screen and (max-width: 768px) {
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
    color: ${(p) => p.theme.colors.text.header};
  }
`;

export const ColorPaletteWrapper = styled.div`
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

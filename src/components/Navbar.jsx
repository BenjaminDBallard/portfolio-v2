import { styled } from "styled-components";
// import NavButton from "./sub-components/NavButton";
import bblogo from "../assets/bblogoWhite.svg";
import HamburgerMenu from "./sub-components/Hamburger";
import { useState } from "react";

import { Icon } from "@blueprintjs/core";

export default function Navbar({ handleLinkClick }) {
  const [open, setOpen] = useState(false);
  return (
    <Section>
      <Wrapper>
        <DropWrap>
          <img src={bblogo} />
        </DropWrap>
        <DropWrap>
          {open && (
            <HamburgerMenu
              handleLinkClick={handleLinkClick}
              open={open}
              setOpen={setOpen}
            />
          )}
          {!open && (
            <MenuButton open={open} onClick={() => setOpen(!open)}>
              {!open && <StyledIcon icon="menu" size={30} />}
              {open && <StyledIcon icon="cross" size={30} />}
            </MenuButton>
          )}
        </DropWrap>
      </Wrapper>
    </Section>
  );
}

const Section = styled.div`
  position: fixed;
  width: 1720px;
  z-index: 5;
  display: flex;
  padding: 10px 0;
  height: 40px;
  background-color: transparent;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
  @media screen and (max-width: 1720px) {
    width: 100%;
    background-color: #333338;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Wrapper = styled.div`
  padding: 10px 0px;
  width: 100%;

  display: flex;
  /* width: 100%; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  height: 40px;
  /* border-bottom: 1px solid black; */
  /* background-color: transparent; */
  /* padding-top: 10px; */
  img {
    height: 40px;
  }
  div {
    display: flex;
    gap: 10px;
  }
  @media screen and (max-width: 1200px) {
    /* width: 80%; */
  }
  @media screen and (min-width: 1921px) {
    /* margin-right: 20px; */

    max-width: 1720px;
    /* font-size: 40px; */
  }
`;

const DropWrap = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 10px;
  background-color: #333338;
`;

/* @media screen and (min-width: 1921px) {
    font-size: 30px;
  }
  @media screen and (min-width: 2921px) {
    font-size: 40px;
  } */
const MenuButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`;

const StyledIcon = styled(Icon)`
  fill: #fff;
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 5px;
  &:hover {
    fill: rgb(119, 135, 249);
    cursor: pointer;
  }
`;

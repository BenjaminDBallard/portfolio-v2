import styled from "styled-components";

const SkewBg = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  min-height: 500px;
  background-image: ${(props) => props.theme.colors.text.primary};
  transform: skewY(-3deg);
  z-index: -1;
  pointer-events: none;

  @media screen and (max-width: 768px) {
    width: unset;
    height: 90%;
    top: 100px;
    left: -16px;
    right: -16px;
    bottom: 0;
  }
`;

export default SkewBg;

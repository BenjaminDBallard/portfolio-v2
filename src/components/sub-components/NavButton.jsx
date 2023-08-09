import { styled } from "styled-components";
export default function NavButton(props) {
  return <Button>{props.value}</Button>;
}

const Button = styled.button`
  color: black;
  font-size: 18px;
  background-color: transparent;
  padding: 5px 10px;
  border: none;
  border-bottom: 2px solid transparent;
  transition: 500ms;
  &:hover {
    color: #fc4f00;
    border-bottom: 2px solid #fc4f00;
  }
`;

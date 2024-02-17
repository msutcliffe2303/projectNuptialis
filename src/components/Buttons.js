import styled from "styled-components";

const Button = styled.button `
  border: 1px solid #000;
  background-color: #000;
  color: white;

  padding: 10px 15px;
  border-radius: 999px;
`;

const OutlinedButton = styled(Button) `
  background-color: transparent;
  color: #000;
`;
  
export default Button + OutlinedButton;
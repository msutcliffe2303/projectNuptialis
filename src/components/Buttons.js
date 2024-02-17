import styled from "styled-components";

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457",
  },
};

const Button = styled.button `
  background-color: ${(props) => theme[props.theme].default};
  outline: 0;
  border: 0;
  border-radius: 999px;
  padding: 10px 15px;
  color: white;
`;

Button.defaultProps = {
  theme: "blue",
};
  
export default Button;
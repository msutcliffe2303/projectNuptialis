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
  background-color: ${(props) => theme[props.theme].default}
`;

Button.defaultProps = {
  theme: "blue",
};
  
export default Button;
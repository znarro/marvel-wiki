import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: ["48px", "60px"],
      fontWeight: "bold",
      fontFamily: "Bangers",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "semibold",
      lineHeight: "110%",
      fontFamily: "Bangers",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

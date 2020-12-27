import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        minH: "100vh",
        bg: "#fbfbfb",
        bgImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b7b4bd' fill-opacity='0.3' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
      },
    },
  },
  textStyles: {
    h1: {
      fontSize: ["48px", "60px"],
      fontWeight: "bold",
      fontFamily: "'Bangers', sans-serif",
    },
    h3: {
      fontSize: "24px",
      fontWeight: "semibold",
      lineHeight: "110%",
      fontFamily: "'Bangers', sans-serif",
    },
    h2: {
      fontSize: ["2rem", "3rem", "4rem"],
      fontWeight: "semibold",
      lineHeight: "110%",
    },
    p: {
      fontSize: ["1rem", "1.2rem", "1.5rem"],
      fontWeight: "semibold",
      lineHeight: "110%",
    },
    input: {
      fontSize: "16px",
      fontWeight: "normal",
      fontFamily: "'Calibri', sans-serif",
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

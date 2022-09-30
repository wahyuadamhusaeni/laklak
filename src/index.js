import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "@fontsource/poppins";
import App from "./App";
import themeConfig from "./utils/themeConfig";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider resetCSS={true} theme={themeConfig}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);

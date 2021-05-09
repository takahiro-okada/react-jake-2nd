import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router/Router";

import theme from "./theme/theme"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

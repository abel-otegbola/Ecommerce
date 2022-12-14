import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import RoutesProvider from "./routes";

const colors = {
  brand: {
    900: "#5fc028",
    800: "rgb(25, 130, 109)"
  }
}

const theme = extendTheme({ colors })

const App = () => {
  return (
      <ChakraProvider theme={theme}>
        <RoutesProvider />  
      </ChakraProvider>
  );
}

export default App;
import { createTheme, MantineProvider } from "@mantine/core";
import Cards from "./components/Cards/Cards";
import CardsContainer from "./CardsContainer";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <CardsContainer />
    </MantineProvider>
  );
}

export default App;

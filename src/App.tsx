import styled, { ThemeProvider } from "styled-components";
import Theme from "./styles/theme";

const Title = styled.h1`
  color: ${(props) => props.theme.colors.main};
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Title>Team challenge chat</Title>
    </ThemeProvider>
  );
}

export default App;

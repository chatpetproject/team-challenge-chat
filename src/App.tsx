<<<<<<< HEAD
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
=======
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Team challenge chat</h1>
    </div>
>>>>>>> 61aa6daeec663fae80727fbfb85a3d7e92a9c1c7
  );
}

export default App;

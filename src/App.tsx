import { Button } from './UI/Button';
import { MainTitle } from './UI/Text';

function App() {
  return (
    <>
      <MainTitle>Buttons</MainTitle>

      <Button variant='primary' width='262px' height='45px'>
        Enter to the chat
      </Button>

      <Button variant='secondary' width='262px' height='45px'>
        Enter to the chat
      </Button>
    </>
  );
}
export default App;

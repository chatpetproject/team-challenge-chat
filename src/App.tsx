import { Button } from './UI/Button';
import { MainTitle } from './UI/Text';
import Modal from './components/Modal/Modal';
import useModal from './hooks/useModal';

function App() {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <MainTitle>Buttons</MainTitle>

      <Button variant='primary' width='262px' height='45px'>
        Enter to the chat
      </Button>

      <Button variant='secondary' width='262px' height='45px'>
        Enter to the chat
      </Button>

      <Button
        width='262px'
        height='45px'
        variant='secondary'
        onClick={openModal}
      >
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        titleText='Sign up to start chatting'
      >
        {''}
      </Modal>
    </>
  );
}
export default App;

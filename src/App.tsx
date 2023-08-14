import Layout from './Layout';
import Footer from './components/Footer/Footer';
import { Main } from './UI/Main';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Layout />
      </Main>
      <Footer />
    </>
  );
}
export default App;

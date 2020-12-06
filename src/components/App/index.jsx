/* dependencias e bibliotecas */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

/* componentes */
import Menu from '../Menu';
import Rotas from '../rotas';
import Footer from '../Footer';


/* css, img  */
import './style.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <header>
          <Menu />
          </header>
          <main>
            <Container fluid>
              <Rotas />
            </Container>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;


import { Container } from 'react-bootstrap';
import CarrouselImg from './components/CarrouselImg';
import DrinksList from './components/DrinksList';
import FormComp from './components/FormComp';
import ModalDrink from './components/ModalDrink';
import ModalFavorite from './components/ModalFavorite';
import { CategoryProvider } from './context/CategoryProvider';
import { DrinksProvider } from './context/DrinksProvider';

function App() {
  return (
    <CategoryProvider>
      <DrinksProvider>
        <header className='py-5'>
          <h1>Drink Finder</h1>
          <CarrouselImg />
        </header>
        <Container className='mt-5'>
          <FormComp />

          <DrinksList />
          <ModalDrink />
          <ModalFavorite />
        </Container>
      </DrinksProvider>
    </CategoryProvider>
  );
}

export default App;

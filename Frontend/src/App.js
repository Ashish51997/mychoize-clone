import './App.css';
// import ContactMain from './Contact-us/ContactMain';
import FooterMain from './Footer/FooterMain';
import RentalCarsMain from './Rental-cars-list/RentalCarsMain';

function App() {
  return (
    <div className="App">
      <RentalCarsMain />
      {/* <ContactMain /> */}
      <FooterMain />
    </div>
  );
}

export default App;

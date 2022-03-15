import './App.css';
import FooterComponent from './FooterComponent';
import ContactForm from './ContactForm';
import HeaderComponent from './HeaderComponent';
import HomePage from './HomePage';



function App() {
  return (
    <div className="App">
        <HeaderComponent />
        <HomePage />
        <ContactForm />
        <FooterComponent/>
    </div>
  );
}

export default App;

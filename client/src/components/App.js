import './App.css';
import FooterComponent from './FooterComponent';
import ContactForm from './ContactForm';
import HeaderComponent from './HeaderComponent';
import HomePage from './HomePage';
import AllRequests from './AllRequests';
import { RequestProvider } from '../contexts/RequestContext';


function App() {
  return (
    <RequestProvider>
    <div className="App">
        <HeaderComponent />
        <HomePage />
        <AllRequests />
        <ContactForm />
        <FooterComponent/>
    </div>
    </RequestProvider>
  );
}

export default App;

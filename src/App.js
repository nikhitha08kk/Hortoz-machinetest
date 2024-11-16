
import './App.css';
import Blogs from './Components/Blogs';
import Booking from './Components/Booking';
import Carousal from './Components/Carousal';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import Gallary from './Components/Gallary';
import Gallary2 from './Components/Gallary2';
import Header from './Components/Header';
import Home from './Components/Home';
import Promotions from './Components/Promotions';
import Services from './Components/Services';
import Widget from './Components/Widget';


function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <Widget/>
    <Services/>
    <Gallary/>
    <Gallary2/>
    <Carousal/>
    <Promotions/>
    <Blogs/>
    <Faq/>
    <Booking/>
    <Footer/>

    </div>
  );
}

export default App;

import "./tailwind.css";
import './assets/style/style.css'
import Navbar from "./components/Navbar/Navbar";
import Gallary from "./pages/Gallary/Gallary";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import Services from "./pages/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home/>
      <History/>
      <Services/>
      <Gallary/>
      <Footer />
    </div>
  );
}

export default App;

import { Header } from "./components/header/header";
import { HomePage } from "./pages/home-pages/home-page";
import './index.css'
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

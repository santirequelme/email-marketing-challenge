import './global.css'
import { Header } from "./Components/Header.jsx";
import { Footer } from './Components/Footer';
import { Cards } from './Components/Cards';
import { Insights } from './Components/Insights';

export function App() {
  return (
    <div>
    <Header />
    <Cards />
    <Insights />
    <Footer />
    </div>
  )
}

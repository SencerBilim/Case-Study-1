import './index.css';

import Hero from "./components/Hero"
import Section2 from './components/Section2';
import Join from './components/Join';
import Navbar from './components/NavBar';
import SliderCard from './components/SliderCard';
import Collections from './components/Collections';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {

  return (
    <main className='flex flex-col '>
      <Navbar></Navbar>
      <Hero></Hero>
      <Section2></Section2>
      <Join></Join>
      <SliderCard></SliderCard>
      <Collections></Collections>
      <Map></Map>
      <Footer></Footer>
    </main>
  )
}

export default App

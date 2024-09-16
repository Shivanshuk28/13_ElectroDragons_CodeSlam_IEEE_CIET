import './App.css'
import AboutUs from './components/about'
import DelightfulExperience from './components/experience'
import Footer from './components/footer'
import Hero from './components/hero'
import MobileAppPromotion from './components/mobile'
import Recipes from './components/recipe'
import RestrauntMenu from './components/menu'


function App() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Recipes />
      <RestrauntMenu />
      <DelightfulExperience />
      <MobileAppPromotion />
      <Footer />
    </>)
}

export default App

import Cards from "../components/Cards"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Popular from "../components/Popular"
import Trending from "../components/Trending"
import Under199 from "../components/Under199"
import Under499 from "../components/Under499"
import Under99 from "../components/Under99"


const HomePage = () => {
  return (
   <div>  
       <Navbar/>
       <Hero/>
       <Cards/>
       <Popular/>
       <Under99/>
       <Under199/>
       <Under499/>
       <Trending/>
       <Footer/>
      

  </div>

  )
}

export default HomePage

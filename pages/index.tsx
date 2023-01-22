import type { NextPage } from 'next'
import HomePage from '../components/HomePage'
import Portfolio from '../components/Portfolio'
import Experience from "../components/Experience"
import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"
const Home: NextPage = () => {
  return (
    <div>
      
      <HomePage></HomePage>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </div>
  )
}

export default Home

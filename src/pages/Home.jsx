import NavBar from "../components/navbar/Navbar"
import HomeHero from "../components/Home/Hero/HomeHero"
import HomeAbout from "../components/Home/about/HomeAbout"
import HomeServices from "../components/Home/services/HomeServices"

export default function Home() {
  return (
    <div >
        <NavBar />
        <HomeHero />
        <HomeAbout />
        <HomeServices />
    </div>
  )
}

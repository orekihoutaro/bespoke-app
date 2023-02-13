import ImgButton from '../components/ImgButton'
import logo from '../assets/logo.png'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="bg-white md:w-32 lg:w-full">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <Hero />
      </div>

      <div className="w-full h-full">
        <ImgButton img_src={logo} direct="home" props="My Bespoke Staff Marketing"/>
      </div>
    </div>
  )
}

export default Home

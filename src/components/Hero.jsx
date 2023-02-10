import styles from '../style'

const Hero = () => (
  <section id="home" className={`md:flex-row flex-col w-full`}>
      <div className="w-full h-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-8 px-8">
        <div className={`flex flex-row justify-between items-center py-4 px-6`}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[12px] text-white ss:leading-[100px] leading-[75px]">
            WE TAKE THE {" "}<br className="sm:block hidden"/>
            <span className="text-yellow-400">COMPICATED</span> {" "} OUT OF <br />
            YOUR OUTSOURCING NEEDS!
          </h1>
        </div>
      </div>
  </section> 
)

export default Hero
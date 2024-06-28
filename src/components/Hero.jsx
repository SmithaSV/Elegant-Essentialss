import { Link } from "react-router-dom";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero bg-base-200 bg-blend-overlay">
    <div className="hero-content text-center">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold max-md:text-4xl text-accent-content">Where shopping dreams come true in style!</h1>
        <p className="py-6 text-2xl max-md:text-lg text-accent-content">
        Explore Elegant Essentials, where elegance is not just a style but a lifestyle.
         Our curated collection of timeless pieces ensures you always make a statement. 
        Discover the perfect blend of luxury and comfort that defines your personal elegance."
        </p>
        <Link to="/shop" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white">Shop Now</Link>
      </div>
    </div>
  </div>
  )
}

export default Hero
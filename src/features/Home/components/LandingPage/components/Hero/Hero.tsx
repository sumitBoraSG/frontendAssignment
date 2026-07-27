import Navigation from "./Navigation";
import heroBackground from '@/assets/images/heroBackground.png'
import MainSection from "./MainSection";
const Hero = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat bg-[#1a1a1a]"
            style={{ backgroundImage: `url(${heroBackground})` }}>
                <Navigation />
                <MainSection />
        </div>
        
    )
}

export default Hero;
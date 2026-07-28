import Navigation from "./Navigation";
import heroBackground from '@/assets/images/heroBackground.png'
import MainSection from "./MainSection";
import MobileNavigation from "./MobileNavigation";
import { useState } from "react";
const Hero = ({scrollToContact, scrollToProducts}) => {
    const [menuFlag, setMenuFlag] = useState(true);
    return (
        <div className="bg-cover bg-center bg-no-repeat bg-[#1a1a1a]"
            style={{ backgroundImage: `url(${heroBackground})` }}>
                <Navigation menuFlag={menuFlag} setMenuFlag={setMenuFlag} scrollToContact={scrollToContact} scrollToProducts={scrollToProducts}/>
                {menuFlag ? <MainSection />: <MobileNavigation setMenuFlag={setMenuFlag} scrollToContact={scrollToContact} scrollToProducts={scrollToProducts} />}
        </div>
        
    )
}

export default Hero;
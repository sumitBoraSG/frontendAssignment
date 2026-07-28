import { useRef } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

const Home = () => {
    const contactRef = useRef<HTMLDivElement>(null);
    const productRef = useRef<HTMLDivElement>(null);
    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({
            behavior:"smooth",
        });
    };
    const scrollToProducts = () => {
        console.log("hello")
        productRef.current?.scrollIntoView({
            behavior:"smooth",
        })
    }
    return <>
        <LandingPage scrollToContact={scrollToContact} scrollToProducts={scrollToProducts} />
        <Products productRef={productRef} />
        <Footer contactRef={contactRef}/>
    </>
}

export default Home;
import Header from './components/Header';
// import Navigation from './components/Hero/Navigation';
import Hero from './components/Hero';
function LandingPage({scrollToContact, scrollToProducts}) {
    return (
        <>
            <Header />
            <Hero scrollToContact={scrollToContact} scrollToProducts={scrollToProducts}/>
        </>
    )
}

export default LandingPage;
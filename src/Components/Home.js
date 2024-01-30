import React from "react"
import Navbar from "./Navbar";
import AboutSection from './AboutSection';
import Services from './Services';
import DevelopmentSection from './DevelopmentSection';
import Portfolio from './Portfolio';
import FAQSection from './FAQSection';
import Contact from './Contact';
import Footer from './Footer';
function Home() {
    return (
        <div>
            <Navbar />
            <section id="hero" className="home">
                <div className="hero-container">
                    <h1>Empowering Your Business with Smart Solutions</h1>
                    <h2>Transform your operations with our cutting-edge software.</h2>
                    <a href="#about" class="btn-get-started scrollto">Get Started</a>
                </div>
            </section>
            <AboutSection />
            <Services />
            <DevelopmentSection />
            <Portfolio />
            <FAQSection />
            <Contact />
            <Footer />
        </div>
    );
}
export default Home;
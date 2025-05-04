
import FAQ from '../components/FAQ';
import Features from '../components/Featuers';
import Footer from '../components/Footer';

import ParticlesBackground from '../components/particles-background';


const Home = () => {
  return (
    <div className="h-screen">
      <ParticlesBackground/>
      <Features/>
    <FAQ/>
      <Footer/>
    </div>
  );
};

export default Home;

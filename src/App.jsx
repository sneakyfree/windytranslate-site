import Header from './components/Header';
import Hero from './components/Hero';
import TranslationDemo from './components/TranslationDemo';
import TheEngine from './components/TheEngine';
import ModelCatalog from './components/ModelCatalog';
import TheLab from './components/TheLab';
import APIDocs from './components/APIDocs';
import Pricing from './components/Pricing';
import PoweredBy from './components/PoweredBy';
import WhiteLabel from './components/WhiteLabel';
import QuickStart from './components/QuickStart';
import DevResources from './components/DevResources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main>
        <Hero />
        <TranslationDemo />
        <TheEngine />
        <APIDocs />
        <ModelCatalog />
        <TheLab />
        <Pricing />
        <PoweredBy />
        <WhiteLabel />
        <QuickStart />
        <DevResources />
      </main>
      <Footer />
    </div>
  );
}

export default App;

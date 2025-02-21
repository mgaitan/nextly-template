import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import {benefitOne, benefitTwo} from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Tech from "../components/tech";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Katupyry - Inteligencia Artificial para la Vida Real</title>
        <meta
          name="description"
          content="Katupyry - Inteligencia Artificial para la vida real"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Katupyry"
        title="Nuestra visión">
        
        Vivimos en la era de la inteligencia artificial. Los modelos disponibles en la 
        actualidad ya son una disrupción cuyo impacto aún nos cuesta dimensionar en términos 
        económicos y sociales. 

        En Katupyry construímos soluciones basadas en AI con una visión 
        humana y sustentable, respetando la privacidad de las personas y ayudando a 
        resolver problemas reales.

        Que la era de la inteligencia artificial sea el tiempo de volvermos más humanos. 
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Testimonios"
        title="Lo que dicen de nosotros">
      </SectionTitle>
      <Testimonials />
      <Tech />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;
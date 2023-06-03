import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Katupyry - Inteligencia Artificial para la vida real</title>
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
        title=" Qué hacemos">
        Vivimos en la era de la inteligencia artificial. Los modelos disponibles en la 
        actualidad ya son una disrupción que aún no podemos dimensior en términos 
        económicos y sociales. 

        En Katupyry construímos soluciones basadas en I.A. con una visión 
        humana y sustentable, respetando la privacidad de las personas y ayudan a 
        resolver problemas reales.  

        Que la era de la inteligencia artificial sea el tiempo de volvermos más humanos. 
      </SectionTitle>
      <Benefits data={benefitOne} />
      // <Benefits imgPos="right" data={benefitTwo} />
      // <SectionTitle
      //   pretitle="Watch a video"
      //   title="Learn how to fullfil your needs">
      //   This section is to highlight a promo or demo video of your product.
      //   Analysts says a landing page with video has 3% more conversion rate. So,
      //   don&apos;t forget to add one. Just like this.
      // </SectionTitle>
      // <Video />
      <SectionTitle
        pretitle="Testimonios"
        title="Los que dicen nuestros clientes">
      </SectionTitle>
      <Testimonials />
      </SectionTitle>
      // <Faq />
      // <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;
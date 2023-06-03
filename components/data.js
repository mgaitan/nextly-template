import {
  SunIcon,
  ChatBubbleLeftRightIcon,
  Cog8ToothIcon,
  WrenchScrewdriverIcon,

} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Cómo trabajamos",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Escuchamos a nuestros clientes",
      desc: "Necesitamos conocerte y que nos conozcas.",
      icon: <ChatBubbleLeftRightIcon />,
    },
    {
      title: "Entendemos el problema",
      desc: "Y analizamos posibles soluciones con IA.",
      icon: <Cog8ToothIcon />,
    },
    {
      title: "Implementamos lo acordado",  
      desc: "Y te mostramos los avances con frecuencia.",
      icon: <WrenchScrewdriverIcon />,
    },
    {
      title: "Tratamos de que las maquinas hagan el trabajo",  
      desc: "Y tomamos sol como seres humanos.",
      icon: <SunIcon />,
    },
  ],
};

export {benefitOne};

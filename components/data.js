import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
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
      icon: <ChatBubbleLeftRight />,
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
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};

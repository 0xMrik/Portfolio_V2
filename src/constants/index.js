// img
import Img2 from "../assets/portfolio-img2.png";

const experiences = [
  {
    title: "Developpeur web et mobile fullstack javascript",
    company_name: "O'Clock",
    icon: process.env.PUBLIC_URL + "/school/Oclock.svg",
    date: "Novembre 2022 - Mai 2023",
    points: [
      "Maîtrise de HTML, CSS, JavaScript, Git, et utilisation avancée de ES2015+.",
      "Utilisation de Node.js, Express et gestion de bases de données SQL.",
      "Conception d'API en REST, communication via AJAX, et création d'interfaces dynamiques.",
      "Techniques de POO, UML, MCD, ORM, et mise en œuvre de User Stories, Backlog, Sprint et déploiement.",
    ],
  },
  {
    title: "Developpeur Blockchain",
    company_name: "Alyra",
    icon: process.env.PUBLIC_URL + "/school/Alyra.svg",
    date: "Mai 2023 - Août 2023",
    points: [
      "Compréhension de la Blockchain, architecture, POS, PoW, et environnement Ethereum : Ether, gas, opcode.",
      "Pratique avec Geth, blockchain privée, Metamask, Remix, Ganache, Truffle, Hardhat, Infura, et EVM.",
      "Maîtrise de Solidity : Syntaxe, conception, déploiement, ainsi que tests, sécurité, et optimisation.",
      "Utilisation de librairies React : Wagmi, etherJS, avec mise en projet de protocole DeFi et gestion de collection NFT.",
    ],
  },
];

const projects = [
  {
    name: "CarHub",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: ["React", "NextJs", "tailwind", "RapidAPI"],
    image: { Img2 },
    source_code_link: "https://github.com/0xMrik/Rental_Car_App",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: ["react", "restapi", "scss"],
    image: { Img2 },
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: ["nextjs", "supabase", "css"],
    image: { Img2 },
    source_code_link: "https://github.com/",
  },
];

export { experiences, projects };

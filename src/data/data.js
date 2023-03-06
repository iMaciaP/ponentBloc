import cst_logo from "../imgs/castelldans/la-valleta/valleta_logo.png";
import cst2_logo from "../imgs/castelldans/la-valleta/penes_logo.png";
import cst1_1 from "../imgs/castelldans/la-valleta/boulder-1.JPG";
import cst1_2 from "../imgs/castelldans/la-valleta/boulder-2.JPG";
import cst1_3 from "../imgs/castelldans/la-valleta/boulder-14.JPG";
import cub_logo from "../imgs/cubells/cubells.jpg";
import missing from "../imgs/placeholder.png";
export const navBarLinks = [
  {
    title: "Albages",
    sectors: [{ name: "El roc de la duna", link: "/abg/1" }],
  },
  {
    title: "Castelldans",
    sectors: [
      { name: "La valleta", link: "/cst/1" },
      { name: "Les  penes", link: "/cst/2" },
    ],
  },
  {
    title: "El Cogul",
    sectors: [
      { name: "Beer Action", link: "/cgl/1" },
      { name: "Els camps", link: "/cgl/2" },
      { name: "El turonet", link: "/cgl/3" },
      { name: "Lo pallars", link: "/cgl/4" },
      { name: "Mestre muten", link: "/cgl/5" },
      { name: "La Universitat", link: "/cgl/6" },
    ],
  },
  {
    title: "Cubells",
    sectors: [{ name: "Principal", link: "/cub/1" }],
  },
  {
    title: "Torrebesses",
    sectors: [
      { name: "Les trinxeres", link: "/trrb/1" },
      { name: "Sectoret", link: "/trrb/2" },
    ],
  },
  {
    title: "Belianes",
    sectors: [
      { name: "Costat 1", link: "/bln/1" },
      { name: "Costat 2", link: "/bln/2" },
    ],
  },
  {
    title: "Preixens",
    sectors: [{ name: "Sector", link: "/prx/1" }],
  },
];
export const cardsInfo = [
  {
    header: "Les Garrigues",
    title: "Castelldans - La valleta",
    desc: "La valleta de castelldans, mítica zona",
    btnlink: "/cst/1",
    imgSrc: cst_logo,
    btnLabel: "Anar",
    facils: 1,
    med: 1,
    dif: 1,
    xtrem: 1,
  },
  {
    header: "Les Garrigues",
    title: "Castelldans - Les penes",
    desc: "Les penes de castelldans, molt bona per principiants i a l'hivern",
    btnlink: "/cst/2",
    imgSrc: cst2_logo,
    btnLabel: "Anar",
    facils: 1,
    med: 1,
    dif: 1,
    xtrem: 1,
  },
  {
    header: "La Noguera",
    title: "Cubells - Principal",
    desc: "Algun text descriptiu",
    btnlink: "/cub/1",
    imgSrc: cub_logo,
    btnLabel: "Anar",
    facils: 1,
    med: 1,
    dif: 1,
    xtrem: 1,
  },
  {
    header: "Urgell",
    title: "Belianes - Les roques del barret",
    desc: "Algun text descriptiu",
    btnlink: "/bln/1",
    imgSrc: missing,
    btnLabel: "Anar",
    facils: 5,
    med: 5,
    dif: 5,
    xtrem: 5,
  } /*,
  {
    header: "Les Garrigues",
    title: "Titol",
    desc: "alun tipus de descripcio del lloc dels blocs o algo",
    btnlink: "/about",
    btnLabel: "Anar",
    facils: 12,
    med: 5,
    dif: 7,
    xtrem: 3,
  },
  {
    header: "",
    title: "Vimpela",
    desc: "exemple vimpela exemple vimpela",
    btnlink: "",
    btnLabel: "Anar",
    facils: 12,
    med: 5,
    dif: 7,
    xtrem: 3,
  }, */,
];

export const SectorsVies = {
  cst: [
    {
      Bloc1: {
        coords: [41.498053, 0.778366],
        name: "Bloc 1: Trape i equili",
        img: cst1_1,
        vies: [
          {
            name: "El trapezista",
            grau: "Proj",
          },
          {
            name: "L'equilibrista",
            grau: "6a",
          }
        ],
      },
      Bloc2: {
        coords: [41.497938, 0.778402],
        name: "Bloc 2: Allround",
        img: cst1_2,
        vies: [
          {
            name: "F",
            grau: "3",
          },
          {
            name: "A",
            grau: "3",
          },
          {
            name: "C",
            grau: "3",
          },
          {
            name: "I",
            grau: "3",
          },
          {
            name: "L",
            grau: "3",
          },
          {
            name: "Facil amb noseque",
            grau: "5b",
          },
          {
            name: "Project",
          },
          {
            name: "Project",
          },
          {
            name: "Project",
          },
          {
            name: "El kinki del talo",
            grau: "6a",
            love: true
          },
          {
            name: "El yonki del vaca",
            grau: "6a",
            love: true
          },
        ],
      },
      Bloc3: {
        coords: [41.497911, 0.778590],
        name: "Bloc 3: La pastora",
        img: cst1_3,
        vies: [
          {
            name: "Lance al fly",
            grau: "6b+",
            love: true,
            cau: true,
          },
          {
            name: "La Masse",
            grau: "7a",
            cau: true,
          },
          {
            name: "Le trou Jammoui",
            grau: "7b",
          },
          {
            name: "Dedos hondos",
            grau: "6b",
          },
          {
            name: "Pastora de gossos",
            grau: "6b",
            sit: true,
            love: true
          },
          {
            name: "Regletejant",
            grau: "6a",
          },
          {
            name: "Per començar",
            grau: "3",
          },
        ],
      },
    },
    {
      Bloc1: {
        coords: [41.494119, 0.785872],
        name: "Bloc 1: Dades dades",
        img: missing,
        vies: [
          {
            name: "Dades dades",
            grau: "75a",
            sit: true,
            cau: true,
            love: true
          }
        ],
      },
    },
  ],
  cub: [
    {
      Bloc1: {
        coords: [41.499661, 0.777974],
        name: "Bloc 1: bloc 1 de cubells",
        img: cst1_1,
        vies: [
          {
            name: "La banyera",
            grau: "5c",
            sit: true,
            cau: true,
            love: true,
          },
        ],
      },
    },
  ],
  bln: [
    {
      Bloc1: {
        coords: [41.499661, 0.777974],
        name: "Bloc 1: Roca Barret",
        img: cst1_1,
        vies: [
          {
            name: "La banyera",
            grau: "5c",
            sit: true,
            cau: true,
            love: true,
          },
        ],
      },
    },
  ]
};

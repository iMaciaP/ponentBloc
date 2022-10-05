import cst_logo from "../imgs/castelldans/la-valleta/valleta_logo.png";
import cst2_logo from "../imgs/castelldans/la-valleta/penes_logo.png";
import cst1_1 from "../imgs/castelldans/la-valleta/boulder-4.JPG";
import cst1_2 from "../imgs/castelldans/la-valleta/boulder-5.JPG";
import cst1_3 from "../imgs/castelldans/la-valleta/boulder-6.JPG";
import cst1_4 from "../imgs/castelldans/la-valleta/boulder-7.JPG";
import cst2_1 from "../imgs/castelldans/les-penes/boulder-1.JPG";
import cst2_2 from "../imgs/castelldans/les-penes/boulder-2.JPG";
import cst2_3 from "../imgs/castelldans/les-penes/boulder-3.JPG";
import cst2_4 from "../imgs/castelldans/les-penes/boulder-4.JPG";
import cst2_5 from "../imgs/castelldans/les-penes/boulder-5.JPG";
import cst2_6 from "../imgs/castelldans/les-penes/boulder-6.JPG";
import cst2_7 from "../imgs/castelldans/les-penes/boulder-7.JPG";

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
    sectors: [{ name: "Principal", link: "/cbll/1" }],
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
    facils: 12,
    med: 5,
    dif: 7,
    xtrem: 3,
  },
  {
    header: "Les Garrigues",
    title: "Castelldans - Les penes",
    desc: "Les penes de castelldans, molt bona per principiants i a l'hivern",
    btnlink: "/cst/2",
    imgSrc: cst2_logo,
    btnLabel: "Anar",
    facils: 12,
    med: 5,
    dif: 7,
    xtrem: 3,
  },
  {
    header: "La Noguera",
    title: "Cubells - Principal",
    desc: "Algun text descriptiu",
    btnlink: "/cub/1",
    // imgSrc: cst2_logo,
    btnLabel: "Anar",
    facils: 5,
    med: 5,
    dif: 5,
    xtrem: 5,
  },
  {
    header: "Urgell",
    title: "Belianes - Les roques del barret",
    desc: "Algun text descriptiu",
    btnlink: "/cst/2",
    // imgSrc: cst2_logo,
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
        coords: [41.499661, 0.777974],
        name: "Bloc 14: esperó cabró",
        img: cst1_1,
        vies: [
          {
            name: "La banyera",
            grau: "5c",
            icones: [],
          },
          {
            name: "Banyera ext.",
            grau: "6a+",
            icones: [],
          },
          {
            name: "Regalo alemán",
            grau: "7a+",
            icones: [],
          },
          {
            name: "El cabro del cantó",
            grau: "6b",
            icones: [],
          },
          {
            name: "Esperó cabró",
            grau: "6b+",
            icones: [],
          },
          {
            name: "Fissuring direct",
            grau: "7a+",
            icones: [],
          },
          {
            name: "Fissuring dreta",
            grau: "6b",
            icones: [],
          },
          {
            name: "Inverti",
            grau: "6c",
            icones: [],
          },
          {
            name: "Hybrid",
            grau: "6c/7a",
            icones: [],
          },
          {
            name: "Dents de rata",
            grau: "Proj.",
            icones: [],
          },
        ],
      },
      Bloc2: {
        coords: [41.499485, 0.778071],
        name: "Bloc 13: Nose he de mirar",
        img: cst1_2,
        vies: [
          {
            name: "Gatderencia",
            grau: "3c",
            icones: [],
          },
          {
            name: "No recordo",
            grau: "6a",
            icones: [],
          },
          {
            name: "No recordo 2",
            grau: "6a+",
            icones: [],
          },
        ],
      },
      Bloc3: {
        coords: [41.499299, 0.778252],
        name: "Bloc 13: Nose he de mirar",
        img: cst1_3,
        vies: [
          {
            name: "Gatderencia",
            grau: "3c",
            icones: [],
          },
          {
            name: "No recordo",
            grau: "6a",
            icones: [],
          },
          {
            name: "No recordo 2",
            grau: "6a+",
            icones: [],
          },
        ],
      },
      Bloc4: {
        coords: [41.499381, 0.777785],
        name: "Bloc 13: Nose he de mirar",
        img: cst1_4,
        vies: [
          {
            name: "Gatderencia",
            grau: "3c",
            icones: [],
          },
          {
            name: "No recordo",
            grau: "6a",
            icones: [],
          },
          {
            name: "No recordo 2",
            grau: "6a+",
            icones: [],
          },
        ],
      },
    },
    {
      Bloc1: {
        coords: [41.499381, 0.777785],
        name: "castelldans - Les penes",
        img: cst2_1,
        vies: [
          {
            name: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            name: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            name: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
      Bloc2: {
        coords: [41.499381, 0.776785],
        name: "castelldans 2-2",
        img: cst2_2,
        vies: [
          {
            name: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            name: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            name: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
      Bloc3: {
        coords: [41.496381, 0.777885],
        name: "castelldans 2-3",
        img: cst2_3,
        vies: [
          {
            name: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            name: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            name: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
      Bloc4: {
        coords: [41.496481, 0.777885],
        name: "castelldans 2-4",
        img: cst2_4,
        vies: [
          {
            name: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            name: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            name: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
      Bloc5: {
        coords: [41.496581, 0.777885],
        name: "castelldans 2-5",
        img: cst2_5,
        vies: [
          {
            name: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            name: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            name: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
      Bloc6: {
        coords: [41.496681, 0.777886],
        name: "castelldans 2-6",
        img: cst2_6,
        vies: [
          {
            name: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            name: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            name: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
      Bloc7: {
        coords: [41.496781, 0.777887],
        name: "castelldans 2-7",
        img: cst2_7,
        vies: [
          {
            name: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            name: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            name: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },

    },
  ],
  cub: [
    {
      Bloc1: {
        coords: [41.499661, 0.777974],
        name: "Bloc 14: esperó cabró",
        img: cst1_1,
        vies: [
          {
            name: "La banyera",
            grau: "5c",
            icones: [],
          },
          {
            name: "Banyera ext.",
            grau: "6a+",
            icones: [],
          },
          {
            name: "Regalo alemán",
            grau: "7a+",
            icones: [],
          },
          {
            name: "El cabro del cantó",
            grau: "6b",
            icones: [],
          },
          {
            name: "Esperó cabró",
            grau: "6b+",
            icones: [],
          },
          {
            name: "Fissuring direct",
            grau: "7a+",
            icones: [],
          },
          {
            name: "Fissuring dreta",
            grau: "6b",
            icones: [],
          },
          {
            name: "Inverti",
            grau: "6c",
            icones: [],
          },
          {
            name: "Hybrid",
            grau: "6c/7a",
            icones: [],
          },
          {
            name: "Dents de rata",
            grau: "Proj.",
            icones: [],
          },
        ],
      },
      Bloc2: {
        coords: [41.499485, 0.778071],
        name: "Bloc 13: Nose he de mirar",
        img: cst1_2,
        vies: [
          {
            name: "Gatderencia",
            grau: "3c",
            icones: [],
          },
          {
            name: "No recordo",
            grau: "6a",
            icones: [],
          },
          {
            name: "No recordo 2",
            grau: "6a+",
            icones: [],
          },
        ],
      },
      Bloc3: {
        coords: [41.499299, 0.778252],
        name: "Bloc 13: Nose he de mirar",
        img: cst1_3,
        vies: [
          {
            name: "Gatderencia",
            grau: "3c",
            icones: [],
          },
          {
            name: "No recordo",
            grau: "6a",
            icones: [],
          },
          {
            name: "No recordo 2",
            grau: "6a+",
            icones: [],
          },
        ],
      },
      Bloc4: {
        coords: [41.499381, 0.777785],
        name: "Bloc 13: Nose he de mirar",
        img: cst1_4,
        vies: [
          {
            name: "Gatderencia",
            grau: "3c",
            icones: [],
          },
          {
            name: "No recordo",
            grau: "6a",
            icones: [],
          },
          {
            name: "No recordo 2",
            grau: "6a+",
            icones: [],
          },
        ],
      },
    },
  ],
};

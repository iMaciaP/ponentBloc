import albagesimg from "../imgs/albages/albages.jpg";
import alb_b1 from "../imgs/albages/el-roc-de-la-duna/boulder-1.JPG";

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
    title: "Albages",
    desc: "some desc",
    btnlink: "/sector/1",
    btnLabel: "Anar",
    facils: 12,
    med: 5,
    dif: 7,
    xtrem: 3,
  },
  {
    header: "Les Garrigues",
    title: "Castelldans",
    desc: "alun tipus de descripcio del lloc dels blocs o algo",
    btnlink: "",
    btnLabel: "Anar",
    facils: 12,
    med: 5,
    dif: 7,
    xtrem: 3,
  },
  {
    header: "La Noguera",
    title: "Cubells",
    desc: "alun tipus de descripcio del lloc dels blocs o algo",
    btnlink: "",
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
  },
];

export const SectorsVies = {
  cst: [
    {
      Bloc1: {
        coords: "XX,XXXXX XX,XXXXX",
        name: "Bloc 14: esperó cabró",
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
        coords: "XX,XXXXX XX,XXXXX",
        name: "castelldans 1-2",
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
    {
      Bloc1: {
        coords: "XX,XXXXX XX,XXXXX",
        name: "castelldans 2-1",
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
        coords: "XX,XXXXX XX,XXXXX",
        name: "castelldans 2-2",
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
  ]
};

/*
export const SectorsVies = {
  Albages: {
    ElRocDeLaDuna: {
      Bloc1: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        img: alb_b1,
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
      Bloc2: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        img: alb_b1,
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
    },
  },
  cst: [
    {
      Bloc1: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
      Bloc2: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
    },
    {
      Bloc1: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
      Bloc2: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
    },
  ],
  Cogul: {
    BeerAction: {
      Bloc1: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
      Bloc2: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
    },
    ElTuronet: {
      Bloc1: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
      Bloc2: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
    },
    ElsCamps: {
      Bloc1: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
      Bloc2: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
    },
    LoPallars: {
      Bloc1: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
      Bloc2: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
    },
    MestreMuten: {
      Bloc1: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
      Bloc2: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
    },
    Universitat: {
      Bloc1: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
      Bloc2: {
        coords: "52,23134 43,234432",
        nom: "nom del bloc",
        vies: [
          {
            nom: "via 1",
            grau: "6a",
            icones: [],
          },
          {
            nom: "via 2",
            grau: "7b",
            icones: [],
          },
          {
            nom: "via 3",
            grau: "8c",
            icones: [],
          },
        ],
      },
    },
  },
};*/
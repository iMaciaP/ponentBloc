import cst_logo from "../imgs/castelldans/la-valleta/valleta_logo.png";
import cst2_logo from "../imgs/castelldans/la-valleta/penes_logo.png";
import cst1_4 from "../imgs/castelldans/la-valleta/boulder-4.JPG";
import cst1_5 from "../imgs/castelldans/la-valleta/boulder-5.JPG";
import cst1_6 from "../imgs/castelldans/la-valleta/boulder-6.JPG";
import cst1_7 from "../imgs/castelldans/la-valleta/boulder-7.JPG";
import cst1_8 from "../imgs/castelldans/la-valleta/boulder-8.JPG";
import cst1_9 from "../imgs/castelldans/la-valleta/boulder-9.JPG";
import cst1_10 from "../imgs/castelldans/la-valleta/boulder-10.JPG";
import cst1_11 from "../imgs/castelldans/la-valleta/boulder-11.JPG";
import cst1_12 from "../imgs/castelldans/la-valleta/boulder-12.JPG";
import cst1_13 from "../imgs/castelldans/la-valleta/boulder-13.JPG";
import cst1_14 from "../imgs/castelldans/la-valleta/boulder-14.JPG";
import cst1_15 from "../imgs/castelldans/la-valleta/boulder-15.JPG";
import cst1_16 from "../imgs/castelldans/la-valleta/boulder-16.JPG";
import cst2_1 from "../imgs/castelldans/les-penes/boulder-1.JPG";
import cst2_2 from "../imgs/castelldans/les-penes/boulder-2.JPG";
import cst2_3 from "../imgs/castelldans/les-penes/boulder-3.JPG";
import cst2_4 from "../imgs/castelldans/les-penes/boulder-4.JPG";
import cst2_5 from "../imgs/castelldans/les-penes/boulder-5.JPG";
import cst2_6 from "../imgs/castelldans/les-penes/boulder-6.JPG";
import cst2_7 from "../imgs/castelldans/les-penes/boulder-7.JPG";
import cst2_8 from "../imgs/castelldans/les-penes/boulder-8.JPG";
import cst2_9 from "../imgs/castelldans/les-penes/boulder-9.JPG";
import cst2_10 from "../imgs/castelldans/les-penes/boulder-10.JPG";
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
export const cardsGarrigues = [
  {
    header: "Les Garrigues",
    title: "Castelldans - La valleta",
    desc: "La valleta de castelldans, mítica zona",
    btnlink: "/cst/1",
    imgSrc: cst_logo,
    btnLabel: "Anar",
    facils: 13,
    med: 8,
    dif: 9,
    xtrem: 2,
  },
  {
    header: "Les Garrigues",
    title: "Castelldans - Les penes",
    desc: "Les penes de castelldans, molt bona per principiants i a l'hivern",
    btnlink: "/cst/2",
    imgSrc: cst2_logo,
    btnLabel: "Anar",
    facils: 1,
    med: 7,
    dif: 1,
    xtrem: 1,
  }
];

export const cardsNoguera = [
  {
    header: "La Noguera",
    title: "Cubells - Principal",
    desc: "Algun text descriptiu",
    btnlink: "/cub/1",
    imgSrc: cub_logo,
    btnLabel: "Anar",
    facils: 1,
    xtrem: 1,
  }
];

export const cardsSegria = [
  {
    header: "Segria",
    title: "Algun nom - Principal",
    desc: "Algun text descriptiu",
    btnlink: "/about",
    imgSrc: cub_logo,
    btnLabel: "Anar",
    facils: 2,
    med: 4,
    dif: 6,
    xtrem: 12,
  }
];

export const SectorsVies = {
  cst: [
    {
      Bloc4: {
        coords: [41.499404, 0.778075],
        name: "Bloc 4: Lapunxa",
        img: cst1_4,
        vies: [
          {
            name: "Exemple de via",
            grau: "6a",
            love: true,
            cau: true,
            sit: true
          },
          {
            name: "Un altre exemple sense icones de via",
            grau: "7a",
          }
        ],
      },
      Bloc5: {
        coords: [41.498878, 0.779547],
        name: "Bloc 5: Aresta varia",
        img: cst1_5,
        vies: [
          {
            name: "Exemple de via",
            grau: "6a",
            love: true,
            cau: true,
            sit: true
          },
          {
            name: "Un altre exemple sense icones de via",
            grau: "7a",
          }
        ],
      },
      Bloc6: {
        coords: [41.498791, 0.779804],
        name: "Bloc 6: Crec que es texos",
        img: cst1_6,
        vies: [
          {
            name: "Exemple de via",
            grau: "6a",
            love: true,
            cau: true,
            sit: true
          },
          {
            name: "Un altre exemple sense icones de via",
            grau: "7a",
          }
        ],
      },
      Bloc7: {
        coords: [41.498791, 0.779804],
        name: "Bloc 7: Crec que es texos",
        img: cst1_7,
        vies: [
          {
            name: "Exemple de via",
            grau: "6a",
            love: true,
            cau: true,
            sit: true
          },
          {
            name: "Un altre exemple sense icones de via",
            grau: "7a",
          }
        ],
      },
      Bloc8: {
        coords: [41.499915, 0.777947],
        name: "Bloc 8: Zona alta",
        img: cst1_8,
        vies: [
          {
            name: "Exemple de via",
            grau: "6a",
            love: true,
            cau: true,
            sit: true
          },
          {
            name: "Un altre exemple sense icones de via",
            grau: "7a",
          }
        ],
      },
      Bloc9: {
        coords: [41.498894, 0.778572],
        name: "Bloc 9: Maleït mosquit",
        img: cst1_9,
        vies: [
          {
            name: "Exemple de via",
            grau: "6a",
            love: true,
            cau: true,
            sit: true
          },
          {
            name: "Un altre exemple sense icones de via",
            grau: "7a",
          }
        ],
      },
      Bloc10: {
        coords: [41.497769, 0.778907],
        name: "Bloc 10: Zona alta v2",
        img: cst1_10,
        vies: [
          {
            name: "Exemple de via",
            grau: "6a",
            love: true,
            cau: true,
            sit: true
          }
        ],
      },
      Bloc11: {
        coords: [41.497822, 0.778695],
        name: "Bloc 11: La finestra",
        img: cst1_11,
        vies: [
          {
            name: "Exemple de via",
            grau: "6a",
            love: true,
            cau: true,
            sit: true
          }
        ],
      },
      Bloc12: {
        coords: [41.497892, 0.778850],
        name: "Bloc 12: Orígens",
        img: cst1_12,
        vies: [
          {
            name: "Exemple de via",
            grau: "6a",
            love: true,
            cau: true,
            sit: true
          }
        ],
      },
      Bloc13: {
        coords: [41.497892, 0.778850],
        name: "Bloc 12: Higher ground",
        img: cst1_13,
        vies: [
          {
            name: "Exemple de via",
            grau: "6a",
            love: true,
            cau: true,
            sit: true
          }
        ],
      },
      Bloc14: {
        coords: [41.497894, 0.778583],
        name: "Bloc 14: Pastora de gossos",
        img: cst1_14,
        vies: [
          {
            name: "Exemple de via",
            grau: "6a",
            love: true,
            cau: true,
            sit: true
          }
        ],
      },
      Bloc15: {
        coords: [41.497982, 0.778461],
        name: "Bloc 15: Pre-Pastora",
        img: cst1_15,
        vies: [
          {
            name: "Exemple de via",
            grau: "6a",
            love: true,
            cau: true,
            sit: true
          }
        ],
      },
      Bloc16: {
        coords: [41.497982, 0.778461],
        name: "Bloc 16: L'espiga",
        img: cst1_16,
        vies: [
          {
            name: "Exemple de via",
            grau: "6a",
            love: true,
            cau: true,
            sit: true
          }
        ],
      },
     
    },
    {
      Bloc1: {
        coords: [41.494163, 0.786883],
        name: "Bloc 1: Grata entrada",
        img: cst2_1,
        vies: [
          {
            name: "Aqui hi ha vies xules",
            grau: "V",
            sit: true,
            cau: true,
            love: true
          }
        ],
      },
      Bloc2: {
        coords: [41.494117, 0.786791],
        name: "Bloc 2: Esquerda bèstia",
        img: cst2_2,
        vies: [
          {
            name: "Aqui hi ha vies xules",
            grau: "V",
            sit: true,
            cau: true,
            love: true
          }
        ],
      },
      Bloc3: {
        coords: [41.494117, 0.786791],
        name: "Bloc 2: Esquerda bèstia (l'altra cara)",
        img: cst2_3,
        vies: [
          {
            name: "Aqui hi ha vies xules",
            grau: "V",
            sit: true,
            cau: true,
            love: true
          }
        ],
      },
      Bloc4: {
        coords: [41.494210, 0.786152],
        name: "Bloc 4: Projecte etern",
        img: cst2_4,
        vies: [
          {
            name: "Aqui hi ha vies xules",
            grau: "V",
            sit: true,
            cau: true,
            love: true
          }
        ],
      },
      Bloc5: {
        coords: [41.494188, 0.786076],
        name: "Bloc 5: Pre seven",
        img: cst2_5,
        vies: [
          {
            name: "Aqui hi ha el seven gay",
            grau: "7a",
            sit: true,
            cau: true,
            love: true
          }
        ],
      },
      Bloc6: {
        coords: [41.494188, 0.786076],
        name: "Bloc 6: Seven gay",
        img: cst2_6,
        vies: [
          {
            name: "Aqui hi ha el seven gay",
            grau: "7a",
            sit: true,
            cau: true,
            love: true
          }
        ],
      },
      Bloc7: {
        coords: [41.494129, 0.785860],
        name: "Bloc 7: El piset",
        img: cst2_7,
        vies: [
          {
            name: "Aqui hi ha el vies guais",
            grau: "7a",
            sit: true,
            cau: true,
            love: true
          }
        ],
      },
      Bloc8: {
        coords: [41.494094, 0.785748],
        name: "Bloc 8: El piset 2",
        img: cst2_8,
        vies: [
          {
            name: "Aqui hi ha el vies guais",
            grau: "7a",
            sit: true,
            cau: true,
            love: true
          }
        ],
      },
      Bloc9: {
        coords: [41.494134, 0.785817],
        name: "Bloc 9: El piset cara b",
        img: cst2_9,
        vies: [
          {
            name: "Aqui hi ha el vies guais",
            grau: "7a",
            sit: true,
            cau: true,
            love: true
          }
        ],
      },
      Bloc10: {
        coords: [41.494079, 0.785685],
        name: "Bloc 10: Les parets del pis",
        img: cst2_10,
        vies: [
          {
            name: "Aqui hi ha el vies guais",
            grau: "7a",
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
        img: missing,
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
        img: missing,
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

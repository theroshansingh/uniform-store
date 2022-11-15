import girls from "./images/ladies.jpeg";
import btech1 from "./images/btech1.jpeg";
import btech2 from "./images/btech2.jpeg";
import btechf from "./images/btechf.jpeg";
import dip from "./images/dip.jpeg";
import iti from "./images/iti.jpeg";
import mbau from "./images/mba.jpeg";
import bbau from "./images/bba.jpeg";
import bcomu from "./images/bcom.jpeg";
import navu from "./images/mnavy.jpeg";
import bphar1 from "./images/bphar1.jpeg";
import bphar2 from "./images/bphar.jpeg";
import dpharu from "./images/dphar.jpeg";
import bsc1 from "./images/bsc.jpeg";
import bscf from "./images/bscfinal.jpeg";
import mca1 from "./images/mca1.jpeg";
import mscf from "./images/mscnmca.jpeg";

let btech = [
  ["BTech"],
  [
    {
      year: "1st Year",
      genders: [
        { gen: "Boys", image: btech1, key: "btech1b" },
        { gen: "Girls", image: girls, key: "btech1g" },
      ],
    },
    {
      year: "2nd Year",
      genders: [
        { gen: "Boys", image: btech2, key: "btech2b" },
        { gen: "Girls", image: girls, key: "btech2g" },
      ],
    },
    {
      year: "3rd Year",
      genders: [
        { gen: "Boys", image: btech2, key: "btech3b" },
        { gen: "Girls", image: girls, key: "btech3G" },
      ],
    },
    {
      year: "4th Year",
      genders: [
        { gen: "Boys", image: btechf, key: "btech4b" },
        { gen: "Girls", image: girls, key: "btech4g" },
      ],
    },
    {
      year: "Diploma",
      genders: [
        { gen: "Boys", image: dip, key: "diplomab" },
        { gen: "Girls", image: girls, key: "diplomag" },
      ],
    },
    {
      year: "IIIT",
      genders: [
        { gen: "Boys", image: iti, key: "IIITb" },
        { gen: "Girls", image: girls, key: "IIITg" },
      ],
    },
  ],
];

let bba = [
  ["BBA"],
  [
    {
      dep: "BBA",
      year: "1st Year",
      genders: [
        { gen: "Boys", image: bbau, key: "bba1b" },
        { gen: "Girls", image: girls, key: "bba1g" },
      ],
    },
    {
      dep: "BBA",
      year: "2nd Year",
      genders: [
        { gen: "Boys", image: bbau, key: "bba2b" },
        { gen: "Girls", image: girls, key: "bba2g" },
      ],
    },
    {
      dep: "BBA",
      year: "3rd Year",
      genders: [
        { gen: "Boys", image: bbau, key: "bba3b" },
        { gen: "Girls", image: girls, key: "bba3g" },
      ],
    },
  ],
];

let bcom = [
  ["BCom"],
  [
    {
      dep: "BCom",
      year: "1st Year",
      genders: [
        { gen: "Boys", image: bcomu, key: "bcom1b" },
        { gen: "Girls", image: girls, key: "bcom1g" },
      ],
    },
    {
      dep: "BCom",
      year: "2nd Year",
      genders: [
        { gen: "Boys", image: bcomu, key: "bcom2b" },
        { gen: "Girls", image: girls, key: "bcom2g" },
      ],
    },
    {
      dep: "BCom",
      year: "3rd Year",
      genders: [
        { gen: "Boys", image: bcomu, key: "bcom3b" },
        { gen: "Girls", image: girls, key: "bcom3g" },
      ],
    },
  ],
];

let mba = [
  ["MBA"],
  [
    {
      dep: "MBA",
      year: "1st Year",
      genders: [
        { gen: "Boys", image: mbau, key: "mba1b" },
        { gen: "Girls", image: girls, key: "mba1g" },
      ],
    },
    {
      dep: "MBA",
      year: "2nd Year",
      genders: [
        { gen: "Boys", image: mbau, key: "mba2b" },
        { gen: "Girls", image: girls, key: "mba2g" },
      ],
    },
  ],
];

let bsc = [
  ["BSC"],
  [
    {
      dep: "BSC",
      year: "1st Year",
      genders: [
        { gen: "Boys", image: bsc1, key: "bsc1b" },
        { gen: "girls", image: girls, key: "bsc1g" },
      ],
    },
    {
      dep: "BSC",
      year: "2nd Year",
      genders: [
        { gen: "Boys", image: bsc1, key: "bsc2b" },
        { gen: "Girls", image: girls, key: "bsc2g" },
      ],
    },
    {
      dep: "BSC",
      year: "3rd Year",
      genders: [
        { gen: "Boys", image: bscf, key: "bsc3b" },
        { gen: "Girls", image: girls, key: "bsc3g" },
      ],
    },
  ],
];

let msc = [
  ["MSC"],
  [
    {
      dep: "MSC",
      year: "1st Year",
      genders: [
        { gen: "Boys", image: mscf, key: "msc1b" },
        { gen: "Girls", image: girls, key: "msc1g" },
      ],
    },
    {
      dep: "MSC",
      year: "2nd Year",
      genders: [
        { gen: "Boys", image: mscf, key: "msc2b" },
        { gen: "Girls", image: girls, key: "msc2g" },
      ],
    },
  ],
];

let mca = [
  ["MCA"],
  [
    {
      dep: "MCA",
      year: "1st Year",
      genders: [
        { gen: "Boys", image: mca1, key: "mca1b" },
        { gen: "Girls", image: girls, key: "mca1g" },
      ],
    },
    {
      dep: "MCA",
      year: "2nd Year",
      genders: [
        { gen: "Boys", image: mscf, key: "mca2b" },
        { gen: "Girls", image: girls, key: "mca2g" },
      ],
    },
  ],
];

let mNav = [
  ["Merchant Navy"],
  [
    {
      year: "",
      genders: [
        { gen: "Boys", image: navu, key: "mnavb" },
        { gen: "Girls", image: girls, key: "mnavg" },
      ],
    },
  ],
];

let bPharma = [
  ["B.Pharma"],
  [
    {
      dep: "B.Pharma",
      year: "1st Year",
      genders: [
        { gen: "Boys", image: bphar1, key: "bp1b" },
        { gen: "Girls", image: girls, key: "bp1g" },
      ],
    },
    {
      dep: "B.Pharma",
      year: "2nd Year",
      genders: [
        { gen: "Boys", image: bphar2, key: "bp2b" },
        { gen: "Girls", image: girls, key: "bp2g" },
      ],
    },
    {
      dep: "B.Pharma",
      year: "3rd Year",
      genders: [
        { gen: "Boys", image: bphar2, key: "bp3b" },
        { gen: "Girls", image: girls, key: "bp3g" },
      ],
    },
    {
      dep: "B.Pharma",
      year: "4th Year",
      genders: [
        { gen: "Boys", image: bphar2, key: "bp4b" },
        { gen: "Girls", image: girls, key: "bp4g" },
      ],
    },
  ],
];

let dPharma = [
  ["D.Pharma"],
  [
    {
      dep: "D.Pharma",
      year: "1st Year",
      genders: [
        { gen: "Boys", image: dpharu, key: "dp1b" },
        { gen: "Girls", image: girls, key: "dp1g" },
      ],
    },
    {
      dep: "D.Pharma",
      year: "2nd Year",
      genders: [
        { gen: "Boys", image: dpharu, key: "dp2b" },
        { gen: "Girls", image: girls, key: "dp2g" },
      ],
    },
    {
      dep: "D.Pharma",
      year: "3rd Year",
      genders: [
        { gen: "Boys", image: dpharu, key: "dp3b" },
        { gen: "Girls", image: girls, key: "dp3g" },
      ],
    },
  ],
];

// Disciplines
let btechPlaceHolder = [["Btech"], [btech]];
let management = [["Management"], [bba, bcom, mba]];
let graduation = [["Graduation"], [bsc, msc, mca]];
let mNavPlaceHonder = [["Merchant Navy"], [mNav]];
let pharmacy = [["Pharmacy"], [bPharma, dPharma]];

// categories
let categories = [
  btechPlaceHolder,
  management,
  graduation,
  mNavPlaceHonder,
  pharmacy,
];

export default categories;

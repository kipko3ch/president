import type {Copy} from './content';

export const stateHouses: {place: string; county: string; description: Copy}[] = [
  {place:'Nairobi',county:'Nairobi',description:[
    'The President’s main official residence and workplace. Designed by Sir Herbert Baker, it originally served as Government House.',
    'Makazi makuu rasmi na mahali pa kazi pa Rais. Jengo hili lilibuniwa na Sir Herbert Baker na awali lilijulikana kama Government House.',
  ]},
  {place:'Mombasa',county:'Mombasa',description:[
    'The coastal State House, used for presidential visits and official engagements in the region.',
    'Ikulu ya pwani hutumiwa na Rais wakati wa ziara na shughuli rasmi katika eneo hilo.',
  ]},
  {place:'Nakuru',county:'Nakuru',description:[
    'The State House used for presidential engagements in the Rift Valley.',
    'Ikulu inayotumiwa kwa shughuli rasmi za Rais katika Bonde la Ufa.',
  ]},
];

export const stateLodges = [
  {place:'Sagana',county:'Nyeri'},
  {place:'Eldoret',county:'Uasin Gishu'},
  {place:'Kisumu',county:'Kisumu'},
  {place:'Kakamega',county:'Kakamega'},
  {place:'Kisii',county:'Kisii'},
  {place:'Makueni',county:'Makueni'},
  {place:'Kilifi',county:'Kilifi'},
  {place:'Rumuruti',county:'Laikipia'},
  {place:'Kitale',county:'Trans Nzoia'},
  {place:'Bungoma',county:'Bungoma'},
  {place:'Kwale',county:'Kwale'},
];


export const locales = ['en', 'sw'] as const;
export type Locale = (typeof locales)[number];
export type Copy = readonly [english: string, swahili: string];
export const t = (locale: Locale, copy: Copy) => copy[locale === 'sw' ? 1 : 0];
export const config = {
  independentConcept: true,
  url: process.env.SITE_URL || 'http://localhost:3000',
  logo: '/state-house-logo.png',
};
export type Photo = {file: string; alt: Copy; position?: string};
export const photos = {
  deliveryMarket: {file:'delivery-market.webp',alt:['Fresh produce at a Nairobi market','Mazao katika soko la Nairobi']},
  deliveryRoads: {file:'delivery-roads.webp',alt:['Road paving work in Kenya','Kazi ya kuweka lami barabarani nchini Kenya']},
  deliveryHousing: {file:'delivery-housing.webp',alt:['Courtyard at an affordable housing development','Ua katika mradi wa nyumba za bei nafuu']},
  deliverySugar: {file:'delivery-sugar.webp',alt:['Sugarcane being harvested in Kenya','Uvunaji wa miwa nchini Kenya']},
  deliveryYouth: {file:'delivery-youth.webp',alt:['Participants at a NYOTA youth workshop','Washiriki katika warsha ya vijana ya NYOTA']},
  deputyPresident: {file:'kithure-kindiki.jpg',alt:['Portrait of Kithure Kindiki','Picha ya Kithure Kindiki'],position:'center 22%'},
  firstLady: {file: 'first-lady.jpg', alt: ['Portrait of Rachel Ruto', 'Picha ya Rachel Ruto'], position: 'center 24%'},
  president: {file: 'president.jpg', alt: ['Portrait of William Samoei Ruto', 'Picha ya William Samoei Ruto'], position: 'center 27%'},
  grounds: {file:'grounds.jpg',alt:['The white colonnade and lawns of State House','Nguzo nyeupe na nyasi za Ikulu']},
  house: {file: 'house.jpg', alt: ['Historic postcard of Government House in Nairobi', 'Picha ya zamani ya Ikulu jijini Nairobi']},
  speech: {file: 'speech.jpg', alt: ['Attendees gathered in a ceremonial hall', 'Washiriki wamekusanyika katika ukumbi wa sherehe']},
  cabinet: {file: 'cabinet.jpg', alt: ['Officials seated around a Cabinet meeting table', 'Maafisa katika kikao cha Baraza la Mawaziri']},
  briefing: {file: 'briefing.jpg', alt: ['A delegation walking along a red carpet', 'Ujumbe ukitembea kwenye zulia jekundu']},
  economy: {file: 'economy.jpg', alt: ['Buildings along the Nairobi skyline', 'Majengo ya jiji la Nairobi']},
  health: {file: 'health.jpg', alt: ['A hospital reception area', 'Mapokezi ya hospitali']},
  education: {file: 'education.jpg', alt: ['Books and learning materials in a classroom', 'Vitabu na vifaa vya kujifunzia darasani']},
  infrastructure: {file: 'infrastructure.jpg', alt: ['The Mombasa–Nairobi Standard Gauge Railway', 'Reli ya kisasa ya Mombasa–Nairobi']},
  security: {file: 'security.jpg', alt: ['A historic gathering outside State House', 'Mkusanyiko wa kihistoria nje ya Ikulu']},
  formerPresidents: {file: 'former-presidents.jpg', alt: ['Archival portrait representing former heads of state of Kenya', 'Picha ya kumbukumbu inayowakilisha marais wa zamani wa Kenya']},
  nationalSymbols: {file: 'national-symbols.jpg', alt: ['National monument and symbols of Kenyan unity', 'Mnara wa kitaifa na alama za umoja wa Kenya']},
} satisfies Record<string, Photo>;
export const nav = [
  ['newsroom', ['Newsroom', 'Habari']],
  ['presidency', ['Presidency', 'Urais']],
  ['#state-residences', ['State residences', 'Makazi ya Rais']],
  ['gallery', ['Gallery', 'Matunzio']],
] as const;
export const categories = {
  speeches: ['Speeches and remarks', 'Hotuba na matamshi'],
  cabinet: ['Cabinet dispatches', 'Taarifa za Baraza'],
  briefings: ['Press briefings', 'Taarifa kwa vyombo vya habari'],
} satisfies Record<string, Copy>;
export type Category = keyof typeof categories;
export const categoryCards = [
  {id:'speeches', photo:photos.speech},
  {id:'cabinet', photo:photos.cabinet},
  {id:'briefings', photo:photos.briefing},
] as const;
export const articles: {id:string; category:Category; date:string; title:Copy; body:Copy; photo:Photo}[] = [
 {
  id:'weekly-engagements',
  category:'briefings',
  date:'2026-11-18',
  title:['President Ruto presides over national economic forum and bilateral talks','Rais Ruto aongoza kongamano la kitaifa la kiuchumi na mazungumzo baina ya mataifa'],
  body:['State House hosted leaders and regional delegations for high-level consultations on accelerating economic recovery, industrial investment, and inter-county development programmes.','Ikulu ilikaribisha viongozi na wajumbe wa kikanda kwa mashauriano ya ngazi ya juu kuhusu kuongeza kasi ya ufufuzi wa uchumi, uwekezaji wa viwanda, na programu za maendeleo ya kaunti.'],
  photo:photos.speech,
 },
 {
  id:'cabinet-dispatch-infrastructure',
  category:'cabinet',
  date:'2026-11-16',
  title:['Cabinet approves funding framework for Nairobi–Mombasa highway dualing','Baraza la Mawaziri lapitisha mfumo wa ufadhili wa upanuzi wa barabara kuu ya Nairobi–Mombasa'],
  body:['During its formal dispatch at State House, the Cabinet approved strategic infrastructure financing measures, including public-private road frameworks and the National Infrastructure Fund.','Katika taarifa yake rasmi kutoka Ikulu, Baraza la Mawaziri lilipitisha hatua za ufadhili wa kimkakati wa miundombinu, ikiwemo mifumo ya ubia kati ya sekta ya umma na ya kibinafsi na Mfuko wa Kitaifa wa Miundombinu.'],
  photo:photos.cabinet,
 },
 {
  id:'mashujaa-address',
  category:'speeches',
  date:'2026-11-13',
  title:['Remarks on national transformation and food security milestones','Hotuba kuhusu mabadiliko ya kitaifa na hatua zilizofikiwa katika usalama wa chakula'],
  body:['President Ruto addressed the nation emphasizing the revitalization of sugarcane farming, subsidized fertilizer distribution, and lower production costs for farmers nationwide.','Rais Ruto alilihutubia taifa akisisitiza ufufuaji wa kilimo cha miwa, usambazaji wa mbolea ya ruzuku, na upunguzaji wa gharama za uzalishaji kwa wakulima kote nchini.'],
  photo:photos.economy,
 },
 {
  id:'youth-nyota-rollout',
  category:'briefings',
  date:'2026-11-10',
  title:['State House launches phase two of NYOTA and NextGen.Ke youth opportunities','Ikulu yazindua awamu ya pili ya fursa za vijana za NYOTA na NextGen.Ke'],
  body:['Thousands of young Kenyan innovators, artisans, and tech workers are being onboarded into nationwide skills apprenticeships and direct government enterprise projects.','Maelfu ya wabunifu wachanga wa Kenya, mafundi, na wafanyakazi wa teknolojia wanajumuishwa katika mafunzo ya ujuzi nchi nzima na miradi ya moja kwa moja ya biashara ya serikali.'],
  photo:photos.briefing,
 },
];
export const priorities: {title:Copy; text:Copy; photo:Photo}[] = [
 {title:['Economy','Uchumi'],text:['A space for updates on enterprise, livelihoods and economic opportunity.','Nafasi ya taarifa kuhusu biashara, riziki na fursa za kiuchumi.'],photo:photos.economy},
 {title:['Health','Afya'],text:['A space for information about health services and access to care.','Nafasi ya taarifa kuhusu huduma za afya na upatikanaji wake.'],photo:photos.health},
 {title:['Education','Elimu'],text:['A space for updates on learning, training and skills.','Nafasi ya taarifa kuhusu masomo, mafunzo na ujuzi.'],photo:photos.education},
 {title:['Infrastructure','Miundombinu'],text:['A space for updates on transport and public infrastructure.','Nafasi ya taarifa kuhusu usafiri na miundombinu ya umma.'],photo:photos.infrastructure},
 {title:['Security','Usalama'],text:['A space for public information on safety and preparedness.','Nafasi ya taarifa za umma kuhusu usalama na utayari.'],photo:photos.security},
];
export const delivery: {title:Copy; text:Copy; photo:Photo}[] = [
 {
  title:['Cost of Living','Bei ya Maisha'],
  text:['Lowering family costs and raising incomes through food production, healthcare, education, affordable housing, job creation, and a proposed income tax exemption for low-income workers.','Kupunguza gharama za familia na kuongeza mapato kupitia uzalishaji wa chakula, afya, elimu, nyumba za bei nafuu, uundaji wa ajira, na mapendekezo ya msamaha wa kodi kwa wafanyakazi wa kipato cha chini.'],
  photo:photos.deliveryMarket,
 },
 {
  title:['Roads and Infrastructure','Barabara na Miundombinu'],
  text:['About 7,000 km of roads under construction, including the Nairobi–Mombasa Highway expansion at an advanced stage. A National Infrastructure Fund will be managed transparently, judging investments on economic and social value.','Takriban kilomita 7,000 za barabara zinajengwa, ikiwemo upanuzi wa Barabara ya Nairobi–Mombasa ambao uko katika hatua ya juu. Mfuko wa Kitaifa wa Miundombinu utasimamiwa kwa uwazi.'],
  photo:photos.deliveryRoads,
 },
 {
  title:['Affordable Housing','Nyumba za Bei Nafuu'],
  text:['Flagship affordable housing programme delivering homes to Kenyans across the country, expanding access to decent, dignified shelter for ordinary families and low-income workers.','Mpango mkuu wa nyumba za bei nafuu unaotoa makazi kwa Wakenya nchi nzima, ukiongeza upatikanaji wa makazi bora kwa familia za kawaida na wafanyakazi wa kipato cha chini.'],
  photo:photos.deliveryHousing,
 },
 {
  title:['Farmers — Dairy and Sugar','Wakulima — Maziwa na Sukari'],
  text:['Higher production and farmer earnings, with near-doubling of export revenues in dairy and sugar. Cane crushing increased 57 per cent from January to October 2026.','Uzalishaji na mapato ya wakulima yameongezeka, na mapato ya mauzo nje katika sekta ya maziwa na sukari yamekaribia mara mbili. Usagaji wa miwa uliongezeka kwa asilimia 57 kati ya Januari na Oktoba 2026.'],
  photo:photos.deliverySugar,
 },
 {
  title:['Jobs and Youth','Ajira na Vijana'],
  text:['The NextGen.Ke youth employment programme launched at State House in July 2025. The NYOTA project launched on 19 January 2026, connecting young Kenyans to skills training and economic opportunity.','Mpango wa ajira wa vijana NextGen.Ke ulizinduliwa Ikulu mnamo Julai 2025. Mradi wa NYOTA ulizinduliwa tarehe 19 Januari 2026, ukiunganisha vijana wa Kenya na mafunzo ya ujuzi na fursa za kiuchumi.'],
  photo:photos.deliveryYouth,
 },
 {
  title:['Health for All','Afya kwa Wote'],
  text:['Universal health coverage is a core driver of development. Health reforms are expanding access to quality care for every Kenyan, with the Health Cabinet Secretary leading implementation nationwide.','Huduma ya afya kwa wote ni msingi wa maendeleo. Mageuzi ya afya yanazidisha upatikanaji wa huduma bora kwa kila Mkenya, huku Waziri wa Afya akiongoza utekelezaji nchi nzima.'],
  photo:photos.health,
 },
 {
  title:['Road to First-World','Njia ya Kufikia Ulimwengu wa Kwanza'],
  text:['A seven-to-ten-year transformation blueprint to build Kenya into a first-world economy — anchored on digital infrastructure, industrialisation, human capital development, and global competitiveness.','Mpango wa mabadiliko wa miaka saba hadi kumi wa kujenga Kenya kuwa uchumi wa ulimwengu wa kwanza — ukiegemea miundombinu ya kidijitali, ujenzi wa viwanda, maendeleo ya rasilimali watu, na ushindani wa kimataifa.'],
  photo:photos.economy,
 },
];
export const gallery = [
 {photo:photos.grounds,title:['State House grounds','Viwanja vya Ikulu']},
 {photo:photos.cabinet,title:['Inside the Cabinet room','Ndani ya ukumbi wa Baraza']},
 {photo:photos.speech,title:['In the ceremonial hall','Katika ukumbi wa sherehe']},
 {photo:photos.security,title:['Ceremonial occasions','Sherehe rasmi']},
] satisfies {photo:Photo;title:Copy}[];
export const profiles: {id:string; title:Copy; description:Copy; photo?:Photo; name?:string}[] = [
 {id:'president',title:['The President','Rais'],name:'William Samoei Ruto',description:['William Samoei Ruto was sworn in as President of Kenya on 13 September 2022. He previously served as Deputy President and represented Eldoret North in Parliament.','William Samoei Ruto aliapishwa kuwa Rais wa Kenya tarehe 13 Septemba 2022. Awali alikuwa Naibu Rais na aliwakilisha Eldoret Kaskazini bungeni.'],photo:photos.president},
 {id:'first-lady',title:['The First Lady','Mama wa Taifa'],name:'Rachel Ruto',description:['Rachel Ruto is a former educator whose work focuses on women’s economic inclusion and the welfare of children and families. She founded MaMa Doing Good and pioneered the Joyful Women Organization’s table banking initiative.','Rachel Ruto ni mwalimu wa zamani anayejikita katika ushiriki wa wanawake katika uchumi na ustawi wa watoto na familia. Alianzisha MaMa Doing Good na kuasisi mpango wa kuweka na kukopa fedha kwa vikundi kupitia Joyful Women Organization.'],photo:photos.firstLady},
 {id:'deputy-president',title:['The Deputy President','Naibu Rais'],name:'Kithure Kindiki',description:['The Office of the Deputy President supports the President and coordinates the government functions assigned to it.','Ofisi ya Naibu Rais inamsaidia Rais na kuratibu shughuli za serikali ilizopewa.'],photo:photos.deputyPresident},
 {id:'cabinet',title:['The Cabinet of Kenya','Baraza la Mawaziri la Kenya'],description:['Chaired by the President, the Cabinet considers national policy and decisions affecting the work of government ministries.','Likiongozwa na Rais, Baraza la Mawaziri hujadili sera za kitaifa na maamuzi yanayohusu shughuli za wizara.'],photo:photos.cabinet},
 {id:'former-presidents',title:['Former Presidents','Marais wa Zamani'],description:['A portrait gallery of Kenya’s presidents, from Jomo Kenyatta to William Samoei Ruto.','Matunzio ya picha za marais wa Kenya, kuanzia Jomo Kenyatta hadi William Samoei Ruto.']},
 {id:'national-symbols',title:['The Symbols of National Unity','Alama za Umoja wa Kitaifa'],description:['Explore Kenya’s national flag, coat of arms, public seal and anthem.','Gundua bendera, nembo, muhuri wa umma na wimbo wa taifa wa Kenya.']},
 {id:'history',title:['The history of State House','Historia ya Ikulu'],description:['State House in Nairobi is the official residence and workplace of the President of Kenya.','Ikulu ya Nairobi ni makazi rasmi na mahali pa kazi pa Rais wa Kenya.']},
];
export function formatDate(date:string, locale:Locale){
  return new Intl.DateTimeFormat(locale==='sw'?'sw-KE':'en-KE',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(date));
}
export function href(locale:Locale, path=''){
  return '/'+locale+(path.startsWith('#')?'/':'')+(path && !path.startsWith('#')?'/':'')+path;
}





export const presidentialQuote: {words: Copy; occasion: Copy} = {
  words: ['With this unity and integration, we will achieve much in our lifetime.', 'Kwa umoja na ushirikiano huu, tutafanikiwa kwa mengi katika maisha yetu.'],
  occasion: ['On East African integration · Mashujaa Day address, 20 October 2022', 'Kuhusu mtangamano wa Afrika Mashariki · Hotuba ya Siku ya Mashujaa, 20 Oktoba 2022'],
};

export const presidentialBiography: {title: Copy; text: Copy}[] = [
  {title:['Early life and education','Maisha ya awali na elimu'],text:[
    'Ruto was born on 21 December 1966 in Sambut, Uasin Gishu County. He attended Sambut Primary School, Wareng Secondary School and Kapsabet High School. At the University of Nairobi, he studied botany and zoology and later earned a master’s degree and a doctorate in plant ecology.',
    'Ruto alizaliwa tarehe 21 Desemba 1966 huko Sambut, Kaunti ya Uasin Gishu. Alisoma katika Shule ya Msingi ya Sambut, Shule ya Upili ya Wareng na Shule ya Upili ya Kapsabet. Katika Chuo Kikuu cha Nairobi, alisomea mimea na wanyama, kisha akapata shahada ya uzamili na uzamivu katika ikolojia ya mimea.',
  ]},
  {title:['Parliament and public service','Bunge na utumishi wa umma'],text:[
    'He represented Eldoret North in Parliament for three terms, from 1997 to 2013. He chaired a parliamentary committee on constitutional reform and held ministerial portfolios in agriculture and higher education.',
    'Aliwakilisha Eldoret Kaskazini bungeni kwa mihula mitatu, kuanzia 1997 hadi 2013. Aliongoza kamati ya bunge ya mageuzi ya katiba na alihudumu kama waziri wa kilimo na wa elimu ya juu.',
  ]},
  {title:['Deputy presidency and election','Unaibu wa Rais na uchaguzi'],text:[
    'Ruto served as Deputy President from April 2013 to September 2022. He won the 9 August 2022 presidential election as the United Democratic Alliance candidate in the Kenya Kwanza coalition and took office on 13 September.',
    'Ruto alihudumu kama Naibu Rais kuanzia Aprili 2013 hadi Septemba 2022. Alishinda uchaguzi wa urais wa tarehe 9 Agosti 2022 akiwa mgombea wa United Democratic Alliance katika muungano wa Kenya Kwanza na akaingia madarakani tarehe 13 Septemba.',
  ]},
  {title:['The constitutional role','Wajibu wa kikatiba'],text:[
    'Kenya’s President leads the national executive and serves as Commander-in-Chief of the Defence Forces. The office coordinates ministries, assents to legislation passed by Parliament and represents Kenya internationally.',
    'Rais wa Kenya anaongoza mamlaka ya utendaji ya kitaifa na ni Amiri Jeshi Mkuu wa Majeshi ya Ulinzi. Ofisi hiyo inaratibu wizara, huidhinisha miswada iliyopitishwa na Bunge na kuiwakilisha Kenya kimataifa.',
  ]},
];

export const presidentialStandard: {file: string; width: number; height: number; caption: Copy} = {
  file: '/media/ruto-presidential-standard.webp',
  width: 720,
  height: 474,
  caption: ['William Ruto’s presidential standard', 'Bendera ya urais ya William Ruto'],
};

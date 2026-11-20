import Image from 'next/image';
import {t, type Copy, type Locale} from '../lib/content';

const photographs: {file: string; width: number; height: number; caption: Copy; alt: Copy}[] = [
  {
    file:'government-house-archive.webp', width:500, height:500,
    caption:['Government House during the colonial era','Government House wakati wa ukoloni'],
    alt:['An archival photograph of a gathering outside Government House','Picha ya kumbukumbu ya mkusanyiko nje ya Government House'],
  },
  {
    file:'state-house-before-renovation.webp', width:481, height:333,
    caption:['State House, Nairobi, before the 2024 renovation','Ikulu ya Nairobi kabla ya ukarabati wa 2024'],
    alt:['The white colonnade and tiled roof of State House beneath the Kenyan flag','Nguzo nyeupe na paa la vigae la Ikulu chini ya bendera ya Kenya'],
  },
];

const history: {title: Copy; text: Copy}[] = [
  {
    title:['Government House','Government House'],
    text:[
      'Before the governor’s residence moved to Nairobi, Government House in Mombasa served that role. Work on Nairobi’s Government House began in 1907 for the British colonial administration. Sir Herbert Baker designed the building, which combines Palladian and neoclassical features.',
      'Kabla ya makazi ya gavana kuhamia Nairobi, Government House ya Mombasa ilitumika kwa kusudi hilo. Ujenzi wa Government House ya Nairobi ulianza mwaka 1907 kwa ajili ya utawala wa kikoloni wa Uingereza. Sir Herbert Baker alibuni jengo hilo kwa kuchanganya mitindo ya Kipalladio na ya ufufuo wa usanifu wa kale.',
    ],
  },
  {
    title:['From independence to the republic','Kutoka uhuru hadi jamhuri'],
    text:[
      'After independence, the building became State House and served as the prime minister’s residence. When Kenya became a republic on 12 December 1964, it became the President’s official residence. Presidents Jomo Kenyatta and Daniel arap Moi preferred private homes, while State House remained a workplace and a venue for state guests and receptions.',
      'Baada ya uhuru, jengo hilo liliitwa Ikulu na likawa makazi ya Waziri Mkuu. Kenya ilipokuwa jamhuri tarehe 12 Desemba 1964, Ikulu ikawa makazi rasmi ya Rais. Marais Jomo Kenyatta na Daniel arap Moi walipendelea kuishi katika nyumba zao binafsi, huku Ikulu ikiendelea kutumika kama mahali pa kazi na pa kupokea wageni wa kitaifa.',
    ],
  },
  {
    title:['State House today','Ikulu leo'],
    text:[
      'The Nairobi building underwent renovation in 2024. It remains the President’s principal official residence and workplace. Kenya also has State Houses in Mombasa and Nakuru, as well as regional State Lodges used during official visits.',
      'Jengo la Nairobi lilikarabatiwa mwaka 2024. Bado ni makazi makuu rasmi na mahali pa kazi pa Rais. Kenya pia ina Ikulu za Mombasa na Nakuru, pamoja na makazi ya Rais katika mikoa yanayotumiwa wakati wa ziara rasmi.',
    ],
  },
];

export function StateHouseHistory({locale}: {locale: Locale}) {
  return <>
    <div className="history-photographs">
      {photographs.map(({file, width, height, caption, alt}) => <figure key={file}>
        <Image src={'/media/' + file} width={width} height={height}
          alt={t(locale,alt)} sizes="(max-width: 620px) 92vw, 365px" quality={70}/>
        <figcaption>{t(locale,caption)}</figcaption>
      </figure>)}
    </div>
    <div className="biography-sections state-house-history">
      {history.map(({title,text}) => <section key={title[0]}>
        <h2>{t(locale,title)}</h2><p>{t(locale,text)}</p>
      </section>)}
      <p className="history-attribution">{t(locale,['Adapted from Wikipedia’s State House, Nairobi article.','Muhtasari umetokana na makala ya Wikipedia kuhusu Ikulu ya Nairobi.'])}</p>
    </div>
  </>;
}

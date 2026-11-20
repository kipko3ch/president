import Image from 'next/image';
import Link from 'next/link';
import {href, t, type Locale} from '../lib/content';

const portraits = [
  {name:'Jomo Kenyatta', file:'jomo-kenyatta.jpg', width:250, height:359, term:'1964–1978'},
  {name:'Daniel arap Moi', file:'moi.jpg', width:120, height:160, term:'1978–2002'},
  {name:'Mwai Kibaki', file:'kibaki.jpg', width:120, height:164, term:'2002–2013'},
  {name:'Uhuru Kenyatta', file:'uhuru-kenyatta.png', width:250, height:279, term:'2013–2022'},
  {name:'William Samoei Ruto', file:'william-ruto.jpg', width:250, height:308},
];

export function PresidentialGallery({locale}: {locale: Locale}) {
  return (
    <section className="presidential-gallery" id="presidents" aria-labelledby="presidents-heading">
      <h2 id="presidents-heading">{t(locale, ['Presidential portraits', 'Picha za marais'])}</h2>
      <ul>
        {portraits.map(({name, file, width, height, term}) => (
          <li key={file}>
            <Image src={'/media/' + file} alt={name} width={width} height={height} unoptimized/>
            <h3>{term ? name : <Link href={href(locale, 'presidency/president')}>{name}</Link>}</h3>
            <p>{term ?? t(locale, ['In office since 2022', 'Madarakani tangu 2022'])}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

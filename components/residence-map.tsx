'use client';

import {Fragment,useState} from 'react';
import map from '../lib/kenya-counties.json';
import {t,type Locale} from '../lib/content';
import {stateHouses,stateLodges} from '../lib/residences';

const houseCounties = new Set(stateHouses.map(house => house.county));
const lodgeCounties = new Set(stateLodges.map(lodge => lodge.county));

export function ResidenceMap({locale}: {locale: Locale}) {
  const [county,setCounty] = useState<string>();
  const house = stateHouses.find(item => item.county === county);
  const lodge = stateLodges.find(item => item.county === county);
  const residence = house ?? lodge;
  const kind = house ? t(locale,['State House','Ikulu']) : t(locale,['State Lodge','Makazi ya Rais']);

  function names(locations: {place:string;county:string}[]) {
    return locations.map((item,index) => <Fragment key={item.place}>
      {index > 0 && (index === locations.length - 1 ? t(locale,[' and ',' na ']) : ', ')}
      <button type="button" aria-pressed={county === item.county} aria-controls="residence-details"
        onClick={() => setCounty(item.county)}>{item.place}</button>
    </Fragment>);
  }

  return <section className="residences section shell" id="state-residences" aria-labelledby="residences-title">
    <h2 id="residences-title">{t(locale,['State Houses and Lodges','Ikulu na Makazi ya Rais'])}</h2>
    <div className="residences-layout">
      <figure className="residence-map">
        <svg viewBox={map.viewBox} role="img" aria-label={t(locale,['Kenyan counties with State Houses and lodges','Kaunti za Kenya zenye Ikulu na makazi ya Rais'])}>
          {map.counties.map(({name,path}) => {
            const kind = houseCounties.has(name) ? 'county-house' : lodgeCounties.has(name) ? 'county-lodge' : '';
            return <path key={name} d={path} fillRule="evenodd"
              className={['residence-county',kind,county === name ? 'county-selected' : ''].join(' ')}
              onClick={kind ? () => setCounty(name) : undefined}><title>{name}</title></path>;
          })}
          {map.lakes.map(({name,path}) => <path key={name} d={path} fillRule="evenodd" className="residence-lake"/>)}
        </svg>
        <figcaption className="residence-legend">
          <span>{t(locale,['State Houses','Ikulu'])}</span>
          <span>{t(locale,['State Lodges','Makazi ya Rais'])}</span>
        </figcaption>
      </figure>
      <div className="residences-directory">
        <div className="residence-details" id="residence-details" aria-live="polite" aria-atomic="true">
          {residence ? <>
            <p className="eyebrow">{kind} · {residence.county}</p>
            <h3>{residence.place}</h3>
            <p>{house ? t(locale,house.description) : locale === 'en'
              ? residence.place + ' State Lodge is in ' + residence.county + ' County. It is a regional presidential residence used during official visits and engagements.'
              : 'Makazi ya Rais ya ' + residence.place + ' yako katika Kaunti ya ' + residence.county + '. Hutumiwa wakati wa ziara na shughuli rasmi za Rais.'}</p>
          </> : <p>{t(locale,['Select a highlighted county or a name below to read about its residence.','Chagua kaunti iliyoangaziwa au jina hapa chini ili kusoma kuhusu makazi yake.'])}</p>}
        </div>
        <div>
          <h3>{t(locale,['State Houses','Ikulu kuu'])}</h3>
          {locale === 'en'
            ? <p>Kenya’s three State Houses are in {names(stateHouses)}. Nairobi is the President’s principal official residence and workplace.</p>
            : <p>Ikulu tatu za Kenya ziko {names(stateHouses)}. Ikulu ya Nairobi ndiyo makazi makuu rasmi na mahali pa kazi pa Rais.</p>}
        </div>
        <div>
          <h3>{t(locale,['Regional State Lodges','Makazi ya Rais katika mikoa'])}</h3>
          {locale === 'en'
            ? <p>Regional lodges support official visits across Kenya. Locations include {names(stateLodges)}.</p>
            : <p>Makazi ya kikanda hutumiwa wakati wa ziara rasmi kote nchini. Maeneo hayo ni pamoja na {names(stateLodges)}.</p>}
        </div>
      </div>
    </div>
  </section>;
}

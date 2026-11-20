import Image from 'next/image';
import {t, type Locale} from '../lib/content';

import {anthemVersions} from '../lib/anthem';

export function NationalSymbols({locale}: {locale: Locale}) {
  return <div className="national-symbols">
    <section aria-labelledby="symbols-title">
      <h2 id="symbols-title">{t(locale, ['Flag, coat of arms and public seal', 'Bendera, nembo na muhuri wa umma'])}</h2>
      <div className="national-symbols-grid">
        <figure>
          <Image src="/media/kenya-national-flag.webp" alt="" width={900} height={600} sizes="(max-width: 600px) 85vw, 330px" quality={70}/>
          <figcaption>{t(locale, ['National flag of Kenya', 'Bendera ya Taifa ya Kenya'])}</figcaption>
        </figure>
        <figure>
          <Image src="/media/kenya-coat-of-arms.webp" alt="" width={736} height={693} sizes="205px" quality={70}/>
          <figcaption>{t(locale, ['Coat of arms of Kenya', 'Nembo ya Taifa ya Kenya'])}</figcaption>
        </figure>
        <figure>
          <Image src="/media/kenya-public-seal.png" alt="" width={320} height={319} sizes="205px" quality={70}/>
          <figcaption>{t(locale, ['Public seal of Kenya', 'Muhuri wa Umma wa Kenya'])}</figcaption>
        </figure>
      </div>
    </section>
    <section className="national-anthem" id="national-anthem" aria-labelledby="anthem-title">
      <div className="anthem-header">
        <h2 id="anthem-title">{t(locale, ['National anthem', 'Wimbo wa taifa'])}</h2>
        <div className="anthem-player-box">
          <audio controls preload="metadata" className="anthem-audio-player">
            <source src="/media/national-anthem.mp3" type="audio/mpeg" />
            {t(locale, ['Your browser does not support the audio element.', 'Kivinjari chako hakiauni kicheza sauti hiki.'])}
          </audio>
        </div>
      </div>
      <ul className="anthem-versions">
        {anthemVersions.map(({language, code, stanzas}) => <li key={code} lang={code}>
          <h3>{language}</h3>
          <ol className="anthem-stanzas">{stanzas.map(stanza => <li className="anthem-stanza" key={stanza[0]}>
            {stanza.map(line => <span key={line}>{line}</span>)}
          </li>)}</ol>
        </li>)}
      </ul>
      <p className="anthem-source">{t(locale,['Constitution of Kenya, Second Schedule','Katiba ya Kenya, Jedwali la Pili'])}</p>
    </section>
  </div>;
}


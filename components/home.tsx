import Link from 'next/link';
import {HeroVideo} from './hero-video';
import {ArrowRight,ArrowUpRight} from 'lucide-react';
import {articles,categories,categoryCards,config,delivery,formatDate,gallery,href,photos,presidentialQuote,profiles,t,type Locale,type Copy} from '../lib/content';
import {MessageForm,SpotlightNewsCarousel} from './client';
import {Picture} from './photo';
import {ResidenceMap} from './residence-map';
import {PresidentialSignature} from './signature';

export function TextLink({locale,to,label}:{locale:Locale;to:string;label:Copy}){
 return <Link className="text-link" href={href(locale,to)}>{t(locale,label)}<ArrowRight size={17} aria-hidden="true"/></Link>
}
export function Hero({locale}:{locale:Locale}){
 return <section className="hero" aria-labelledby="hero-title">
  <Picture photo={photos.grounds} locale={locale} eager className="hero-backdrop"/>
  <div className="hero-video-stage"><HeroVideo/></div>
  <div className="shell hero-inner">
   <div className="hero-copy">
    <h1 id="hero-title">{t(locale,['State House','Ikulu ya'])}<span className="hero-country">Kenya</span></h1>
   </div>
  </div>
 </section>
}
function PresidencyIntro({locale}:{locale:Locale}){
 return <section className="presidency-feature" id="presidency-intro" aria-labelledby="presidency-intro-title">
  <div className="presidency-intro section shell">
  <div className="presidency-words">
   <p className="eyebrow">{t(locale,['The President','Rais'])}</p>
  <h2 id="presidency-intro-title">William Samoei Ruto</h2>
  <figure className="presidential-quote">
   <blockquote>
    <p>“{t(locale,presidentialQuote.words)}”</p>
   </blockquote>
  </figure>
  </div>
  <figure className="presidency-portrait-figure">
   <Picture photo={photos.president} locale={locale} sizes="(max-width: 680px) 82vw, 380px" className="presidency-portrait"/>
   <figcaption className="presidential-caption">
    <span>{t(locale,['5th President of Kenya','Rais wa Tano wa Kenya'])}</span>
    <img src="/media/ruto-flag.jpg" alt={t(locale,['Presidential standard','Bendera ya urais'])} className="presidential-flag" width={52} height={34}/>
   </figcaption>
  </figure>
  <div className="presidency-insignia">
   <img src="/media/kenya-shield.webp" alt="" width={30} height={48} className="presidency-shield"/>
   <PresidentialSignature/>
  </div>
  </div>
 </section>
}
export function NewsStrip({locale}:{locale:Locale}){
 return <section id="news" className="news-strip"><div className="shell">
  <div className="section-heading spotlight-heading">
   <div className="spotlight-title-row">
    <div className="spotlight-deco-line" aria-hidden="true"/>
    <h2 className="spotlight-heading-text">{t(locale,['In the spotlight','Mwangaza wa Habari'])}</h2>
   </div>
   <TextLink locale={locale} to="newsroom" label={['All news','Habari zote']}/>
  </div>
  <SpotlightNewsCarousel locale={locale}/>
 </div></section>
}
export function CardRow({locale}:{locale:Locale}){
 return <section className="section shell presidency-stories">
  <div className="section-heading">
   <div>
    <h2>{t(locale,['Presidency & Heritage','Urais na Urithi'])}</h2>
   </div>
  </div>
  <div className="heritage-duo-grid">
   <Link className="heritage-card" href={href(locale,'presidency/former-presidents')}>
    <div className="heritage-card-content">
     <h3>{t(locale,['Former Presidents','Marais wa Zamani'])}</h3>
     <p>{t(locale,['Discover the leadership and history of those who shaped the Republic of Kenya.','Gundua uongozi na historia ya wale waliojenga Jamhuri ya Kenya.'])}</p>
    </div>
    <ArrowUpRight className="heritage-card-arrow" size={22} aria-hidden="true"/>
   </Link>

   <Link className="heritage-card" href={href(locale,'presidency/national-symbols')}>
    <div className="heritage-card-content">
     <h3>{t(locale,['The Symbols of National Unity','Alama za Umoja wa Kitaifa'])}</h3>
     <p>{t(locale,['Explore Kenya’s national flag, coat of arms, public seal and anthem.','Gundua bendera, nembo, muhuri wa umma na wimbo wa taifa wa Kenya.'])}</p>
    </div>
    <ArrowUpRight className="heritage-card-arrow" size={22} aria-hidden="true"/>
   </Link>
  </div>
 </section>
}
export function DeliveryOverview({locale}:{locale:Locale}){
 return <section className="delivery" id="delivery" aria-labelledby="delivery-title">
  <div className="section shell">
   <header className="delivery-heading">
    <h2 id="delivery-title">{t(locale,['Promises & Delivery','Ahadi na Utekelezaji'])}</h2>
   </header>
   <ul className="delivery-list">{delivery.map(entry=><li key={entry.title[0]}>
    <div><h3>{t(locale,entry.title)}</h3><p>{t(locale,entry.text)}</p></div>
    <Picture photo={entry.photo} locale={locale} sizes="(max-width: 540px) 128px, 178px"/>
   </li>)}</ul>
  </div>
 </section>
}
export function HistoryBand({locale}:{locale:Locale}){
 return <section className="history"><div className="shell history-grid">
  <Picture photo={photos.house} locale={locale} sizes="(max-width: 680px) 100vw, 50vw"/>
  <div><p className="eyebrow">{t(locale,['Heritage','Urithi'])}</p><h2>{t(locale,['The history of State House','Historia ya Ikulu'])}</h2><p>{t(locale,['Explore the buildings and photographs that trace the history of State House.','Gundua majengo na picha zinazosimulia historia ya Ikulu.'])}</p><TextLink locale={locale} to="presidency/history" label={['Explore the archives','Chunguza kumbukumbu']}/></div>
 </div></section>
}
export function Home({locale}:{locale:Locale}){
 return <><div className="hero-overlay-sequence"><Hero locale={locale}/><PresidencyIntro locale={locale}/></div><NewsStrip locale={locale}/><CardRow locale={locale}/><ResidenceMap locale={locale}/><DeliveryOverview locale={locale}/><HistoryBand locale={locale}/>
 <section id="write" className="write"><div className="shell write-grid section"><div><p className="eyebrow">{t(locale,['Correspondence','Mawasiliano'])}</p><h2>{t(locale,['Write to the President','Mwandikie Rais'])}</h2><p>{t(locale,['Preview a message using this demonstration form.','Hakiki ujumbe kwa kutumia fomu hii ya majaribio.'])}</p></div><MessageForm locale={locale}/></div></section></>
}
const footerGroups:{title:Copy; links:{to:string;label:Copy}[]}[]=[
 {title:['Newsroom','Habari'],links:[{to:'newsroom',label:['All news','Habari zote']},...categoryCards.map(({id})=>({to:'newsroom?category='+id,label:categories[id]}))]},
 {title:['Presidency','Urais'],links:profiles.map(p=>({to:'presidency/'+p.id,label:p.title}))},
 {title:['State residences','Makazi ya Rais'],links:[{to:'#state-residences',label:['State Houses and Lodges','Ikulu na Makazi ya Rais']}]},
 {title:['Delivery','Utekelezaji'],links:[{to:'#delivery',label:['Promises & Delivery','Ahadi na Utekelezaji']},{to:'gallery',label:['Photo gallery','Matunzio ya picha']}]},
 {title:['Contact','Mawasiliano'],links:[{to:'#write',label:['Write to the President','Mwandikie Rais']}]},
];
export const legal = [
 {id:'accessibility',title:['Accessibility','Ufikesheji'],body:['This concept provides keyboard navigation, image descriptions and visible focus indicators.','Dhana hii ina urambazaji wa kibodi, maelezo ya picha na viashirio vya fokasi.']},
 {id:'privacy',title:['Privacy','Faragha'],body:['The demonstration form keeps your draft in the browser for the current visit.','Fomu ya majaribio huhifadhi rasimu katika kivinjari wakati wa ziara hii.']},
 {id:'terms',title:['Terms','Masharti'],body:['This is an independent concept. Sample entries illustrate the design.','Hii ni dhana huru. Maudhui ya mfano yanaonyesha muundo.']},
] satisfies {id:string;title:Copy;body:Copy}[];
export function Footer({locale}:{locale:Locale}){
 return <footer className="footer"><div className="shell">
  <Link href={href(locale)} className="footer-brand"><img src={config.logo} alt="State House Kenya" width="640" height="218"/></Link>
  <div className="footer-grid">{footerGroups.map(group=><section key={group.title[0]}><h2>{t(locale,group.title)}</h2>{group.links.map(link=><Link key={link.to} href={href(locale,link.to)}>{t(locale,link.label)}</Link>)}</section>)}</div>
  <div className="footer-bottom"><div><div className="legal-links">{legal.map(item=><Link key={item.id} href={href(locale,item.id)}>{t(locale,item.title)}</Link>)}</div>
  {config.independentConcept&&<p>{t(locale,['Independent design concept. Not an official government website.','Dhana huru ya usanifu. Si tovuti rasmi ya serikali.'])}</p>}</div>
  </div>
 </div><div className="flag-stripe" aria-hidden="true"/></footer>
}

'use client';
import {useState,useRef,useEffect} from 'react';

import {useTranslations} from 'next-intl';
import {ArrowRight,ChevronLeft,ChevronRight,X} from 'lucide-react';
import Link from 'next/link';
import {articles,categories,formatDate,gallery,href,nav,priorities,profiles,t,type Locale,type Category} from '../lib/content';
import {Picture} from './photo';

export function SkipLink(){
 const translate=useTranslations('Navigation');
 return <a href="#main-content" className="skip-link">{translate('skip')}</a>;
}

export function SpotlightNewsCarousel({locale}:{locale:Locale}){
 const scrollRef = useRef<HTMLDivElement>(null);

 const scroll = (direction:'left'|'right') => {
  if(!scrollRef.current) return;
  const offset = direction === 'left' ? -380 : 380;
  scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
 };

 return (
  <div className="spotlight-carousel-wrapper">
   <div className="spotlight-carousel-track" ref={scrollRef}>
    {articles.map((article)=>(
     <Link key={article.id} href={href(locale,'newsroom/'+article.id)} className="spotlight-card">
      <div className="spotlight-card-thumb">
       <img src={'/media/'+article.photo.file} alt={t(locale,article.photo.alt)} />
      </div>
      <div className="spotlight-card-info">
       <h3 className="spotlight-card-title">{t(locale,article.title)}</h3>
       <time dateTime={article.date} className="spotlight-card-date">
        {formatDate(article.date,locale)}
       </time>
      </div>
     </Link>
    ))}
   </div>

   <button
    type="button"
    className="spotlight-nav-btn next"
    onClick={() => scroll('right')}
    aria-label={t(locale,['Next spotlight items','Habari zifuatazo'])}
   >
    <ChevronRight size={18} aria-hidden="true" />
   </button>
  </div>
 );
}

export function PriorityTabs({locale}:{locale:Locale}){
 const [active,setActive]=useState(0);
 const item=priorities[active];
 return <section id="priorities" className="section shell priorities">
  <h2 className="priorities-title">{t(locale,['National priorities','Vipaumbele vya kitaifa'])}</h2>
  <div className="tabs" role="tablist" aria-label={t(locale,['Policy areas','Maeneo ya sera'])} onKeyDown={event=>{
   const positions:Record<string,number>={ArrowRight:(active+1)%priorities.length,ArrowLeft:(active+priorities.length-1)%priorities.length,Home:0,End:priorities.length-1};
   if(!(event.key in positions))return;
   event.preventDefault();
   const index=positions[event.key];setActive(index);
   event.currentTarget.querySelectorAll('button')[index]?.focus();
  }}>{priorities.map(({title},index)=><button key={title[0]} type="button" role="tab" id={'priority-'+index} aria-selected={index===active} aria-controls="priority-panel" tabIndex={index===active?0:-1} onClick={()=>setActive(index)}>{t(locale,title)}</button>)}</div>
  <div className="priority-panel" role="tabpanel" id="priority-panel" aria-labelledby={'priority-'+active} tabIndex={0}>
   <Picture key={item.photo.file} photo={item.photo} locale={locale} sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 850px) calc(100vw - 60px), (max-width: 1440px) 64vw, 890px"/>
   <div className="priority-caption"><h3>{t(locale,item.title)}</h3><p>{t(locale,item.text)}</p></div>
  </div>
 </section>
}

export function NewsList({locale}:{locale:Locale}){
 const [filter,setFilter]=useState<Category|'all'>('all');
 useEffect(()=>{const initial=new URLSearchParams(window.location.search).get('category');if(initial&&Object.hasOwn(categories,initial))setFilter(initial as Category)},[]);
 return <><label className="field filter">{t(locale,['Filter by category','Chuja kwa aina'])}
   <select value={filter} onChange={e=>setFilter(e.target.value as Category|'all')}><option value="all">{t(locale,['All news','Habari zote'])}</option>{(Object.keys(categories) as Category[]).map(key=><option key={key} value={key}>{t(locale,categories[key])}</option>)}</select></label>
  <div className="result-list">{articles.filter(a=>filter==='all'||a.category===filter).map(article=><Link key={article.id} href={href(locale,'newsroom/'+article.id)}><div><p className="eyebrow">{formatDate(article.date,locale)} · {t(locale,categories[article.category])}</p><h2>{t(locale,article.title)}</h2></div><ArrowRight aria-hidden="true"/></Link>)}</div></>
}

export function GalleryGrid({locale}:{locale:Locale}){
 const [active,setActive]=useState(0);
 const dialog=useRef<HTMLDialogElement>(null);
 const move=(delta:number)=>setActive(index=>(index+delta+gallery.length)%gallery.length);
 return <><div className="masonry">{gallery.map((item,index)=><button key={item.title[0]} onClick={()=>{setActive(index);dialog.current?.showModal()}} type="button"><Picture photo={item.photo} locale={locale} sizes="(max-width: 600px) 100vw, 50vw"/><span>{t(locale,item.title)}</span></button>)}</div>
 <dialog ref={dialog} className="lightbox" aria-label={t(locale,['Photo viewer','Kitazamaji picha'])} onKeyDown={event=>{if(event.key==='ArrowLeft')move(-1);if(event.key==='ArrowRight')move(1)}}>
   <button className="icon-btn close" onClick={()=>dialog.current?.close()} aria-label={t(locale,['Close photo','Funga picha'])}><X/></button>
   <Picture photo={gallery[active].photo} locale={locale}/><div className="lightbox-controls"><button className="icon-btn" onClick={()=>move(-1)} aria-label={t(locale,['Previous photo','Picha iliyotangulia'])}><ChevronLeft/></button><p aria-live="polite">{t(locale,gallery[active].title)} · {active+1}/{gallery.length}</p><button className="icon-btn" onClick={()=>move(1)} aria-label={t(locale,['Next photo','Picha inayofuata'])}><ChevronRight/></button></div>
 </dialog></>
}

export function SiteSearch({locale}:{locale:Locale}){
 const [query,setQuery]=useState('');
 const [submitted,setSubmitted]=useState('');
 const entries=[...articles.map(a=>({path:'newsroom/'+a.id,title:a.title,body:a.body})),...profiles.map(p=>({path:'presidency/'+p.id,title:p.title,body:p.description})),...nav.map(([path,title])=>({path,title,body:title})),{path:'#write',title:['Write to the President','Mwandikie Rais'] as const,body:['Contact','Mawasiliano'] as const}];
 const results=submitted?entries.filter(entry=>submitted.toLocaleLowerCase(locale).split(/\s+/).every(word=>(t(locale,entry.title)+' '+t(locale,entry.body)).toLocaleLowerCase(locale).includes(word))):[];
 return <><form className="search-form" onSubmit={e=>{e.preventDefault();setSubmitted(query.trim())}}><label className="field">{t(locale,['Search terms','Maneno ya kutafuta'])}<input type="search" value={query} onChange={e=>setQuery(e.target.value)} required/></label><button className="solid-button">{t(locale,['Search','Tafuta'])}</button></form>
 <p role="status">{submitted?(results.length?t(locale,['Results','Matokeo'])+' ('+results.length+')':t(locale,['No results found.','Hakuna matokeo.'])):''}</p>
 <div className="result-list">{results.map(entry=><Link key={entry.path} href={href(locale,entry.path)}><h2>{t(locale,entry.title)}</h2><ArrowRight aria-hidden="true"/></Link>)}</div></>
}

export function MessageForm({locale}:{locale:Locale}){
 const [preview,setPreview]=useState<{name:string;email:string;message:string}|null>(null);
 return <form className="message-form" onSubmit={e=>{e.preventDefault();const fields=e.currentTarget.elements;const value=(id:string)=>(fields.namedItem(id) as HTMLInputElement|HTMLTextAreaElement).value;setPreview({name:value('draft-name'),email:value('draft-email'),message:value('draft-message')})}} onChange={()=>setPreview(null)}>
 <label className="field">{t(locale,['Name','Jina'])}<input id="draft-name" autoComplete="name" required maxLength={120}/></label>
 <label className="field">{t(locale,['Email','Barua pepe'])}<input id="draft-email" type="email" autoComplete="email" required/></label>
 <label className="field message-text">{t(locale,['Message','Ujumbe'])}<textarea id="draft-message" required maxLength={2000} rows={3}/></label>
 <button className="solid-button">{t(locale,['Preview message','Hakiki ujumbe'])}</button>
 <p className="form-status" role="status">{preview?t(locale,['Your draft is ready. This demo keeps it on this page.','Rasimu yako iko tayari. Onyesho hili huihifadhi kwenye ukurasa huu.']):''}</p>
 {preview&&<div className="message-preview"><strong>{preview.name}</strong><p>{preview.email}</p><p>{preview.message}</p></div>}
 </form>
}








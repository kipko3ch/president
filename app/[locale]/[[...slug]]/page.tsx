import type {Metadata} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import {ArrowRight} from 'lucide-react';
import {GalleryGrid,NewsList,SiteSearch} from '../../../components/client';
import {Home,legal,TextLink} from '../../../components/home';
import {administrationSections} from '../../../lib/administration';
import {NationalSymbols} from '../../../components/national-symbols';
import {StateHouseHistory} from '../../../components/state-house-history';
import {PresidentialGallery} from '../../../components/presidential-gallery';
import {PresidentialSignature} from '../../../components/signature';
import {Picture} from '../../../components/photo';
import {articles,categories,config,formatDate,href,locales,photos,presidentialBiography,presidentialStandard,profiles,t,type Copy} from '../../../lib/content';
type Params={locale:string;slug?:string[]};
const pages = {
 newsroom:{title:['Newsroom','Habari'],intro:['Browse sample speeches, Cabinet dispatches and media briefings.','Vinjari mifano ya hotuba, taarifa za Baraza na taarifa kwa wanahabari.']},
 presidency:{title:['The Presidency','Urais'],intro:['Explore the offices and people of the Presidency, and the history of State House.','Gundua ofisi na watu wa Urais pamoja na historia ya Ikulu.']},
 gallery:{title:['Photo gallery','Matunzio ya picha'],intro:['Explore State House through a selection of photographs.','Gundua Ikulu kupitia mkusanyo wa picha.']},
 search:{title:['Search','Tafuta'],intro:['Find news, profiles and sections of this website.','Tafuta habari, wasifu na sehemu za tovuti hii.']},
} satisfies Record<string,{title:Copy;intro:Copy}>;
export function generateStaticParams(){return [
 {slug:[]},...Object.keys(pages).map(page=>({slug:[page]})),
 ...articles.map(item=>({slug:['newsroom',item.id]})),
 ...profiles.map(item=>({slug:['presidency',item.id]})),
 ...legal.map(item=>({slug:[item.id]})),
]}
function lookup(slug:string[]){
 const [page,detail]=slug;
 const article=page==='newsroom'?articles.find(a=>a.id===detail):undefined;
 const profile=page==='presidency'?profiles.find(p=>p.id===detail):undefined;
 const policy=legal.find(item=>item.id===page);
 if(slug.length>2||(detail&&!article&&!profile))notFound();
 const landing=Object.hasOwn(pages,page)?pages[page as keyof typeof pages]:undefined;
 if(page&&!landing&&!policy)notFound();
 return {page,article,profile,policy,landing};
}
export async function generateMetadata({params}:{params:Promise<Params>}):Promise<Metadata>{
 const {locale,slug=[]}=await params;
 if(locale!=='en'&&locale!=='sw')notFound();
 const {article,profile,policy,landing}=lookup(slug);
 const title=profile?.name??t(locale,article?.title??profile?.title??policy?.title??landing?.title??['State House Kenya','Ikulu ya Kenya']);
 const description=t(locale,article?.body??profile?.description??policy?.body??landing?.intro??['An independent design concept for the Office of the President of Kenya.','Dhana huru ya usanifu kwa Ofisi ya Rais wa Kenya.']);
 const path=slug.join('/');
 const url=href(locale,path);
 return {title:slug.length?title:{absolute:title},description,alternates:{canonical:url,languages:Object.fromEntries(locales.map(language=>[language,href(language,path)]))},openGraph:{title,description,url,locale:locale==='en'?'en_KE':'sw_KE',images:['/media/grounds.jpg'],type:article?'article':'website'}};
}
export default async function Page({params}:{params:Promise<Params>}){
 const {locale,slug=[]}=await params;
 if(locale!=='en'&&locale!=='sw')notFound();
 const {page,article,profile,policy,landing}=lookup(slug);
 if(!page){
  const organization={'@context':'https://schema.org','@type':'GovernmentOrganization',name:'Office of the President of Kenya'};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:'State House Kenya',url:config.url,inLanguage:locale,about:organization})}}/><Home locale={locale}/></>;
 }
 const title=profile?.name??t(locale,article?.title??profile?.title??policy?.title??landing!.title);
 return <div className="inner-page shell">
  <nav className="breadcrumb" aria-label={t(locale,['Breadcrumb','Njia ya ukurasa'])}><Link href={href(locale)}>{t(locale,['Home','Mwanzo'])}</Link><span aria-hidden="true">/</span>{(article||profile)&&landing?<><Link href={href(locale,page)}>{t(locale,landing.title)}</Link><span aria-hidden="true">/</span></>:null}<span aria-current="page">{title}</span></nav>
  <header className="inner-heading">{article&&<p className="eyebrow">{t(locale,['Sample article','Makala ya mfano'])} · <time dateTime={article.date}>{formatDate(article.date,locale)}</time></p>}{profile?.name&&<p className="eyebrow">{t(locale,profile.title)}</p>}<h1>{title}</h1>{landing&&!article&&!profile&&<p>{t(locale,landing.intro)}</p>}</header>
  {article?<article className="article"><p>{t(locale,article.body)}</p><h2>{t(locale,['Related','Yanayohusiana'])}</h2><div className="result-list">{articles.filter(item=>item.id!==article.id).slice(0,3).map(item=><Link key={item.id} href={href(locale,'newsroom/'+item.id)}><div><time dateTime={item.date}>{formatDate(item.date,locale)}</time><h3>{t(locale,item.title)}</h3></div><ArrowRight aria-hidden="true"/></Link>)}</div></article>
   :profile?<article className={profile.name?"article profile-body":"article"}>{profile.photo&&<figure className="profile-photo"><Picture photo={profile.photo} locale={locale} sizes={profile.name?"(max-width: 460px) 90vw, 380px":"(max-width: 800px) 92vw, 760px"} className={profile.name?'profile-portrait':''}/>{profile.id==='cabinet'&&<figcaption>{t(locale,['A Cabinet meeting at State House, Nairobi','Kikao cha Baraza la Mawaziri katika Ikulu, Nairobi'])}</figcaption>}</figure>}<p>{t(locale,profile.description)}</p>{profile.id==='president'&&<><PresidentialSignature/><figure className="presidential-standard">
   <Image src={presidentialStandard.file} width={presidentialStandard.width} height={presidentialStandard.height}
    sizes="164px" alt="" quality={70}/>
   <figcaption>{t(locale,presidentialStandard.caption)}</figcaption>
  </figure><div className="biography-sections">{presidentialBiography.map(section=><section key={section.title[0]}><h2>{t(locale,section.title)}</h2><p>{t(locale,section.text)}</p></section>)}</div></>}{profile.id==='former-presidents'&&<PresidentialGallery locale={locale}/>}
   {profile.id==='national-symbols'&&<NationalSymbols locale={locale}/>}
   {profile.id==='history'&&<><StateHouseHistory locale={locale}/><div className="history-related">
    <div id="presidents"><TextLink locale={locale} to="presidency/former-presidents" label={['Former Presidents','Marais wa Zamani']}/></div>
    <div id="national-symbols"><TextLink locale={locale} to="presidency/national-symbols" label={['Symbols of National Unity','Alama za Umoja wa Kitaifa']}/></div>
    <TextLink locale={locale} to="#state-residences" label={['State Houses and Lodges','Ikulu na Makazi ya Rais']}/>
    <TextLink locale={locale} to="gallery" label={['View gallery','Tazama matunzio']}/>
   </div></>}{administrationSections[profile.id]&&<div className="biography-sections">
    {administrationSections[profile.id].map(section=><section key={section.title[0]}>
      <h2>{t(locale,section.title)}</h2><p>{t(locale,section.text)}</p>
    </section>)}
   </div>}{profile.id==='cabinet'&&<TextLink locale={locale} to="newsroom?category=cabinet" label={categories.cabinet}/>}</article>
   :policy?<article className="article"><p>{t(locale,policy.body)}</p></article>
   :page==='newsroom'?<NewsList locale={locale}/>
   :page==='gallery'?<GalleryGrid locale={locale}/>
   :page==='search'?<SiteSearch locale={locale}/>
   :<div className="result-list">{profiles.map(item=><Link key={item.id} href={href(locale,'presidency/'+item.id)}><h2>{t(locale,item.title)}</h2><ArrowRight aria-hidden="true"/></Link>)}</div>}
 </div>
}







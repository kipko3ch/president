import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {DM_Sans,Inter,Instrument_Serif} from 'next/font/google';
import {notFound} from 'next/navigation';
import {SkipLink} from '../../components/client';
import {ScrollMotion} from '../../components/scroll-motion';
import {Masthead} from '../../components/masthead';
import {Footer} from '../../components/home';
import {config,locales,t} from '../../lib/content';
import '../globals.css';
const inter=Inter({subsets:['latin'],variable:'--inter'});
const supporting=DM_Sans({subsets:['latin'],variable:'--supporting',weight:['500','600']});
const display=Instrument_Serif({subsets:['latin'],variable:'--display',weight:'400',style:'normal'});
export const metadata:Metadata={title:{default:'State House Kenya',template:'%s | State House Kenya'},metadataBase:new URL(config.url)};
export function generateStaticParams(){return locales.map(locale=>({locale}))}
export default async function Layout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){
 const {locale:language}=await params;
 if(language!=='en'&&language!=='sw')notFound();
 const locale=language;
 return <html lang={locale}><body className={inter.variable+' '+display.variable+' '+supporting.variable}><NextIntlClientProvider locale={locale} messages={{Navigation:{skip:t(locale,['Skip to content','Nenda kwenye maudhui'])}}} timeZone="Africa/Nairobi" now={new Date(0)}>
 <SkipLink/>
 <Masthead locale={locale}/><main id="main-content" tabIndex={-1}>{children}</main><ScrollMotion/><Footer locale={locale}/>
 </NextIntlClientProvider></body></html>
}







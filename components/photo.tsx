import Image from 'next/image';
import {t,type Locale,type Photo} from '../lib/content';
import {blur} from '../lib/blur';
export function Picture({photo,locale,sizes='100vw',eager=false,className=''}:{photo:Photo;locale:Locale;sizes?:string;eager?:boolean;className?:string}){
 return <div className={'picture '+className}><Image src={'/media/'+photo.file} alt={t(locale,photo.alt)} fill sizes={sizes} quality={eager?55:70} decoding={eager?'sync':'async'} loading={eager?'eager':undefined} fetchPriority={eager?'high':undefined} placeholder={blur[photo.file]?'blur':'empty'} blurDataURL={blur[photo.file]} style={{objectPosition:photo.position}}/></div>
}



import type {MetadataRoute} from 'next';
import {articles,config,href,locales,profiles} from '../lib/content';
export default function sitemap():MetadataRoute.Sitemap{
 const paths=['','newsroom','presidency','gallery','search','accessibility','privacy','terms',...articles.map(a=>'newsroom/'+a.id),...profiles.map(p=>'presidency/'+p.id)];
 return locales.flatMap(locale=>paths.map(path=>({url:new URL(href(locale,path),config.url).href})));
}

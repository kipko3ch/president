import type {MetadataRoute} from 'next';
import {config} from '../lib/content';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/'},sitemap:new URL('/sitemap.xml',config.url).href}}

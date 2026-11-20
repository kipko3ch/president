import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const config: NextConfig = {poweredByHeader:false,devIndicators:false,agentRules:false,images:{qualities:[55,70,75],deviceSizes:[360,420,640,750,828,960,1080,1280,1440,1920,2048]},async redirects(){return [{source:'/',destination:'/en',permanent:false}]}};
export default createNextIntlPlugin()(config);



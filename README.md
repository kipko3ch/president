# State House Kenya

An independent, bilingual design concept built with Next.js App Router, TypeScript and Tailwind CSS. The pages are prerendered and run without a database.

## Run locally

Install Node.js 20.9 or later. Run `npm install` and `npm run dev`, then open http://localhost:3000. On PowerShell, use `npm.cmd` if script execution is restricted. Use `npm run build` and `npm start` to check the production version. Set `SITE_URL` to the deployment origin before building for canonical URLs, Open Graph metadata and the sitemap.

## Edit the site

- Edit the typed sample headlines, articles, profiles, priority tabs, delivery entries and gallery in `lib/content.ts`. The reusable page sections are in `components/home.tsx` and `components/client.tsx`.
- Adjust the colors and fonts in `app/theme.css`. Replace `public/state-house-logo.png` or change `config.logo` in `lib/content.ts`.
- Replace images in `public/media` and update their filenames, alt text and crop positions in `lib/content.ts`. Update or delete the corresponding entry in `lib/blur.ts` when changing an image. The hero backdrop uses the `grounds` entry. Replace `app/icon.png` to update the browser icon as well.
- The correspondence form previews a draft in the current page. It has no delivery or persistence. The footer concept notice is controlled by `config.independentConcept`.
- To add a language, add its code to `locales` and add a corresponding translation to the `Copy` type and each copy tuple. Update `t`, the locale checks, the header language selector, date formatting and Open Graph locale mapping. The locale layout passes the selected language to Next Intl and sets the document language. Localized URLs and the sitemap derive from `locales`.

## Sample photography

The local images are design placeholders. Sources include the [Office of the President](https://www.president.go.ke/), [The Africa Debate portrait](https://theafricadebate.com/biographies/2025/he-dr-william-samoei-ruto), [The Star Cabinet photographs](https://www.the-star.co.ke/news/realtime/2024-11-14-photos-ruto-chairs-cabinet-meeting-at-state-house-nairobi), a [historic postcard](https://www.pinterest.com/pin/government-house-nairobi-kenya--23151385570214890/), [Pulse Kenya](https://www.pulse.co.ke/story/4-iconic-buildings-in-kenya-crafted-by-architect-who-designed-state-house-2025012708163838621), [CCCC’s railway feature](https://en.ccccltd.cn/xwzx/ztbd/202304/t20230421_206450.html) and Unsplash. Review usage rights and replace sample imagery with approved assets before public deployment.




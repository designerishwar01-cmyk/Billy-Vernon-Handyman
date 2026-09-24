import type {Metadata} from 'next';
import {site} from './site-config';
import './globals.css';
export const metadata:Metadata={title:`Garden Care ${site.area} | ${site.name}`,description:`Professional garden maintenance, landscaping and arboriculture services across ${site.areaSentence}. Contact ${site.name} to request a quote.`,robots:{index:false,follow:false},openGraph:{title:site.name,description:`Professional garden care and arboriculture across ${site.areaSentence}.`},icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-GB"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'LocalBusiness',name:site.name,telephone:site.phoneHref.replace('tel:',''),address:site.address,areaServed:[site.areaSentence,site.coverage]})}}/></body></html>}

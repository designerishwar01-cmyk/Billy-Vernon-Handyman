"use client";
import {useEffect,useRef,useState} from 'react';
import {Leaf} from 'lucide-react';
// Decorative linework extends the site's existing Leaf icon; no image assets.
export function BotanicalAccent({opposite=false}:{opposite?:boolean}) {
 const ref=useRef<HTMLSpanElement>(null); const [seen,setSeen]=useState(false);
 useEffect(()=>{const element=ref.current;if(!element)return;const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){setSeen(true);observer.disconnect()}},{threshold:.2});observer.observe(element);return()=>observer.disconnect()},[]);
 const leaves=[{x:8,y:87,r:-53,d:380},{x:18,y:58,r:28,d:540},{x:7,y:31,r:-42,d:700},{x:43,y:123,r:62,d:550},{x:77,y:129,r:24,d:720}];
 return <span ref={ref} className={`botanical-accent${opposite?' botanical-opposite':''}${seen?' botanical-visible':''}`} aria-hidden="true"><svg className="botanical-stems" viewBox="0 0 120 150" fill="none"><path className="vine-line" pathLength="1" d="M112 138C76 141 38 141 23 117C9 96 23 77 17 54C13 39 15 21 22 9"/><path className="vine-line vine-tendril" pathLength="1" d="M25 120C9 114 9 101 12 91M18 65C27 59 29 50 28 43M52 135C59 130 60 124 59 119"/></svg>{leaves.map((leaf,i)=><span className="botanical-leaf-position" key={i} style={{left:`${leaf.x/1.2}%`,top:`${leaf.y/1.5}%`,transform:`rotate(${leaf.r}deg)`}}><span className="botanical-leaf" style={{animationDelay:`${leaf.d}ms, ${leaf.d+700}ms`}}><Leaf size={21} strokeWidth={.9}/></span></span>)}</span>
}

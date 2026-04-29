import { useState, useEffect, useRef } from "react";

// ═══ Utilities ═══
function useReveal(t=0.15){const[v,setV]=useState(false);const ref=useRef(null);useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);obs.unobserve(el)}},{threshold:t});obs.observe(el);return()=>obs.disconnect()},[]);return[ref,v]}
function R({children,d=0,style={}}){const[ref,v]=useReveal();return (<div ref={ref} style={{...style,opacity:v?1:0,transform:v?"translateY(0)":"translateY(24px)",transition:`all 0.8s cubic-bezier(0.22,1,0.36,1) ${d}s`}}>{children}</div>);}
function SR({children,from="bottom",d=0}){const[ref,v]=useReveal(0.2);const tx=from==="left"?"-40px":from==="right"?"40px":"0";const ty=from==="bottom"?"32px":"0";return (<div ref={ref} style={{opacity:v?1:0,transform:v?"translate(0,0)":`translate(${tx},${ty})`,transition:`all 0.9s cubic-bezier(0.22,1,0.36,1) ${d}s`}}>{children}</div>);}
const Ck=({c="currentColor",s=10})=><svg width={s} height={s} viewBox="0 0 10 10" fill="none"><path d="M2 5.2L4 7.2L8 3" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const Arr=()=><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;

// ═══ Shared Data ═══
const PRODUCTS=[
  {id:"sales",name:"Sales Booster",color:"#10B981",icon:"📊",tag:"Upsell Engine",short:"Turn inspections into three-tier proposals",detail:"Digital inspection forms with auto-tagging generate Good/Better/Best proposals from your synced pricebook. Techs present on a tablet. Customers pick a tier. The estimate pushes to Housecall Pro in one tap.",features:["Digital inspection forms","Good/Better/Best engine","AI follow-up portal","Programmatic video sales","Customer chat agent","One-click HCP sync"],metric:"37%",ml:"avg. ticket increase",setup:"Live in one afternoon"},
  {id:"referral",name:"Referral Booster",color:"#3B82F6",icon:"🤝",tag:"Ambassador Engine",short:"Turn happy customers into trackable referral sources",detail:"Every completed job triggers automated SMS enrollment. Customers get a unique phone extension, email alias, and shareable contact card. Full attribution from referral to paid invoice with automatic rewards.",features:["Auto post-job enrollment","Unique tracking per ambassador","Shareable contact cards","Full revenue attribution","Configurable rewards","Ambassador portal"],metric:"24%",ml:"referral close rate",setup:"Fully automated after setup"},
  {id:"review",name:"Review Booster",color:"#F59E0B",icon:"⭐",tag:"Reputation Engine",short:"Capture five-star reviews and intercept bad ones",detail:"AI-powered SMS conversations detect customer sentiment after every job. Happy customers get routed to Google Reviews. Unhappy ones trigger an internal ticket before any public review.",features:["AI sentiment detection","Per-location Google routing","Negative feedback shield","Tech bonus system","Manager resolution flow","Re-engagement campaigns"],metric:"3.2×",ml:"review volume",setup:"Starts with your next job"},
  {id:"support",name:"Support Booster",color:"#8B5CF6",icon:"🤖",tag:"Recovery Engine",short:"Recover unsold estimates and lapsed memberships",detail:"AI agents follow up on cold estimates, chase overdue invoices, and re-engage lapsed memberships — via SMS and email with TCPA compliance and human escalation.",features:["Unsold estimate recovery","AR collection agent","Membership re-engagement","Self-learning knowledge base","Manager escalation","Admin conversation takeover"],metric:"18%",ml:"estimate recovery",setup:"Auto-detects from HCP"},
];
const PLANS=[
  {name:"Starter",m:199,a:179,per:"/loc/mo",desc:"One product, up to 3 locations",locs:"Up to 3 locations",items:["Any 1 Booster product","Housecall Pro sync","Core analytics","Email support"]},
  {name:"Growth",m:299,a:269,per:"/loc/mo",pop:true,desc:"Two products, full features",locs:"Up to 5 locations",items:["Any 2 Booster products","Housecall Pro sync","Advanced analytics","AI chatbot & portals","Priority support"]},
  {name:"Pro",m:499,a:449,per:"/loc/mo",desc:"All products, maximum ROI",locs:"Up to 10 locations",items:["All 4 Booster products","Full analytics suite","Custom templates","Dedicated onboarding","Phone & chat support"]},
];
const FAQS=[
  {q:"Which field service software do you support?",a:"Housecall Pro on the MAX plan. Pricebook, customers, jobs, estimates, and invoices sync bidirectionally in real time."},
  {q:"Can I start with just one product?",a:"Yes. Most companies start with Sales Booster or Review Booster and add products as they see ROI."},
  {q:"How fast is setup?",a:"Under 48 hours. Connect Housecall Pro, your pricebook syncs instantly. Pre-built templates for HVAC, plumbing, electrical, and garage door."},
  {q:"What ROI should I expect?",a:"Customers average a 37% ticket increase within 30 days. At $199/location, most pay for the platform with one upsold job."},
  {q:"What if my techs resist it?",a:"Simple form → three options → customer picks. 90%+ adoption in week one."},
  {q:"What about SMS compliance?",a:"TCPA compliance is built in — opt-out, quiet hours, frequency limits, and required disclosures are all automatic."},
];
const TL=[
  {stage:"On-site diagnosis",num:"01",without:{icon:"📋",head:"Clipboard and guesswork",body:"Tech eyeballs the problem, scribbles notes. No photos. Customer never sees what's wrong — no reason to spend more."},with:{icon:"📱",head:"Documented proof on a tablet",body:"Every issue photographed, tagged, shown to the customer. When they see evidence, they approve bigger jobs.",product:"Sales Booster",gain:"Builds trust that drives larger tickets"}},
  {stage:"Presenting the repair",num:"02",without:{icon:"🗣️",head:"One verbal price, take it or leave it",body:"\"About twelve hundred.\" No options, no comparison. Customer has nothing to evaluate — most say no or shop around."},with:{icon:"🖥️",head:"Three clear options — customer picks",body:"Good, Better, Best with real line items. When customers see value at each level, most choose Better or Best — increasing tickets by 37%.",product:"Sales Booster",gain:"Average ticket goes from $380 to $520"}},
  {stage:"Customer says \"let me think\"",num:"03",without:{icon:"🚗",head:"Tech drives away. Deal dies.",body:"Estimate sits in your FSM. Nobody follows up. After 48 hours, the customer has called someone else."},with:{icon:"🤖",head:"AI re-engages automatically",body:"Personalized portal, AI chatbot at 11pm, automated emails. 18% of dead estimates convert into paid jobs.",product:"Support Booster",gain:"18% of lost estimates recovered"}},
  {stage:"After the job is done",num:"04",without:{icon:"😶",head:"Nothing happens. Money walks out.",body:"Invoice sent. Silence. No review request, no referral ask, no membership pitch. Three opportunities lost every job."},with:{icon:"⚡",head:"Three revenue streams activate",body:"Review request via SMS. Ambassador enrollment. Unsold items queued for follow-up. All automatic, all generating revenue.",product:"SalesBooster Platform",gain:"Every job feeds 3 revenue channels"}},
  {stage:"Getting Google reviews",num:"05",without:{icon:"🤷",head:"\"Leave us a review?\" — 1 in 10 jobs",body:"Techs occasionally remember. Two reviews a month. Unhappy customers post 1-star reviews with zero warning."},with:{icon:"⭐",head:"Every customer, every time — filtered",body:"AI texts everyone. Happy → Google. Unhappy → intercepted, ticket created, resolved privately. Rating climbs, driving more leads.",product:"Review Booster",gain:"3.2× more reviews, higher ranking"}},
  {stage:"Word-of-mouth referrals",num:"06",without:{icon:"📢",head:"\"Tell your friends!\" — zero tracking",body:"No tracking. No reward. No attribution. Word-of-mouth might be working. You literally cannot tell."},with:{icon:"🤝",head:"Every referral tracked to the dollar",body:"Unique phone, email, and link per customer. Full attribution to paid invoice. Rewards auto-trigger. 15+ referrals per month.",product:"Referral Booster",gain:"15+ tracked referrals monthly"}},
  {stage:"Money left on the table",num:"07",without:{icon:"💸",head:"Invoices and memberships vanish",body:"One awkward call, then silence. Lapsed memberships disappear. Thousands in estimates gather dust every quarter."},with:{icon:"💰",head:"AI agents work around the clock",body:"Follow-up on every estimate. Reminders on every invoice. Renewal outreach for every membership. $47K+ recovered per quarter.",product:"Support Booster",gain:"Average $47K/quarter recovered"}},
];

// ═══ Shared Nav ═══
function Nav({page,setPage,scrolled}){
  const[drop,setDrop]=useState(null);
  const[hover,setHover]=useState(0);
  return <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:scrolled?"rgba(249,250,251,0.92)":"transparent",backdropFilter:scrolled?"blur(16px) saturate(180%)":"none",borderBottom:scrolled?"1px solid rgba(0,0,0,0.05)":"1px solid transparent",transition:"all 0.3s"}} onMouseLeave={()=>setDrop(null)}>
    <div style={{maxWidth:1240,margin:"0 auto",padding:"0 36px",display:"flex",alignItems:"center",justifyContent:"space-between",height:72}}>
      <a href="#" onClick={e=>{e.preventDefault();setPage("home")}} style={{display:"flex",alignItems:"center",gap:11,textDecoration:"none"}}>
        <div style={{width:34,height:34,borderRadius:9,background:"linear-gradient(135deg,#4F46E5,#6366F1)",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="16" height="16" viewBox="0 0 16 16" fill="#fff"><path d="M8.5 1L2 9.5H7.5L7 15L14 6.5H8.5L8.5 1Z"/></svg></div>
        <span className="dsp" style={{fontSize:19,fontWeight:700,letterSpacing:"-0.03em",color:"#111827"}}>SalesBooster</span>
      </a>
      <div style={{display:"flex",alignItems:"center",gap:2}}>
        <div style={{position:"relative"}} onMouseEnter={()=>setDrop("p")} onMouseLeave={()=>setDrop(null)}>
          <button style={{padding:"8px 16px",fontSize:14,fontWeight:500,color:"#111827",background:"none",border:"none",cursor:"pointer",opacity:drop==="p"||page!=="home"?0.9:0.5,display:"flex",alignItems:"center",gap:4}}>Products <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{opacity:0.4}}><path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></button>
          {drop==="p"&&<div className="mega-e" style={{position:"absolute",left:0,top:"100%",paddingTop:8,width:700}}>
            <div style={{background:"#fff",border:"1px solid rgba(0,0,0,0.06)",borderRadius:20,boxShadow:"0 20px 60px rgba(0,0,0,0.08)",display:"grid",gridTemplateColumns:"220px 1fr",overflow:"hidden"}}>
              <div style={{padding:8,borderRight:"1px solid rgba(0,0,0,0.05)"}}>
                {PRODUCTS.map((p,i)=><button key={p.id} onMouseEnter={()=>setHover(i)} onClick={()=>{setPage(p.id);setDrop(null)}} style={{width:"100%",padding:"14px 16px",borderRadius:12,border:"none",cursor:"pointer",textAlign:"left",display:"flex",alignItems:"center",gap:12,background:hover===i?"rgba(79,70,229,0.04)":"transparent",transition:"background 0.15s"}}>
                  <div style={{width:36,height:36,borderRadius:10,background:hover===i?p.color+"12":"rgba(0,0,0,0.03)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>{p.icon}</div>
                  <div><div className="dsp" style={{fontSize:14,fontWeight:700,color:hover===i?"#111827":"#6B7280"}}>{p.name}</div><div style={{fontSize:12,color:"#9CA3AF"}}>{p.tag}</div></div>
                </button>)}
              </div>
              <div style={{padding:"24px 28px"}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}><span style={{fontSize:22}}>{PRODUCTS[hover].icon}</span><span className="dsp" style={{fontSize:17,fontWeight:700}}>{PRODUCTS[hover].name}</span><span style={{padding:"3px 10px",borderRadius:6,background:PRODUCTS[hover].color+"10",color:PRODUCTS[hover].color,fontSize:11,fontWeight:700}}>{PRODUCTS[hover].metric} {PRODUCTS[hover].ml}</span></div>
                <p style={{fontSize:13,color:"#4B5563",lineHeight:1.7,marginBottom:16}}>{PRODUCTS[hover].detail}</p>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>{PRODUCTS[hover].features.slice(0,4).map((f,j)=><div key={j} style={{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#6B7280"}}><Ck c={PRODUCTS[hover].color} s={8}/>{f}</div>)}</div>
                <div style={{marginTop:14}}><a href="#" onClick={e=>{e.preventDefault();setPage(PRODUCTS[hover].id);setDrop(null)}} style={{fontSize:13,fontWeight:600,color:"#4F46E5",textDecoration:"none"}}>Learn more →</a></div>
              </div>
            </div>
          </div>}
        </div>
        <button onClick={()=>{setPage("pricing");setDrop(null)}} style={{padding:"8px 16px",fontSize:14,fontWeight:500,color:"#111827",background:"none",border:"none",cursor:"pointer",opacity:0.5}}>Pricing</button>
        <div style={{position:"relative"}} onMouseEnter={()=>setDrop("r")} onMouseLeave={()=>setDrop(null)}>
          <button style={{padding:"8px 16px",fontSize:14,fontWeight:500,color:"#111827",background:"none",border:"none",cursor:"pointer",opacity:drop==="r"?0.9:0.5,display:"flex",alignItems:"center",gap:4}}>Resources <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{opacity:0.4}}><path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></button>
          {drop==="r"&&<div className="mega-e" style={{position:"absolute",left:"50%",transform:"translateX(-50%)",top:"100%",paddingTop:8,width:240}}>
            <div style={{background:"#fff",border:"1px solid rgba(0,0,0,0.06)",borderRadius:14,boxShadow:"0 16px 48px rgba(0,0,0,0.08)",padding:6}}>
              {[{l:"ROI Calculator",s:"See your revenue potential",p:"roi"},{l:"Integrations",s:"Housecall Pro & more",p:"integrations"},{l:"Blog",s:"Industry insights"},{l:"Case Studies",s:"Customer results"},{l:"Help Center",s:"Docs & guides"}].map((r,i)=><a key={i} href="#" onClick={e=>{e.preventDefault();if(r.p){setPage(r.p);setDrop(null)}}} style={{display:"block",padding:"10px 14px",borderRadius:10,textDecoration:"none"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(0,0,0,0.03)"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}><div style={{fontSize:13,fontWeight:600,color:"#111827"}}>{r.l}</div><div style={{fontSize:11,color:"#9CA3AF",marginTop:1}}>{r.s}</div></a>)}
            </div>
          </div>}
        </div>
        <button onClick={()=>{setPage("about");setDrop(null)}} style={{padding:"8px 16px",fontSize:14,fontWeight:500,color:"#111827",background:"none",border:"none",cursor:"pointer",opacity:0.5}}>About</button>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <a href="#" style={{fontSize:14,fontWeight:500,opacity:0.5,textDecoration:"none",padding:"8px 12px",color:"#111827"}}>Log in</a>
        <a href="#" style={{fontSize:14,fontWeight:600,color:"#fff",background:"#4F46E5",padding:"10px 22px",borderRadius:10,textDecoration:"none"}}>Start Free Trial</a>
      </div>
    </div>
  </nav>;
}

// ═══ Shared Footer ═══
function Footer({setPage}){
  return <footer style={{background:"#111827",borderTop:"1px solid rgba(255,255,255,0.04)",padding:"56px 0 32px"}}>
    <div style={{maxWidth:1240,margin:"0 auto",padding:"0 36px",display:"flex",justifyContent:"space-between",marginBottom:40}}>
      <div>
        <div style={{display:"flex",alignItems:"center",gap:9,marginBottom:12}}><div style={{width:28,height:28,borderRadius:7,background:"rgba(79,70,229,0.15)",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="13" height="13" viewBox="0 0 16 16" fill="#818CF8"><path d="M8.5 1L2 9.5H7.5L7 15L14 6.5H8.5L8.5 1Z"/></svg></div><span className="dsp" style={{fontSize:16,fontWeight:700,color:"#fff"}}>SalesBooster</span></div>
        <p style={{fontSize:13,color:"rgba(255,255,255,0.2)",lineHeight:1.6,maxWidth:240}}>The revenue platform for home service businesses.</p>
        <p style={{fontSize:13,color:"rgba(255,255,255,0.3)",marginTop:10}}>hello@salesbooster.com</p>
      </div>
      {[{h:"Products",l:[{t:"Sales Booster",p:"sales"},{t:"Referral Booster",p:"referral"},{t:"Review Booster",p:"review"},{t:"Support Booster",p:"support"}]},{h:"Resources",l:[{t:"ROI Calculator",p:"roi"},{t:"Integrations",p:"integrations"},{t:"Blog"},{t:"Case Studies"},{t:"Help Center"}]},{h:"Company",l:[{t:"About",p:"about"},{t:"Pricing",p:"pricing"},{t:"Contact"},{t:"Partners"}]},{h:"Legal",l:[{t:"Privacy"},{t:"Terms"},{t:"DPA"}]}].map((c,i)=><div key={i}><h4 style={{fontSize:12,fontWeight:600,color:"rgba(255,255,255,0.2)",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:16}}>{c.h}</h4>{c.l.map((l,j)=><a key={j} href="#" onClick={e=>{e.preventDefault();if(l.p)setPage(l.p)}} style={{display:"block",fontSize:13,color:"rgba(255,255,255,0.3)",textDecoration:"none",marginBottom:10,transition:"color 0.2s",cursor:"pointer"}} onMouseEnter={e=>e.target.style.color="rgba(255,255,255,0.7)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.3)"}>{l.t}</a>)}</div>)}
    </div>
    <div style={{maxWidth:1240,margin:"0 auto",padding:"0 36px",borderTop:"1px solid rgba(255,255,255,0.04)",paddingTop:20}}><span style={{fontSize:12,color:"rgba(255,255,255,0.15)"}}>© 2026 SalesBooster, Inc.</span></div>
  </footer>;
}

// ═══ Shared Product Page Shell ═══
function ProductPage({product,setPage,children}){
  const p=PRODUCTS.find(x=>x.id===product);
  return <>{children}
    {/* Bottom CTA */}
    <section style={{padding:"100px 0",background:"#111827",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",backgroundSize:"32px 32px"}}/>
      <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:500,height:500,borderRadius:"50%",background:`radial-gradient(circle,${p.color}12,transparent 65%)`}}/>
      <div style={{maxWidth:640,margin:"0 auto",padding:"0 36px",textAlign:"center",position:"relative"}}>
        <R><h2 className="dsp" style={{fontSize:"clamp(32px,4.5vw,48px)",fontWeight:800,letterSpacing:"-0.03em",lineHeight:1.1,color:"#fff",marginBottom:16}}>Ready to see {p.name} in action?</h2>
          <p style={{fontSize:17,color:"rgba(255,255,255,0.4)",lineHeight:1.7,marginBottom:40,maxWidth:440,margin:"0 auto 40px"}}>Start your 14-day free trial. No credit card required. Live in under 48 hours.</p>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12}}>
            <a href="#" style={{display:"inline-flex",alignItems:"center",gap:10,background:p.color,color:"#fff",fontSize:16,fontWeight:600,padding:"16px 32px",borderRadius:12,textDecoration:"none",boxShadow:`0 4px 16px ${p.color}40`}}>Start free trial <Arr/></a>
            <button onClick={()=>{setPage("home");setTimeout(()=>document.getElementById("pricing")?.scrollIntoView({behavior:"smooth"}),100)}} style={{fontSize:15,fontWeight:500,color:"rgba(255,255,255,0.4)",background:"none",border:"none",cursor:"pointer",padding:"16px"}}>View pricing →</button>
          </div>
        </R>
      </div>
    </section>
  </>;
}

// ═══ Feature Section Component ═══
function Features({title,subtitle,items,color}){
  return <section style={{padding:"100px 0"}}>
    <div style={{maxWidth:1240,margin:"0 auto",padding:"0 36px"}}>
      <R><h2 className="dsp" style={{fontSize:"clamp(28px,3.5vw,40px)",fontWeight:800,letterSpacing:"-0.03em",lineHeight:1.1,marginBottom:14}}>{title}</h2>
        <p style={{fontSize:16,color:"#6B7280",maxWidth:500,marginBottom:56,lineHeight:1.7}}>{subtitle}</p></R>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
        {items.map((f,i)=><R key={i} d={i*0.06}><div className="lift" style={{padding:"28px 24px",borderRadius:18,background:"#fff",border:"1px solid rgba(0,0,0,0.06)",height:"100%"}}>
          <div style={{width:44,height:44,borderRadius:12,background:color+"10",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,marginBottom:16}}>{f.icon}</div>
          <h3 className="dsp" style={{fontSize:17,fontWeight:700,marginBottom:8}}>{f.title}</h3>
          <p style={{fontSize:14,color:"#6B7280",lineHeight:1.7}}>{f.desc}</p>
        </div></R>)}
      </div>
    </div>
  </section>;
}

// ═══ Flow Section Component ═══
function Flow({steps,color}){
  return <section style={{background:"#111827",padding:"100px 0",position:"relative"}}>
    <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",backgroundSize:"32px 32px",pointerEvents:"none"}}/>
    <div style={{maxWidth:1240,margin:"0 auto",padding:"0 36px",position:"relative"}}>
      <R><p className="dsp" style={{fontSize:13,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"rgba(255,255,255,0.2)",marginBottom:10}}>How It Works</p>
        <h2 className="dsp" style={{fontSize:"clamp(28px,3.5vw,40px)",fontWeight:800,letterSpacing:"-0.03em",color:"#fff",marginBottom:56}}>The complete flow</h2></R>
      <div style={{display:"grid",gridTemplateColumns:`repeat(${steps.length},1fr)`,gap:12}}>
        {steps.map((s,i)=><R key={i} d={i*0.08}><div style={{padding:"24px 20px",borderRadius:16,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",height:"100%"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
            <div style={{width:36,height:36,borderRadius:10,background:color+"15",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>{s.icon}</div>
            <span className="dsp" style={{fontSize:11,fontWeight:700,color:color,opacity:0.6}}>Step {i+1}</span>
          </div>
          <h4 className="dsp" style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:6}}>{s.title}</h4>
          <p style={{fontSize:12,lineHeight:1.65,color:"rgba(255,255,255,0.35)"}}>{s.desc}</p>
        </div></R>)}
      </div>
    </div>
  </section>;
}

// ═══ HOMEPAGE ═══
function HomePage({setPage}){
  const[annual,setAnnual]=useState(true);
  const[faqOpen,setFaqOpen]=useState(null);
  const[plat,setPlat]=useState(0);
  const[techs,setTechs]=useState(5);
  const[jpd,setJpd]=useState(4);
  const[tix,setTix]=useState(350);
  const mj=techs*jpd*22;const rt=Math.round(mj*tix*0.37)+Math.round(mj*0.12*tix*1.37)+Math.round(mj*0.15*tix*0.5)+Math.round(mj*0.25*tix*0.18);
  const pp=PRODUCTS[plat];

  return <>
    {/* Hero */}
    <section style={{paddingTop:164,paddingBottom:100,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"10%",right:"5%",width:600,height:600,borderRadius:"50%",background:"radial-gradient(circle,rgba(79,70,229,0.04),transparent 65%)",pointerEvents:"none"}}/>
      <div style={{maxWidth:1240,margin:"0 auto",padding:"0 36px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center"}}>
        <div>
          <R><div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"7px 16px 7px 7px",borderRadius:100,background:"rgba(5,150,105,0.06)",border:"1px solid rgba(5,150,105,0.1)",marginBottom:28}}><div style={{width:20,height:20,borderRadius:"50%",background:"rgba(5,150,105,0.12)",display:"flex",alignItems:"center",justifyContent:"center"}}><Ck c="#059669"/></div><span style={{fontSize:13,fontWeight:600,color:"#059669"}}>Avg. 37% revenue increase per job</span></div></R>
          <R d={0.08}><h1 className="dsp" style={{fontSize:"clamp(40px,5vw,64px)",fontWeight:800,lineHeight:1.05,letterSpacing:"-0.035em",marginBottom:24}}>Your techs inspect.<br/><span style={{color:"#4F46E5"}}>Customers upgrade.</span></h1></R>
          <R d={0.16}><p style={{fontSize:18,lineHeight:1.7,color:"#4B5563",maxWidth:480,marginBottom:40}}>Turn every service call into a Good/Better/Best presentation — synced to your pricebook, presented on a tablet, pushed to Housecall Pro in one tap.</p></R>
          <R d={0.24}><div style={{display:"flex",gap:12,alignItems:"center",marginBottom:16}}>
            <a href="#" style={{display:"inline-flex",alignItems:"center",gap:10,background:"#4F46E5",color:"#fff",fontSize:15,fontWeight:600,padding:"15px 28px",borderRadius:12,textDecoration:"none",boxShadow:"0 2px 12px rgba(79,70,229,0.25)"}}>Start free 14-day trial <Arr/></a>
            <a href="#compare" style={{fontSize:15,fontWeight:600,color:"#4F46E5",textDecoration:"none",padding:"15px 16px"}}>See the difference →</a>
          </div></R>
          <R d={0.3}><div style={{display:"flex",alignItems:"center",gap:20,paddingTop:8}}>{["No credit card","Live in 48 hours","Cancel anytime"].map((t,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:6}}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="#059669" opacity="0.12"/><path d="M5 8.2L7 10.2L11 6" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span style={{fontSize:13,color:"#6B7280"}}>{t}</span></div>)}</div></R>
        </div>
        <R d={0.2}><div style={{background:"#fff",borderRadius:24,border:"1px solid rgba(0,0,0,0.06)",boxShadow:"0 32px 80px rgba(0,0,0,0.06)",padding:24}}>
          <div style={{fontSize:12,fontWeight:600,color:"#6B7280",letterSpacing:"0.05em",textTransform:"uppercase",marginBottom:16,display:"flex",alignItems:"center",gap:8}}><div style={{width:8,height:8,borderRadius:"50%",background:"#059669"}}/>Customer Presentation</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>{[{t:"Good",p:"$1,250",tag:"Essential",pop:false},{t:"Better",p:"$2,840",tag:"Recommended",pop:true},{t:"Best",p:"$4,150",tag:"Premium",pop:false}].map((t,i)=><div key={i} style={{borderRadius:16,padding:14,background:t.pop?"#4F46E5":"#fff",border:t.pop?"none":"1px solid #E5E7EB",transform:t.pop?"scale(1.03)":"scale(1)",position:"relative"}}>{t.pop&&<div style={{position:"absolute",top:-8,left:"50%",transform:"translateX(-50%)",padding:"3px 10px",borderRadius:100,background:"#fff",color:"#4F46E5",fontSize:10,fontWeight:700,boxShadow:"0 2px 8px rgba(0,0,0,0.08)"}}>POPULAR</div>}<div style={{fontSize:10,fontWeight:600,color:t.pop?"rgba(255,255,255,0.5)":"#9CA3AF",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:4}}>{t.tag}</div><div className="dsp" style={{fontSize:22,fontWeight:800,color:t.pop?"#fff":"#111827",marginBottom:8}}>{t.p}</div><button style={{width:"100%",padding:7,borderRadius:8,border:"none",fontSize:11,fontWeight:600,cursor:"pointer",background:t.pop?"#fff":"#F3F4F6",color:t.pop?"#4F46E5":"#374151"}}>Select {t.t}</button></div>)}</div>
        </div></R>
      </div>
    </section>

    {/* Trust */}
    <section style={{borderTop:"1px solid rgba(0,0,0,0.05)",borderBottom:"1px solid rgba(0,0,0,0.05)",padding:"36px 0"}}><div style={{maxWidth:1240,margin:"0 auto",padding:"0 36px",display:"flex",alignItems:"center",justifyContent:"center",gap:40}}><span style={{fontSize:13,fontWeight:500,color:"#9CA3AF"}}>Trusted by 340+ operators</span><div style={{height:1,flex:1,background:"rgba(0,0,0,0.04)"}}/>{[{v:"37%",l:"ticket increase"},{v:"$18M+",l:"generated"},{v:"4.8",l:"avg. rating"},{v:"<48hr",l:"setup"}].map((s,i)=><div key={i} style={{textAlign:"center",minWidth:80}}><div className="dsp" style={{fontSize:22,fontWeight:800}}>{s.v}</div><div style={{fontSize:11,color:"#9CA3AF",marginTop:2}}>{s.l}</div></div>)}</div></section>

    {/* Platform */}
    <section id="products" style={{padding:"100px 0"}}><div style={{maxWidth:1240,margin:"0 auto",padding:"0 36px"}}>
      <R><p className="dsp" style={{fontSize:13,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#4F46E5",marginBottom:10}}>The Platform</p><h2 className="dsp" style={{fontSize:"clamp(32px,4vw,48px)",fontWeight:800,letterSpacing:"-0.03em",lineHeight:1.1,marginBottom:14}}>Four products. One revenue system.</h2><p style={{fontSize:16,color:"#6B7280",maxWidth:460,marginBottom:56}}>Pick one to start. They compound together.</p></R>
      <div style={{display:"grid",gridTemplateColumns:"320px 1fr",gap:24}}>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>{PRODUCTS.map((w,i)=><button key={w.id} onClick={()=>setPlat(i)} style={{padding:"16px 18px",borderRadius:14,border:"1px solid",cursor:"pointer",textAlign:"left",display:"flex",alignItems:"center",gap:12,transition:"all 0.25s",background:plat===i?"#fff":"transparent",borderColor:plat===i?w.color+"30":"rgba(0,0,0,0.04)",boxShadow:plat===i?`0 8px 24px ${w.color}10`:"none"}}><div style={{width:40,height:40,borderRadius:11,background:plat===i?w.color+"12":"rgba(0,0,0,0.03)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{w.icon}</div><div style={{flex:1}}><span className="dsp" style={{fontSize:14,fontWeight:700,color:plat===i?"#111827":"#6B7280"}}>{w.name}</span><div style={{fontSize:12,color:"#9CA3AF",marginTop:2}}>{w.short}</div></div></button>)}</div>
        <div style={{borderRadius:18,background:"#fff",border:`1px solid ${pp.color}15`,overflow:"hidden"}}>
          <div style={{background:`linear-gradient(135deg,${pp.color}06,${pp.color}02)`,display:"flex",alignItems:"center",justifyContent:"center",minHeight:280,padding:32}}>
            <div style={{textAlign:"center",maxWidth:340}}>
              <div style={{width:64,height:64,borderRadius:18,background:pp.color+"12",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px",fontSize:32}}>{pp.icon}</div>
              <h3 className="dsp" style={{fontSize:20,fontWeight:800,marginBottom:8}}>{pp.name}</h3>
              <p style={{fontSize:13,color:"#6B7280",lineHeight:1.65,marginBottom:16}}>{pp.detail}</p>
              <button onClick={()=>setPage(pp.id)} style={{padding:"10px 20px",borderRadius:10,border:`1px solid ${pp.color}30`,background:"transparent",color:pp.color,fontSize:13,fontWeight:600,cursor:"pointer"}}>Learn more →</button>
            </div>
          </div>
          <div style={{padding:"12px 18px",borderTop:`1px solid ${pp.color}10`,display:"flex",alignItems:"center",justifyContent:"space-between"}}><span style={{fontSize:12,color:"#6B7280"}}>{pp.setup}</span><span className="dsp" style={{fontSize:14,fontWeight:800,color:pp.color}}>{pp.metric} <span style={{fontWeight:400,fontSize:12,color:"#9CA3AF"}}>{pp.ml}</span></span></div>
        </div>
      </div>
    </div></section>

    {/* With vs Without */}
    <section id="compare" style={{background:"#111827",padding:"100px 0",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(rgba(255,255,255,0.018) 1px, transparent 1px)",backgroundSize:"32px 32px",pointerEvents:"none"}}/>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"0 36px",position:"relative"}}>
        <R><div style={{textAlign:"center",maxWidth:600,margin:"0 auto 60px"}}>
          <p className="dsp" style={{fontSize:13,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"rgba(255,255,255,0.2)",marginBottom:10}}>The Difference</p>
          <h2 className="dsp" style={{fontSize:"clamp(30px,4vw,44px)",fontWeight:800,letterSpacing:"-0.03em",lineHeight:1.1,color:"#fff",marginBottom:14}}>With vs. without SalesBooster</h2>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.3)"}}>Scroll to see every revenue gap — and how we close it.</p>
        </div></R>
        <div style={{position:"relative"}}>
          <div style={{position:"absolute",left:"50%",top:0,bottom:0,width:2,background:"linear-gradient(180deg,rgba(79,70,229,0.06),rgba(79,70,229,0.12),rgba(79,70,229,0.06))",transform:"translateX(-50%)"}}/>
          {TL.map((step,i)=><div key={i} style={{display:"grid",gridTemplateColumns:"1fr 48px 1fr",gap:0,marginBottom:i<TL.length-1?20:0}}>
            <SR from="left" d={0.05}><div style={{padding:"24px 20px",borderRadius:16,background:"rgba(239,68,68,0.03)",border:"1px solid rgba(239,68,68,0.08)"}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}><div style={{width:36,height:36,borderRadius:10,background:"rgba(239,68,68,0.06)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>{step.without.icon}</div><h4 className="dsp" style={{fontSize:14,fontWeight:700,color:"rgba(255,255,255,0.75)"}}>{step.without.head}</h4></div>
              <p style={{fontSize:12,lineHeight:1.6,color:"rgba(255,255,255,0.28)"}}>{step.without.body}</p>
            </div></SR>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:2}}>
              <div style={{width:36,height:36,borderRadius:10,background:"#1E1B4B",border:"2px solid rgba(79,70,229,0.3)",display:"flex",alignItems:"center",justifyContent:"center"}}><span className="dsp" style={{fontSize:12,fontWeight:800,color:"#818CF8"}}>{step.num}</span></div>
            </div>
            <SR from="right" d={0.12}><div style={{padding:"24px 20px",borderRadius:16,background:"rgba(16,185,129,0.03)",border:"1px solid rgba(16,185,129,0.1)"}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}><div style={{width:36,height:36,borderRadius:10,background:"rgba(16,185,129,0.08)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>{step.with.icon}</div><h4 className="dsp" style={{fontSize:14,fontWeight:700,color:"#fff"}}>{step.with.head}</h4></div>
              <p style={{fontSize:12,lineHeight:1.6,color:"rgba(255,255,255,0.3)",marginBottom:12}}>{step.with.body}</p>
              <div style={{padding:"10px 12px",borderRadius:8,background:"rgba(16,185,129,0.05)",border:"1px solid rgba(16,185,129,0.08)"}}><div style={{fontSize:10,fontWeight:600,color:"#10B981",marginBottom:2}}>With {step.with.product}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.4)"}}>{step.with.gain}</div></div>
            </div></SR>
          </div>)}
        </div>
        <R><div style={{textAlign:"center",marginTop:48}}><a href="#" style={{display:"inline-flex",alignItems:"center",gap:10,background:"#4F46E5",color:"#fff",fontSize:15,fontWeight:600,padding:"15px 32px",borderRadius:12,textDecoration:"none",boxShadow:"0 4px 20px rgba(79,70,229,0.3)"}}>Stop the leaks — start free trial <Arr/></a></div></R>
      </div>
    </section>

    {/* Testimonials */}
    <section style={{padding:"100px 0"}}><div style={{maxWidth:1240,margin:"0 auto",padding:"0 36px"}}>
      <R><div style={{borderRadius:24,background:"#fff",border:"1px solid rgba(0,0,0,0.06)",padding:"40px 44px",marginBottom:20}}>
        <p className="dsp" style={{fontSize:24,fontWeight:600,lineHeight:1.4,letterSpacing:"-0.02em",maxWidth:700,marginBottom:20}}>Support Booster recovered $47,000 in unsold estimates last quarter. Jobs our team had completely written off.</p>
        <div style={{display:"flex",alignItems:"center",gap:12}}><div style={{width:36,height:36,borderRadius:10,background:"#8B5CF612",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,color:"#8B5CF6"}}>S</div><div><div style={{fontSize:13,fontWeight:600}}>Sarah Mitchell</div><div style={{fontSize:12,color:"#9CA3AF"}}>GM, Guardian Garage Doors · Denver, CO</div></div></div>
      </div></R>
    </div></section>

    {/* Pricing */}
    <section id="pricing" style={{padding:"100px 0",borderTop:"1px solid rgba(0,0,0,0.05)"}}><div style={{maxWidth:1060,margin:"0 auto",padding:"0 36px"}}>
      <R><div style={{textAlign:"center",maxWidth:500,margin:"0 auto 20px"}}><p className="dsp" style={{fontSize:13,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#4F46E5",marginBottom:10}}>Pricing</p><h2 className="dsp" style={{fontSize:"clamp(32px,4vw,48px)",fontWeight:800,letterSpacing:"-0.03em",lineHeight:1.1,marginBottom:14}}>Pays for itself in one job.</h2></div></R>
      <R d={0.08}><div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:48}}><span style={{fontSize:14,fontWeight:annual?400:600,color:annual?"#9CA3AF":"#111827"}}>Monthly</span><button onClick={()=>setAnnual(!annual)} style={{width:48,height:26,borderRadius:13,border:"none",cursor:"pointer",padding:3,background:annual?"#4F46E5":"#D1D5DB",display:"flex",alignItems:"center"}}><div style={{width:20,height:20,borderRadius:"50%",background:"#fff",boxShadow:"0 1px 3px rgba(0,0,0,0.15)",transform:annual?"translateX(22px)":"translateX(0)",transition:"0.3s cubic-bezier(0.22,1,0.36,1)"}}/></button><span style={{fontSize:14,fontWeight:annual?600:400,color:annual?"#111827":"#9CA3AF"}}>Annual</span>{annual&&<span style={{padding:"4px 10px",borderRadius:6,background:"rgba(5,150,105,0.08)",color:"#059669",fontSize:12,fontWeight:600}}>Save 10%</span>}</div></R>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginBottom:16}}>{PLANS.map((plan,i)=><R key={i} d={i*0.06}><div className="lift" style={{borderRadius:20,padding:28,height:"100%",display:"flex",flexDirection:"column",background:plan.pop?"#111827":"#fff",border:plan.pop?"2px solid #4F46E5":"1px solid rgba(0,0,0,0.06)",position:"relative"}}>{plan.pop&&<div style={{position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",padding:"5px 16px",borderRadius:100,background:"linear-gradient(135deg,#4F46E5,#7C3AED)",color:"#fff",fontSize:11,fontWeight:700}}>MOST POPULAR</div>}<h3 className="dsp" style={{fontSize:20,fontWeight:700,color:plan.pop?"#fff":"#111827",marginBottom:2}}>{plan.name}</h3><p style={{fontSize:13,color:plan.pop?"rgba(255,255,255,0.4)":"#9CA3AF",marginBottom:4}}>{plan.desc}</p><p style={{fontSize:12,fontWeight:600,color:plan.pop?"rgba(255,255,255,0.3)":"#9CA3AF",marginBottom:18}}>{plan.locs}</p><span className="dsp" style={{fontSize:44,fontWeight:800,color:plan.pop?"#fff":"#111827",letterSpacing:"-0.03em",lineHeight:1}}>${annual?plan.a:plan.m}</span><span style={{fontSize:13,color:plan.pop?"rgba(255,255,255,0.3)":"#9CA3AF"}}>{plan.per}</span><a href="#" style={{display:"block",textAlign:"center",padding:"13px 20px",borderRadius:11,fontSize:14,fontWeight:600,textDecoration:"none",margin:"20px 0 24px",...(plan.pop?{background:"#4F46E5",color:"#fff"}:{background:"#111827",color:"#fff"})}}>Start free trial</a>{plan.items.map((item,j)=><div key={j} style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}><Ck c={plan.pop?"rgba(255,255,255,0.35)":"#D1D5DB"}/><span style={{fontSize:13,color:plan.pop?"rgba(255,255,255,0.6)":"#6B7280"}}>{item}</span></div>)}</div></R>)}</div>
      <R d={0.2}><div style={{borderRadius:16,border:"1px solid rgba(0,0,0,0.06)",background:"#fff",padding:"24px 32px",display:"flex",alignItems:"center",justifyContent:"space-between"}}><div><h3 className="dsp" style={{fontSize:18,fontWeight:700,marginBottom:2}}>Enterprise</h3><p style={{fontSize:13,color:"#9CA3AF"}}>10+ locations · All 4 products · Multi-FSM · Dedicated account manager</p></div><a href="#" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"12px 24px",borderRadius:10,border:"1px solid #D1D5DB",fontSize:14,fontWeight:600,color:"#374151",textDecoration:"none",whiteSpace:"nowrap"}}>Contact sales <Arr/></a></div></R>
    </div></section>

    {/* ROI Calculator */}
    <section id="roi" style={{padding:"100px 0",background:"#fff",borderTop:"1px solid rgba(0,0,0,0.05)"}}><div style={{maxWidth:1060,margin:"0 auto",padding:"0 36px"}}>
      <R><div style={{textAlign:"center",maxWidth:520,margin:"0 auto 48px"}}><p className="dsp" style={{fontSize:13,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#4F46E5",marginBottom:10}}>ROI Calculator</p><h2 className="dsp" style={{fontSize:"clamp(28px,3.5vw,40px)",fontWeight:800,letterSpacing:"-0.03em",lineHeight:1.1,marginBottom:14}}>See what you're leaving on the table</h2></div></R>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32}}>
        <R><div style={{background:"#F9FAFB",borderRadius:20,border:"1px solid rgba(0,0,0,0.06)",padding:32}}>
          {[{l:"Technicians",v:techs,s:setTechs,mn:1,mx:30},{l:"Jobs per tech / day",v:jpd,s:setJpd,mn:1,mx:10},{l:"Current avg. ticket",v:tix,s:setTix,mn:100,mx:2000,st:25,p:"$"}].map((s,i)=><div key={i} style={{marginBottom:i<2?28:0}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:10}}><span style={{fontSize:14,fontWeight:500,color:"#374151"}}>{s.l}</span><span className="dsp" style={{fontSize:16,fontWeight:700}}>{s.p||""}{s.v}</span></div><input type="range" min={s.mn} max={s.mx} step={s.st||1} value={s.v} onChange={e=>s.s(Number(e.target.value))}/></div>)}
          <div style={{padding:"14px 16px",borderRadius:10,background:"rgba(0,0,0,0.03)",fontSize:13,color:"#6B7280",marginTop:20}}><strong style={{color:"#111827"}}>{mj.toLocaleString()}</strong> jobs/month</div>
        </div></R>
        <R d={0.1}><div>
          <div style={{padding:"28px 24px",borderRadius:20,background:"#111827",color:"#fff",marginBottom:12}}><div style={{fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.25)",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:8}}>Additional monthly revenue</div><div className="dsp" style={{fontSize:48,fontWeight:800,letterSpacing:"-0.03em",lineHeight:1}}>${rt.toLocaleString()}</div><div style={{fontSize:13,color:"rgba(255,255,255,0.3)",marginTop:6}}>That's <strong style={{color:"#10B981"}}>${(rt*12).toLocaleString()}</strong>/year</div></div>
          <a href="#" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:14,borderRadius:12,background:"#4F46E5",color:"#fff",fontSize:15,fontWeight:600,textDecoration:"none",boxShadow:"0 2px 12px rgba(79,70,229,0.25)"}}>Start capturing this revenue <Arr/></a>
        </div></R>
      </div>
    </div></section>

    {/* FAQ */}
    <section style={{borderTop:"1px solid rgba(0,0,0,0.05)",padding:"100px 0",background:"#F9FAFB"}}><div style={{maxWidth:720,margin:"0 auto",padding:"0 36px"}}>
      <R><h2 className="dsp" style={{fontSize:"clamp(28px,3.5vw,40px)",fontWeight:800,letterSpacing:"-0.02em",marginBottom:40}}>Common questions</h2></R>
      <div style={{borderRadius:16,overflow:"hidden",border:"1px solid rgba(0,0,0,0.06)",background:"#fff"}}>{FAQS.map((f,i)=><div key={i} style={{borderBottom:i<FAQS.length-1?"1px solid rgba(0,0,0,0.05)":"none"}}><button onClick={()=>setFaqOpen(faqOpen===i?null:i)} style={{width:"100%",padding:"20px 24px",background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,textAlign:"left"}}><span style={{fontSize:15,fontWeight:600}}>{f.q}</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{flexShrink:0,transition:"transform 0.3s",transform:faqOpen===i?"rotate(45deg)":"rotate(0)"}}><path d="M8 3V13M3 8H13" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/></svg></button><div className="faq-b" style={{maxHeight:faqOpen===i?200:0,opacity:faqOpen===i?1:0}}><p style={{padding:"0 24px 20px",fontSize:14,lineHeight:1.75,color:"#6B7280"}}>{f.a}</p></div></div>)}</div>
    </div></section>

    {/* CTA */}
    <section style={{padding:"100px 0",background:"#111827",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",backgroundSize:"32px 32px"}}/><div style={{maxWidth:640,margin:"0 auto",padding:"0 36px",textAlign:"center",position:"relative"}}><R><h2 className="dsp" style={{fontSize:"clamp(36px,5vw,52px)",fontWeight:800,letterSpacing:"-0.035em",lineHeight:1.08,color:"#fff",marginBottom:18}}>Stop leaving revenue<br/>on the table.</h2><p style={{fontSize:17,color:"rgba(255,255,255,0.4)",marginBottom:40,maxWidth:460,margin:"0 auto 40px"}}>Join 340+ home service companies capturing more from every job.</p><a href="#" style={{display:"inline-flex",alignItems:"center",gap:10,background:"#4F46E5",color:"#fff",fontSize:16,fontWeight:600,padding:"16px 32px",borderRadius:12,textDecoration:"none",boxShadow:"0 4px 16px rgba(79,70,229,0.3)"}}>Start free trial <Arr/></a></R></div></section>
  </>;
}

// ═══ SALES BOOSTER PAGE ═══
function SalesPage({setPage}){
  return <ProductPage product="sales" setPage={setPage}>
    <section style={{paddingTop:164,paddingBottom:80,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"10%",right:"5%",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(16,185,129,0.05),transparent 65%)",pointerEvents:"none"}}/>
      <div style={{maxWidth:1240,margin:"0 auto",padding:"0 36px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center"}}>
        <div>
          <R><div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 14px 5px 6px",borderRadius:100,background:"#10B98108",border:"1px solid #10B98115",marginBottom:24}}><span style={{fontSize:14}}>📊</span><span style={{fontSize:13,fontWeight:600,color:"#10B981"}}>Sales Booster</span></div></R>
          <R d={0.08}><h1 className="dsp" style={{fontSize:"clamp(38px,4.5vw,56px)",fontWeight:800,lineHeight:1.08,letterSpacing:"-0.035em",marginBottom:20}}>Turn every inspection into<br/><span style={{color:"#10B981"}}>a bigger ticket.</span></h1></R>
          <R d={0.16}><p style={{fontSize:17,lineHeight:1.7,color:"#4B5563",maxWidth:480,marginBottom:36}}>Digital inspections, three-tier presentations, AI follow-up, and programmatic video sales — all synced to your pricebook and Housecall Pro.</p></R>
          <R d={0.24}><div style={{display:"flex",gap:12,alignItems:"center"}}>
            <a href="#" style={{display:"inline-flex",alignItems:"center",gap:10,background:"#10B981",color:"#fff",fontSize:15,fontWeight:600,padding:"15px 28px",borderRadius:12,textDecoration:"none",boxShadow:"0 2px 12px rgba(16,185,129,0.25)"}}>Start free trial <Arr/></a>
            <a href="#" style={{fontSize:15,fontWeight:600,color:"#10B981",textDecoration:"none",padding:"15px 16px"}}>See it in action →</a>
          </div></R>
        </div>
        <R d={0.2}><div style={{background:"#fff",borderRadius:24,border:"1px solid rgba(16,185,129,0.12)",boxShadow:"0 32px 80px rgba(0,0,0,0.05)",padding:28,position:"relative"}}>
          <div style={{fontSize:11,fontWeight:600,color:"#6B7280",letterSpacing:"0.05em",textTransform:"uppercase",marginBottom:20,display:"flex",alignItems:"center",gap:8}}><div style={{width:8,height:8,borderRadius:"50%",background:"#10B981"}}/>Live Inspection → Presentation</div>
          {/* Inspection to GBB flow graphic */}
          <div style={{display:"grid",gridTemplateColumns:"1fr auto 1fr",gap:12,alignItems:"center",marginBottom:20}}>
            <div style={{padding:16,borderRadius:14,background:"#F9FAFB",border:"1px solid rgba(0,0,0,0.05)"}}>
              <div style={{fontSize:11,fontWeight:600,color:"#9CA3AF",marginBottom:8}}>INSPECTION</div>
              {["⚠️ Capacitor failing","📸 Coil damage","✅ Wiring OK"].map((item,i)=><div key={i} style={{fontSize:12,color:"#4B5563",padding:"6px 0",borderBottom:i<2?"1px solid rgba(0,0,0,0.04)":"none"}}>{item}</div>)}
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4}}><svg width="24" height="14" viewBox="0 0 24 14" fill="none"><path d="M0 7H20M14 2L20 7L14 12" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"/></svg><span style={{fontSize:9,color:"#10B981",fontWeight:600}}>AUTO</span></div>
            <div style={{padding:16,borderRadius:14,background:"#10B98108",border:"1px solid #10B98115"}}>
              <div style={{fontSize:11,fontWeight:600,color:"#10B981",marginBottom:8}}>GBB GENERATED</div>
              {["Good — $1,250","Better — $2,840","Best — $4,150"].map((item,i)=><div key={i} style={{fontSize:12,color:"#111827",fontWeight:i===1?700:400,padding:"6px 0",borderBottom:i<2?"1px solid rgba(16,185,129,0.08)":"none"}}>{item}</div>)}
            </div>
          </div>
          <div style={{padding:"12px 16px",borderRadius:10,background:"#F9FAFB",display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontSize:12,color:"#6B7280"}}>Estimate pushed to HCP</span><div style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:6,height:6,borderRadius:"50%",background:"#10B981"}}/><span style={{fontSize:11,fontWeight:600,color:"#10B981"}}>Synced</span></div></div>
        </div></R>
      </div>
    </section>

    <Features title="Everything your techs need to sell more" subtitle="From inspection to signed estimate — no paperwork, no double entry, no missed revenue." color="#10B981" items={[
      {icon:"📋",title:"Digital Inspections",desc:"Custom forms with photo capture, conditional logic, and auto-tagging. Built for tablets. Pre-built templates for HVAC, plumbing, electrical, and garage doors."},
      {icon:"📊",title:"Good / Better / Best Engine",desc:"Tagged issues auto-map to your synced pricebook. Three tiers generate instantly with real line items, real prices, and real descriptions."},
      {icon:"🖥️",title:"Customer Presentation",desc:"Flip the tablet to the customer. They see three clear options, tap to select, and sign. The estimate pushes to Housecall Pro as a multi-option estimate."},
      {icon:"🎬",title:"Programmatic Video Sales",desc:"Personalized video generated for each estimate — walks the customer through their specific issues, the three tiers, and what's included. Sent automatically."},
      {icon:"💬",title:"Customer Chat Agent",desc:"Homeowners can text or request a callback directly from their follow-up portal. AI answers questions about their estimate 24/7 using your knowledge base."},
      {icon:"🔗",title:"AI Follow-Up Portal",desc:"Every presentation gets a unique URL. Customer revisits anytime to view options, watch their video, chat with AI, or approve the estimate online."},
    ]}/>

    <Flow color="#10B981" steps={[
      {icon:"📋",title:"Tech opens inspection",desc:"Structured digital form on a tablet. Issues photographed and auto-tagged."},
      {icon:"⚡",title:"GBB auto-generates",desc:"Three tiers built from your synced pricebook with real line items."},
      {icon:"🖥️",title:"Customer picks a tier",desc:"Tablet flips to presentation. Customer selects Good, Better, or Best."},
      {icon:"🎬",title:"Video & portal sent",desc:"Personalized video and follow-up link sent via SMS and email."},
      {icon:"🔗",title:"Synced to HCP",desc:"Selected tier becomes a multi-option estimate in Housecall Pro."},
    ]}/>
  </ProductPage>;
}

// ═══ REFERRAL BOOSTER PAGE ═══
function ReferralPage({setPage}){
  return <ProductPage product="referral" setPage={setPage}>
    <section style={{paddingTop:164,paddingBottom:80,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"10%",right:"5%",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(59,130,246,0.05),transparent 65%)",pointerEvents:"none"}}/>
      <div style={{maxWidth:1240,margin:"0 auto",padding:"0 36px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center"}}>
        <div>
          <R><div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 14px 5px 6px",borderRadius:100,background:"#3B82F608",border:"1px solid #3B82F615",marginBottom:24}}><span style={{fontSize:14}}>🤝</span><span style={{fontSize:13,fontWeight:600,color:"#3B82F6"}}>Referral Booster</span></div></R>
          <R d={0.08}><h1 className="dsp" style={{fontSize:"clamp(38px,4.5vw,56px)",fontWeight:800,lineHeight:1.08,letterSpacing:"-0.035em",marginBottom:20}}>Turn happy customers into<br/><span style={{color:"#3B82F6"}}>your sales team.</span></h1></R>
          <R d={0.16}><p style={{fontSize:17,lineHeight:1.7,color:"#4B5563",maxWidth:480,marginBottom:36}}>Automated ambassador enrollment, unique tracking per customer, full attribution from referral to paid invoice, and automatic reward payouts.</p></R>
          <R d={0.24}><div style={{display:"flex",gap:12,alignItems:"center"}}>
            <a href="#" style={{display:"inline-flex",alignItems:"center",gap:10,background:"#3B82F6",color:"#fff",fontSize:15,fontWeight:600,padding:"15px 28px",borderRadius:12,textDecoration:"none",boxShadow:"0 2px 12px rgba(59,130,246,0.25)"}}>Start free trial <Arr/></a>
            <a href="#" style={{fontSize:15,fontWeight:600,color:"#3B82F6",textDecoration:"none",padding:"15px 16px"}}>See it in action →</a>
          </div></R>
        </div>
        {/* Ambassador flow graphic */}
        <R d={0.2}><div style={{background:"#fff",borderRadius:24,border:"1px solid rgba(59,130,246,0.12)",boxShadow:"0 32px 80px rgba(0,0,0,0.05)",padding:28}}>
          <div style={{fontSize:11,fontWeight:600,color:"#6B7280",letterSpacing:"0.05em",textTransform:"uppercase",marginBottom:20}}>Ambassador Journey</div>
          {[{icon:"✅",label:"Job completes",sub:"Webhook triggers enrollment",color:"#D1D5DB"},{icon:"📱",label:"SMS invite sent",sub:"\"Reply YES to become an ambassador\"",color:"#93C5FD"},{icon:"🪪",label:"Contact card delivered",sub:"Unique phone + email + link",color:"#60A5FA"},{icon:"🗣️",label:"Customer shares",sub:"Friend calls using the contact card",color:"#3B82F6"},{icon:"💰",label:"Reward triggered",sub:"Paid automatically when job closes",color:"#2563EB"}].map((s,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:14,padding:"12px 0",borderBottom:i<4?"1px solid rgba(0,0,0,0.04)":"none"}}>
            <div style={{width:36,height:36,borderRadius:10,background:s.color+"15",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{s.icon}</div>
            <div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:"#111827"}}>{s.label}</div><div style={{fontSize:12,color:"#9CA3AF"}}>{s.sub}</div></div>
            {i<4&&<svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{opacity:0.2}}><path d="M6 2V10M3 7L6 10L9 7" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/></svg>}
          </div>)}
        </div></R>
      </div>
    </section>

    <Features title="Every referral tracked. Every reward automated." subtitle="From enrollment to payout — zero manual work from your team." color="#3B82F6" items={[
      {icon:"📱",title:"Automatic Enrollment",desc:"After every completed job (and positive review), customers receive an SMS invitation. One tap to become an ambassador. No app downloads, no sign-ups."},
      {icon:"🪪",title:"Shareable Contact Cards",desc:"Each ambassador gets a downloadable vCard with a unique phone extension, email alias, and referral link. They share it like any contact — via text, AirDrop, or email."},
      {icon:"📞",title:"Call & Text Attribution",desc:"When a friend calls using the contact card, the extension auto-dials via DTMF. The system logs who referred whom before forwarding to your business line."},
      {icon:"🔍",title:"Full Revenue Attribution",desc:"Track the entire pipeline: referral → lead → estimate → job → paid invoice. Know exactly how much revenue each ambassador generates."},
      {icon:"💰",title:"Automatic Rewards",desc:"Configure flat or tiered rewards. When a referred job is completed and paid in HCP, the reward triggers automatically and the ambassador is notified."},
      {icon:"📊",title:"Ambassador Dashboard",desc:"See your top ambassadors, referral pipeline, conversion rates, and total ROI — per location and across your business."},
    ]}/>

    <Flow color="#3B82F6" steps={[
      {icon:"✅",title:"Job completes",desc:"HCP webhook triggers. Customer info captured automatically."},
      {icon:"📱",title:"Ambassador invite",desc:"SMS sent after configurable delay. One-tap enrollment."},
      {icon:"🪪",title:"Card delivered",desc:"vCard with unique phone, email, and link."},
      {icon:"📞",title:"Referral tracked",desc:"Friend calls or texts. Attribution logged automatically."},
      {icon:"💰",title:"Reward paid",desc:"Job paid in HCP → reward calculated and sent."},
    ]}/>
  </ProductPage>;
}

// ═══ REVIEW BOOSTER PAGE ═══
function ReviewPage({setPage}){
  return <ProductPage product="review" setPage={setPage}>
    <section style={{paddingTop:164,paddingBottom:80,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"10%",right:"5%",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(245,158,11,0.05),transparent 65%)",pointerEvents:"none"}}/>
      <div style={{maxWidth:1240,margin:"0 auto",padding:"0 36px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center"}}>
        <div>
          <R><div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 14px 5px 6px",borderRadius:100,background:"#F59E0B08",border:"1px solid #F59E0B15",marginBottom:24}}><span style={{fontSize:14}}>⭐</span><span style={{fontSize:13,fontWeight:600,color:"#D97706"}}>Review Booster</span></div></R>
          <R d={0.08}><h1 className="dsp" style={{fontSize:"clamp(38px,4.5vw,56px)",fontWeight:800,lineHeight:1.08,letterSpacing:"-0.035em",marginBottom:20}}>Five-star reviews<br/><span style={{color:"#D97706"}}>on autopilot.</span></h1></R>
          <R d={0.16}><p style={{fontSize:17,lineHeight:1.7,color:"#4B5563",maxWidth:480,marginBottom:36}}>AI sentiment conversations after every job. Happy customers go to Google. Unhappy ones get intercepted. Your rating climbs, your leads grow.</p></R>
          <R d={0.24}><div style={{display:"flex",gap:12,alignItems:"center"}}>
            <a href="#" style={{display:"inline-flex",alignItems:"center",gap:10,background:"#D97706",color:"#fff",fontSize:15,fontWeight:600,padding:"15px 28px",borderRadius:12,textDecoration:"none",boxShadow:"0 2px 12px rgba(217,119,6,0.25)"}}>Start free trial <Arr/></a>
            <a href="#" style={{fontSize:15,fontWeight:600,color:"#D97706",textDecoration:"none",padding:"15px 16px"}}>See it in action →</a>
          </div></R>
        </div>
        {/* Sentiment routing graphic */}
        <R d={0.2}><div style={{background:"#fff",borderRadius:24,border:"1px solid rgba(245,158,11,0.12)",boxShadow:"0 32px 80px rgba(0,0,0,0.05)",padding:28}}>
          <div style={{fontSize:11,fontWeight:600,color:"#6B7280",letterSpacing:"0.05em",textTransform:"uppercase",marginBottom:20}}>Smart Sentiment Routing</div>
          <div style={{textAlign:"center",marginBottom:20}}>
            <div style={{display:"inline-flex",padding:"10px 20px",borderRadius:10,background:"#F59E0B08",border:"1px solid #F59E0B15",fontSize:13,fontWeight:600,color:"#D97706"}}>💬 AI Sentiment Check</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            <div style={{padding:18,borderRadius:14,background:"rgba(16,185,129,0.04)",border:"1px solid rgba(16,185,129,0.1)",textAlign:"center"}}>
              <div style={{fontSize:28,marginBottom:8}}>😊</div>
              <div className="dsp" style={{fontSize:14,fontWeight:700,color:"#10B981",marginBottom:4}}>Positive</div>
              <div style={{fontSize:12,color:"#6B7280",marginBottom:12}}>Routed to Google Reviews</div>
              <div style={{display:"flex",justifyContent:"center",gap:2}}>{[...Array(5)].map((_,j)=><svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#F59E0B"><path d="M7 1L8.67 4.84L12.73 5.43L9.87 8.56L10.58 12.82L7 10.77L3.42 12.82L4.13 8.56L1.27 5.43L5.33 4.84L7 1Z"/></svg>)}</div>
            </div>
            <div style={{padding:18,borderRadius:14,background:"rgba(239,68,68,0.04)",border:"1px solid rgba(239,68,68,0.08)",textAlign:"center"}}>
              <div style={{fontSize:28,marginBottom:8}}>😟</div>
              <div className="dsp" style={{fontSize:14,fontWeight:700,color:"#EF4444",marginBottom:4}}>Negative</div>
              <div style={{fontSize:12,color:"#6B7280",marginBottom:12}}>Intercepted → internal ticket</div>
              <div style={{fontSize:11,color:"#EF4444",fontWeight:600}}>🛡️ Before public review</div>
            </div>
          </div>
          <div style={{marginTop:16,padding:"12px 16px",borderRadius:10,background:"#F9FAFB",textAlign:"center",fontSize:12,color:"#6B7280"}}>Per-location routing · Tech bonus tracking · Resolution re-engagement</div>
        </div></R>
      </div>
    </section>

    <Features title="Your reputation, fully automated" subtitle="From job completion to five-star review — every customer, every time." color="#F59E0B" items={[
      {icon:"💬",title:"AI Sentiment Conversations",desc:"Natural SMS conversations after every job. The AI gauges satisfaction with empathy and precision — not a survey, a real conversation."},
      {icon:"⭐",title:"Smart Google Routing",desc:"Happy customers get a direct link to your Google Business Profile — automatically routed to the correct location for multi-location shops."},
      {icon:"🛡️",title:"Negative Feedback Shield",desc:"Unhappy customers are intercepted before they post publicly. A structured ticket is created with complaint details, urgency level, and resolution suggestions."},
      {icon:"🔄",title:"Resolution Re-engagement",desc:"After your team resolves an issue, trigger a second review request. Turn a potential 1-star into a 5-star recovery story."},
      {icon:"💰",title:"Tech Bonus System",desc:"Pay your technicians a bonus for every Google review attributed to their work. Configurable amount, minimum star rating, and automated tracking."},
      {icon:"📈",title:"Review Analytics",desc:"Track review volume, average rating trends, sentiment distribution, and technician performance — per location and over time."},
    ]}/>

    <Flow color="#F59E0B" steps={[
      {icon:"✅",title:"Job completes",desc:"HCP webhook fires. Customer info and tech data captured."},
      {icon:"💬",title:"AI texts customer",desc:"Natural conversation checks satisfaction. Sentiment classified."},
      {icon:"😊",title:"Positive → Google",desc:"Direct review link to correct location. Click tracked."},
      {icon:"🛡️",title:"Negative → ticket",desc:"Structured complaint with categories and urgency. Manager notified."},
      {icon:"🔄",title:"Resolved → re-engage",desc:"After fix, second review request sent. Second chance at 5 stars."},
    ]}/>
  </ProductPage>;
}

// ═══ SUPPORT BOOSTER PAGE ═══
function SupportPage({setPage}){
  return <ProductPage product="support" setPage={setPage}>
    <section style={{paddingTop:164,paddingBottom:80,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"10%",right:"5%",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(139,92,246,0.05),transparent 65%)",pointerEvents:"none"}}/>
      <div style={{maxWidth:1240,margin:"0 auto",padding:"0 36px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center"}}>
        <div>
          <R><div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 14px 5px 6px",borderRadius:100,background:"#8B5CF608",border:"1px solid #8B5CF615",marginBottom:24}}><span style={{fontSize:14}}>🤖</span><span style={{fontSize:13,fontWeight:600,color:"#8B5CF6"}}>Support Booster</span></div></R>
          <R d={0.08}><h1 className="dsp" style={{fontSize:"clamp(38px,4.5vw,56px)",fontWeight:800,lineHeight:1.08,letterSpacing:"-0.035em",marginBottom:20}}>Revenue recovery<br/><span style={{color:"#8B5CF6"}}>that never sleeps.</span></h1></R>
          <R d={0.16}><p style={{fontSize:17,lineHeight:1.7,color:"#4B5563",maxWidth:480,marginBottom:36}}>Three AI agents recover unsold estimates, collect overdue invoices, and re-engage lapsed memberships — 24/7, with human escalation built in.</p></R>
          <R d={0.24}><div style={{display:"flex",gap:12,alignItems:"center"}}>
            <a href="#" style={{display:"inline-flex",alignItems:"center",gap:10,background:"#8B5CF6",color:"#fff",fontSize:15,fontWeight:600,padding:"15px 28px",borderRadius:12,textDecoration:"none",boxShadow:"0 2px 12px rgba(139,92,246,0.25)"}}>Start free trial <Arr/></a>
            <a href="#" style={{fontSize:15,fontWeight:600,color:"#8B5CF6",textDecoration:"none",padding:"15px 16px"}}>See it in action →</a>
          </div></R>
        </div>
        {/* Three agents graphic */}
        <R d={0.2}><div style={{background:"#fff",borderRadius:24,border:"1px solid rgba(139,92,246,0.12)",boxShadow:"0 32px 80px rgba(0,0,0,0.05)",padding:28}}>
          <div style={{fontSize:11,fontWeight:600,color:"#6B7280",letterSpacing:"0.05em",textTransform:"uppercase",marginBottom:20}}>Three AI Agents, One Mission</div>
          {[
            {icon:"📩",name:"Estimate Recovery Agent",desc:"Follows up on unsold estimates with personalized outreach over 3 weeks",stat:"18% recovery rate",color:"#8B5CF6"},
            {icon:"💳",name:"AR Collection Agent",desc:"Escalating reminders on overdue invoices with payment links",stat:"$47K+ recovered/qtr",color:"#7C3AED"},
            {icon:"🔄",name:"Membership Agent",desc:"Re-engages lapsed memberships with renewal offers and scheduling",stat:"Automated renewal",color:"#6D28D9"},
          ].map((a,i)=><div key={i} style={{padding:"16px 18px",borderRadius:14,background:a.color+"06",border:`1px solid ${a.color}12`,marginBottom:i<2?10:0,display:"flex",alignItems:"center",gap:14}}>
            <div style={{width:40,height:40,borderRadius:12,background:a.color+"12",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{a.icon}</div>
            <div style={{flex:1}}><div className="dsp" style={{fontSize:14,fontWeight:700,color:"#111827"}}>{a.name}</div><div style={{fontSize:12,color:"#6B7280",marginTop:2}}>{a.desc}</div></div>
            <span style={{fontSize:11,fontWeight:600,color:a.color,whiteSpace:"nowrap"}}>{a.stat}</span>
          </div>)}
          <div style={{marginTop:16,padding:"14px 16px",borderRadius:10,background:"#F9FAFB",display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:28,height:28,borderRadius:8,background:"#8B5CF610",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14}}>🧠</div>
            <div><div style={{fontSize:12,fontWeight:600,color:"#111827"}}>Self-learning knowledge base</div><div style={{fontSize:11,color:"#9CA3AF"}}>AI gets smarter from every manager answer</div></div>
          </div>
        </div></R>
      </div>
    </section>

    <Features title="Three agents. Every dollar recovered." subtitle="From cold estimate to closed deal — automatically, compliantly, and intelligently." color="#8B5CF6" items={[
      {icon:"📩",title:"Unsold Estimate Follow-Up",desc:"AI sends personalized sequences over 3 weeks. Answers objections using your knowledge base. Escalates to your team when the customer is ready."},
      {icon:"💳",title:"AR Collection Agent",desc:"Escalating tone from friendly reminder to final notice. Includes payment links. Detects disputes and payment plans automatically."},
      {icon:"🔄",title:"Membership Re-engagement",desc:"Identifies lapsed members by tag or job type. Sends renewal offers with pricing from your pricebook. Schedules next service on acceptance."},
      {icon:"🧠",title:"Self-Learning Knowledge Base",desc:"Upload documents, FAQ, policies. AI uses them to answer customer questions. When it doesn't know, it asks your manager — and learns the answer permanently."},
      {icon:"👤",title:"Admin Takeover",desc:"Take over any conversation at any time. Type your own message. Hand it back to AI when done. Full conversation history preserved."},
      {icon:"📊",title:"Recovery Dashboard",desc:"Track conversion rates, revenue recovered, and collection rates across all three agents. Per-location and per-agent breakdowns."},
    ]}/>

    <Flow color="#8B5CF6" steps={[
      {icon:"📩",title:"Estimate goes cold",desc:"Unsold estimate detected from HCP. Task created automatically."},
      {icon:"🤖",title:"AI reaches out",desc:"Personalized SMS referencing their specific estimate and services."},
      {icon:"💬",title:"Customer engages",desc:"AI answers questions from knowledge base. Handles objections."},
      {icon:"🧠",title:"Learns & escalates",desc:"Unknown questions go to manager. Answers become permanent knowledge."},
      {icon:"💰",title:"Revenue recovered",desc:"Estimate closes, invoice collects, or membership renews."},
    ]}/>
  </ProductPage>;
}

// ═══ PRICING PAGE ═══
function PricingPage({setPage}){
  const[annual,setAnnual]=useState(true);
  const[faqOpen,setFaqOpen]=useState(null);
  const CMP=[
    {cat:"Platform",rows:[{f:"Housecall Pro sync",s:true,g:true,p:true},{f:"Number of products",s:"1",g:"2",p:"All 4"},{f:"Location limit",s:"3",g:"5",p:"10"},{f:"Core analytics dashboard",s:true,g:true,p:true},{f:"Advanced analytics & exports",s:false,g:true,p:true},{f:"Custom form templates",s:false,g:false,p:true}]},
    {cat:"Sales Booster",rows:[{f:"Digital inspection forms",s:true,g:true,p:true},{f:"Good/Better/Best engine",s:true,g:true,p:true},{f:"Customer presentation mode",s:true,g:true,p:true},{f:"Programmatic video sales",s:false,g:true,p:true},{f:"AI follow-up portal",s:false,g:true,p:true},{f:"Customer chat agent",s:false,g:true,p:true}]},
    {cat:"Referral Booster",rows:[{f:"Auto ambassador enrollment",s:true,g:true,p:true},{f:"Shareable contact cards (vCard)",s:true,g:true,p:true},{f:"Call & text attribution",s:true,g:true,p:true},{f:"Automatic reward payouts",s:true,g:true,p:true},{f:"Ambassador portal & dashboard",s:false,g:true,p:true}]},
    {cat:"Review Booster",rows:[{f:"AI sentiment conversations",s:true,g:true,p:true},{f:"Per-location Google routing",s:true,g:true,p:true},{f:"Negative feedback shield & tickets",s:true,g:true,p:true},{f:"Resolution re-engagement",s:false,g:true,p:true},{f:"Tech bonus system",s:false,g:true,p:true}]},
    {cat:"Support Booster",rows:[{f:"Unsold estimate recovery agent",s:true,g:true,p:true},{f:"AR collection agent",s:true,g:true,p:true},{f:"Membership re-engagement agent",s:true,g:true,p:true},{f:"Self-learning knowledge base",s:false,g:true,p:true},{f:"Admin conversation takeover",s:false,g:false,p:true},{f:"Manager escalation flow",s:false,g:true,p:true}]},
    {cat:"Support & Onboarding",rows:[{f:"Email support",s:true,g:true,p:true},{f:"Priority support",s:false,g:true,p:true},{f:"Phone & chat support",s:false,g:false,p:true},{f:"Dedicated onboarding",s:false,g:false,p:true}]},
  ];
  const pFaqs=[
    {q:"Can I switch plans later?",a:"Yes. Upgrade or downgrade at any time. Changes take effect on your next billing cycle. No penalties."},
    {q:"What counts as a \"location\"?",a:"Each HCP company ID counts as one location. If you have 3 office locations in HCP, that's 3 locations."},
    {q:"Do I need all four products?",a:"No. Start with one on Starter and add more as you grow. Most customers start with Sales Booster or Review Booster."},
    {q:"Is there a setup fee?",a:"No setup fees, no implementation costs, no hidden charges. The price you see is what you pay."},
    {q:"What's the contract length?",a:"Monthly plans are month-to-month. Annual plans are a 12-month commitment with 10% savings."},
    {q:"What happens after the free trial?",a:"Your 14-day trial includes full access to your selected plan. After it ends, your card is charged unless you cancel."},
  ];
  const cv=(v)=>v===true?"✓":v===false?"—":v;
  const cs=(v)=>v===true?{color:"#10B981",fontWeight:700}:v===false?{color:"#D1D5DB"}:{color:"#111827",fontWeight:600};
  return <>
    <section style={{paddingTop:164,paddingBottom:60}}><div style={{maxWidth:1060,margin:"0 auto",padding:"0 36px",textAlign:"center"}}>
      <R><p className="dsp" style={{fontSize:13,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#4F46E5",marginBottom:10}}>Pricing</p>
        <h1 className="dsp" style={{fontSize:"clamp(36px,5vw,56px)",fontWeight:800,letterSpacing:"-0.035em",lineHeight:1.08,marginBottom:16}}>Simple, transparent pricing.</h1>
        <p style={{fontSize:18,color:"#6B7280",maxWidth:480,margin:"0 auto 8px"}}>Per location, per month. Every plan includes a 14-day free trial.</p></R>
      <R d={0.08}><div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginTop:32,marginBottom:48}}>
        <span style={{fontSize:14,fontWeight:annual?400:600,color:annual?"#9CA3AF":"#111827"}}>Monthly</span>
        <button onClick={()=>setAnnual(!annual)} style={{width:48,height:26,borderRadius:13,border:"none",cursor:"pointer",padding:3,background:annual?"#4F46E5":"#D1D5DB",display:"flex",alignItems:"center"}}><div style={{width:20,height:20,borderRadius:"50%",background:"#fff",boxShadow:"0 1px 3px rgba(0,0,0,0.15)",transform:annual?"translateX(22px)":"translateX(0)",transition:"0.3s"}}/></button>
        <span style={{fontSize:14,fontWeight:annual?600:400,color:annual?"#111827":"#9CA3AF"}}>Annual</span>
        {annual&&<span style={{padding:"4px 10px",borderRadius:6,background:"rgba(5,150,105,0.08)",color:"#059669",fontSize:12,fontWeight:600}}>Save 10%</span>}
      </div></R>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginBottom:16}}>{PLANS.map((plan,i)=><R key={i} d={i*0.06}><div className="lift" style={{borderRadius:20,padding:28,height:"100%",display:"flex",flexDirection:"column",background:plan.pop?"#111827":"#fff",border:plan.pop?"2px solid #4F46E5":"1px solid rgba(0,0,0,0.06)",position:"relative"}}>
        {plan.pop&&<div style={{position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",padding:"5px 16px",borderRadius:100,background:"linear-gradient(135deg,#4F46E5,#7C3AED)",color:"#fff",fontSize:11,fontWeight:700}}>MOST POPULAR</div>}
        <h3 className="dsp" style={{fontSize:20,fontWeight:700,color:plan.pop?"#fff":"#111827",marginBottom:2}}>{plan.name}</h3>
        <p style={{fontSize:13,color:plan.pop?"rgba(255,255,255,0.4)":"#9CA3AF",marginBottom:4}}>{plan.desc}</p>
        <p style={{fontSize:12,fontWeight:600,color:plan.pop?"rgba(255,255,255,0.3)":"#9CA3AF",marginBottom:18}}>{plan.locs}</p>
        <span className="dsp" style={{fontSize:44,fontWeight:800,color:plan.pop?"#fff":"#111827",letterSpacing:"-0.03em",lineHeight:1}}>${annual?plan.a:plan.m}</span>
        <span style={{fontSize:13,color:plan.pop?"rgba(255,255,255,0.3)":"#9CA3AF"}}>{plan.per}</span>
        <a href="#" style={{display:"block",textAlign:"center",padding:"13px 20px",borderRadius:11,fontSize:14,fontWeight:600,textDecoration:"none",margin:"20px 0 24px",...(plan.pop?{background:"#4F46E5",color:"#fff"}:{background:"#111827",color:"#fff"})}}>Start free trial</a>
        {plan.items.map((item,j)=><div key={j} style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}><Ck c={plan.pop?"rgba(255,255,255,0.35)":"#D1D5DB"}/><span style={{fontSize:13,color:plan.pop?"rgba(255,255,255,0.6)":"#6B7280"}}>{item}</span></div>)}
      </div></R>)}</div>
      <R d={0.2}><div style={{borderRadius:16,border:"1px solid rgba(0,0,0,0.06)",background:"#fff",padding:"24px 32px",display:"flex",alignItems:"center",justifyContent:"space-between"}}><div style={{textAlign:"left"}}><h3 className="dsp" style={{fontSize:18,fontWeight:700,marginBottom:2}}>Enterprise</h3><p style={{fontSize:13,color:"#9CA3AF"}}>10+ locations · All 4 products · Multi-FSM · Custom AI training · Dedicated account manager</p></div><a href="#" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"12px 24px",borderRadius:10,border:"1px solid #D1D5DB",fontSize:14,fontWeight:600,color:"#374151",textDecoration:"none",whiteSpace:"nowrap"}}>Contact sales <Arr/></a></div></R>
    </div></section>

    {/* Feature comparison table */}
    <section style={{padding:"80px 0",borderTop:"1px solid rgba(0,0,0,0.05)"}}><div style={{maxWidth:960,margin:"0 auto",padding:"0 36px"}}>
      <R><h2 className="dsp" style={{fontSize:"clamp(24px,3vw,36px)",fontWeight:800,letterSpacing:"-0.02em",textAlign:"center",marginBottom:48}}>Compare every feature</h2></R>
      <R d={0.08}><div style={{borderRadius:20,border:"1px solid rgba(0,0,0,0.06)",background:"#fff",overflow:"hidden"}}>
        {/* Header */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 120px 120px 120px",borderBottom:"1px solid rgba(0,0,0,0.06)",padding:"16px 24px",background:"#F9FAFB"}}>
          <div style={{fontSize:13,fontWeight:600,color:"#9CA3AF"}}>Feature</div>
          {["Starter","Growth","Pro"].map((n,i)=><div key={i} style={{textAlign:"center",fontSize:13,fontWeight:700,color:i===1?"#4F46E5":"#111827"}}>{n}</div>)}
        </div>
        {CMP.map((cat,ci)=><div key={ci}>
          <div style={{padding:"12px 24px",background:"#F9FAFB",borderBottom:"1px solid rgba(0,0,0,0.04)",borderTop:ci>0?"1px solid rgba(0,0,0,0.04)":"none"}}><span className="dsp" style={{fontSize:13,fontWeight:700,color:"#4F46E5"}}>{cat.cat}</span></div>
          {cat.rows.map((row,ri)=><div key={ri} style={{display:"grid",gridTemplateColumns:"1fr 120px 120px 120px",padding:"12px 24px",borderBottom:"1px solid rgba(0,0,0,0.03)",fontSize:13}}>
            <span style={{color:"#4B5563"}}>{row.f}</span>
            <span style={{textAlign:"center",...cs(row.s)}}>{cv(row.s)}</span>
            <span style={{textAlign:"center",...cs(row.g)}}>{cv(row.g)}</span>
            <span style={{textAlign:"center",...cs(row.p)}}>{cv(row.p)}</span>
          </div>)}
        </div>)}
      </div></R>
    </div></section>

    {/* Add-ons */}
    <section style={{padding:"80px 0"}}><div style={{maxWidth:960,margin:"0 auto",padding:"0 36px"}}>
      <R><h2 className="dsp" style={{fontSize:"clamp(24px,3vw,36px)",fontWeight:800,letterSpacing:"-0.02em",textAlign:"center",marginBottom:12}}>Available add-ons</h2>
        <p style={{fontSize:16,color:"#6B7280",textAlign:"center",maxWidth:460,margin:"0 auto 40px"}}>Extend your plan with additional capabilities as your business grows.</p></R>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
        {[{icon:"📍",title:"Additional Locations",desc:"Add more locations beyond your plan limit. Same per-location pricing applies.",price:"Same rate/loc"},{icon:"🧠",title:"Custom AI Training",desc:"We train your AI agents on your specific business processes, FAQs, and customer handling preferences.",price:"One-time setup"},{icon:"📞",title:"Dedicated Phone Numbers",desc:"Additional Twilio phone numbers for specific campaigns, locations, or use cases beyond the included lines.",price:"$15/number/mo"},{icon:"📊",title:"White-Label Reports",desc:"Branded PDF reports you can share with stakeholders, investors, or franchise owners.",price:"Included in Pro"},{icon:"🔗",title:"Multi-FSM Support",desc:"Connect additional field service management platforms beyond Housecall Pro. ServiceTitan, Jobber, and more.",price:"Enterprise only"},{icon:"🎯",title:"Priority Onboarding",desc:"Dedicated onboarding specialist walks your entire team through setup, customization, and best practices.",price:"Included in Pro"}].map((a,i)=><R key={i} d={i*0.05}><div style={{padding:"24px",borderRadius:16,border:"1px solid rgba(0,0,0,0.06)",background:"#fff",height:"100%"}}>
          <div style={{fontSize:24,marginBottom:12}}>{a.icon}</div>
          <h3 className="dsp" style={{fontSize:16,fontWeight:700,marginBottom:6}}>{a.title}</h3>
          <p style={{fontSize:13,color:"#6B7280",lineHeight:1.65,marginBottom:12}}>{a.desc}</p>
          <span style={{fontSize:12,fontWeight:600,color:"#4F46E5"}}>{a.price}</span>
        </div></R>)}
      </div>
    </div></section>

    {/* Pricing FAQ */}
    <section style={{padding:"80px 0",borderTop:"1px solid rgba(0,0,0,0.05)",background:"#F9FAFB"}}><div style={{maxWidth:720,margin:"0 auto",padding:"0 36px"}}>
      <R><h2 className="dsp" style={{fontSize:"clamp(24px,3vw,36px)",fontWeight:800,letterSpacing:"-0.02em",textAlign:"center",marginBottom:40}}>Pricing questions</h2></R>
      <div style={{borderRadius:16,overflow:"hidden",border:"1px solid rgba(0,0,0,0.06)",background:"#fff"}}>{pFaqs.map((f,i)=><div key={i} style={{borderBottom:i<pFaqs.length-1?"1px solid rgba(0,0,0,0.05)":"none"}}><button onClick={()=>setFaqOpen(faqOpen===i?null:i)} style={{width:"100%",padding:"20px 24px",background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,textAlign:"left"}}><span style={{fontSize:15,fontWeight:600}}>{f.q}</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{flexShrink:0,transition:"transform 0.3s",transform:faqOpen===i?"rotate(45deg)":"rotate(0)"}}><path d="M8 3V13M3 8H13" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/></svg></button><div className="faq-b" style={{maxHeight:faqOpen===i?200:0,opacity:faqOpen===i?1:0}}><p style={{padding:"0 24px 20px",fontSize:14,lineHeight:1.75,color:"#6B7280"}}>{f.a}</p></div></div>)}</div>
    </div></section>

    {/* CTA */}
    <section style={{padding:"80px 0",background:"#111827"}}><div style={{maxWidth:640,margin:"0 auto",padding:"0 36px",textAlign:"center"}}><R><h2 className="dsp" style={{fontSize:"clamp(28px,4vw,44px)",fontWeight:800,letterSpacing:"-0.03em",color:"#fff",marginBottom:16}}>Start your 14-day free trial</h2><p style={{fontSize:16,color:"rgba(255,255,255,0.4)",marginBottom:32}}>No credit card required. Full access to your selected plan.</p><a href="#" style={{display:"inline-flex",alignItems:"center",gap:10,background:"#4F46E5",color:"#fff",fontSize:16,fontWeight:600,padding:"16px 32px",borderRadius:12,textDecoration:"none"}}>Get started <Arr/></a></R></div></section>
  </>;
}

// Slider component (must be outside page components for stable identity)
function Sl({label,value,set,min,max,step,pre,suf,color}){
  return <div style={{marginBottom:20}}>
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}><span style={{fontSize:13,fontWeight:500,color:"#374151"}}>{label}</span><span className="dsp" style={{fontSize:15,fontWeight:700,color:color||"#111827"}}>{pre||""}{value}{suf||""}</span></div>
    <input type="range" min={min} max={max} step={step||1} value={value} onChange={e=>set(Number(e.target.value))}/>
    <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"#9CA3AF",marginTop:3}}><span>{pre||""}{min}{suf||""}</span><span>{pre||""}{max}{suf||""}</span></div>
  </div>;
}

// ═══ ROI CALCULATOR PAGE ═══
function ROIPage(){
  const[techs,setTechs]=useState(5);const[jpd,setJpd]=useState(4);const[tix,setTix]=useState(350);
  const[ticketLift,setTicketLift]=useState(35);
  const[ambRate,setAmbRate]=useState(15);const[refPerAmb,setRefPerAmb]=useState(1);
  const[leadInc,setLeadInc]=useState(15);
  const[unsoldRate,setUnsoldRate]=useState(30);const[recRate,setRecRate]=useState(15);
  const[lapsed,setLapsed]=useState(5);const[memVal,setMemVal]=useState(150);
  const mj=techs*jpd*22;const bt=Math.round(tix*(1+ticketLift/100));
  const rSales=Math.round(mj*tix*(ticketLift/100));
  const mAmb=Math.round(mj*(ambRate/100));const mRef=Math.round(mAmb*refPerAmb);const rRef=Math.round(mRef*bt);
  const aLeads=Math.round(mj*(leadInc/100));const rRev=Math.round(aLeads*bt);
  const recEst=Math.round(mj*(unsoldRate/100)*(recRate/100));const rSup=Math.round(recEst*tix)+Math.round(lapsed*memVal);
  const total=rSales+rRef+rRev+rSup;
  return <>
    <section style={{paddingTop:164,paddingBottom:40}}><div style={{maxWidth:1160,margin:"0 auto",padding:"0 36px",textAlign:"center"}}>
      <R><p className="dsp" style={{fontSize:13,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#4F46E5",marginBottom:10}}>ROI Calculator</p>
        <h1 className="dsp" style={{fontSize:"clamp(36px,5vw,52px)",fontWeight:800,letterSpacing:"-0.035em",lineHeight:1.08,marginBottom:16}}>Your revenue, calculated.</h1>
        <p style={{fontSize:17,color:"#6B7280",maxWidth:520,margin:"0 auto"}}>Adjust every lever for each product to see exactly how much additional revenue SalesBooster can generate for your business.</p></R>
    </div></section>

    <section style={{padding:"40px 0 100px"}}><div style={{maxWidth:1160,margin:"0 auto",padding:"0 36px",display:"grid",gridTemplateColumns:"1fr 380px",gap:32}}>
      <div style={{display:"flex",flexDirection:"column",gap:16}}>
        {/* Business */}
        <R><div style={{background:"#F9FAFB",borderRadius:20,border:"1px solid rgba(0,0,0,0.06)",padding:"28px 28px 20px"}}>
          <h3 className="dsp" style={{fontSize:16,fontWeight:700,marginBottom:24,display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:18}}>🏢</span>Your Business</h3>
          <Sl label="Technicians" value={techs} set={setTechs} min={1} max={30}/>
          <Sl label="Jobs per tech / day" value={jpd} set={setJpd} min={1} max={10}/>
          <Sl label="Current avg. ticket" value={tix} set={setTix} min={100} max={2000} step={25} pre="$"/>
          <div style={{padding:"12px 16px",borderRadius:10,background:"rgba(0,0,0,0.03)",fontSize:13,color:"#6B7280"}}><strong style={{color:"#111827"}}>{mj.toLocaleString()}</strong> jobs/month · <strong style={{color:"#111827"}}>${(mj*tix).toLocaleString()}</strong> current revenue</div>
        </div></R>
        {/* Sales */}
        <R d={0.05}><div style={{borderRadius:20,border:"1px solid #10B98120",padding:"24px 28px",background:"#10B98105"}}>
          <h3 className="dsp" style={{fontSize:16,fontWeight:700,marginBottom:16,display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:18}}>📊</span>Sales Booster</h3>
          <Sl label="Avg. ticket increase" value={ticketLift} set={setTicketLift} min={10} max={80} suf="%" color="#10B981"/>
          <div style={{display:"flex",justifyContent:"space-between",padding:"12px 0 0",borderTop:"1px solid #10B98115",fontSize:13,color:"#6B7280"}}><span>New avg. ticket: <strong style={{color:"#111827"}}>${bt}</strong></span><span>Revenue: <strong style={{color:"#10B981"}}>${rSales.toLocaleString()}/mo</strong></span></div>
        </div></R>
        {/* Referral */}
        <R d={0.1}><div style={{borderRadius:20,border:"1px solid #3B82F620",padding:"24px 28px",background:"#3B82F605"}}>
          <h3 className="dsp" style={{fontSize:16,fontWeight:700,marginBottom:16,display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:18}}>🤝</span>Referral Booster</h3>
          <Sl label="Customers who become ambassadors" value={ambRate} set={setAmbRate} min={5} max={40} suf="%" color="#3B82F6"/>
          <Sl label="Referrals per ambassador / month" value={refPerAmb} set={setRefPerAmb} min={0.5} max={5} step={0.5} color="#3B82F6"/>
          <div style={{display:"flex",justifyContent:"space-between",padding:"12px 0 0",borderTop:"1px solid #3B82F615",fontSize:13,color:"#6B7280"}}><span><strong style={{color:"#111827"}}>{mAmb}</strong> ambassadors → <strong style={{color:"#111827"}}>{mRef}</strong> jobs</span><span>Revenue: <strong style={{color:"#3B82F6"}}>${rRef.toLocaleString()}/mo</strong></span></div>
        </div></R>
        {/* Review */}
        <R d={0.15}><div style={{borderRadius:20,border:"1px solid #F59E0B20",padding:"24px 28px",background:"#F59E0B05"}}>
          <h3 className="dsp" style={{fontSize:16,fontWeight:700,marginBottom:16,display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:18}}>⭐</span>Review Booster</h3>
          <Sl label="Increase in inbound leads from ranking" value={leadInc} set={setLeadInc} min={5} max={50} suf="%" color="#D97706"/>
          <div style={{display:"flex",justifyContent:"space-between",padding:"12px 0 0",borderTop:"1px solid #F59E0B15",fontSize:13,color:"#6B7280"}}><span><strong style={{color:"#111827"}}>{aLeads}</strong> additional jobs/month</span><span>Revenue: <strong style={{color:"#D97706"}}>${rRev.toLocaleString()}/mo</strong></span></div>
        </div></R>
        {/* Support */}
        <R d={0.2}><div style={{borderRadius:20,border:"1px solid #8B5CF620",padding:"24px 28px",background:"#8B5CF605"}}>
          <h3 className="dsp" style={{fontSize:16,fontWeight:700,marginBottom:16,display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:18}}>🤖</span>Support Booster</h3>
          <Sl label="Estimates that go unsold" value={unsoldRate} set={setUnsoldRate} min={10} max={60} suf="%" color="#8B5CF6"/>
          <Sl label="Recovery rate on unsold" value={recRate} set={setRecRate} min={5} max={35} suf="%" color="#8B5CF6"/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <div><div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}><span style={{fontSize:13,fontWeight:500,color:"#374151"}}>Lapsed memberships/mo</span><span className="dsp" style={{fontSize:15,fontWeight:700,color:"#8B5CF6"}}>{lapsed}</span></div><input type="range" min={0} max={30} value={lapsed} onChange={e=>setLapsed(Number(e.target.value))}/></div>
            <div><div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}><span style={{fontSize:13,fontWeight:500,color:"#374151"}}>Avg. membership value</span><span className="dsp" style={{fontSize:15,fontWeight:700,color:"#8B5CF6"}}>${memVal}</span></div><input type="range" min={50} max={500} step={10} value={memVal} onChange={e=>setMemVal(Number(e.target.value))}/></div>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",padding:"12px 0 0",borderTop:"1px solid #8B5CF615",marginTop:16,fontSize:13,color:"#6B7280"}}><span><strong style={{color:"#111827"}}>{recEst}</strong> estimates + <strong style={{color:"#111827"}}>{lapsed}</strong> memberships</span><span>Revenue: <strong style={{color:"#8B5CF6"}}>${rSup.toLocaleString()}/mo</strong></span></div>
        </div></R>
      </div>
      {/* Sticky results */}
      <div style={{position:"sticky",top:88,alignSelf:"start"}}>
        <R d={0.1}><div style={{display:"flex",flexDirection:"column",gap:12}}>
          <div style={{padding:"28px 24px 22px",borderRadius:20,background:"#111827",color:"#fff"}}>
            <div style={{fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.25)",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:8}}>Additional monthly revenue</div>
            <div className="dsp" style={{fontSize:48,fontWeight:800,letterSpacing:"-0.03em",lineHeight:1}}>${total.toLocaleString()}</div>
            <div style={{fontSize:13,color:"rgba(255,255,255,0.3)",marginTop:6}}>per month across all four products</div>
            <div style={{marginTop:14,padding:"10px 14px",borderRadius:10,background:"rgba(255,255,255,0.05)",fontSize:12,color:"rgba(255,255,255,0.4)"}}>That's <strong style={{color:"#10B981"}}>${(total*12).toLocaleString()}</strong> additional per year</div>
          </div>
          {[{n:"Sales Booster",c:"#10B981",v:rSales,s:`$${tix} → $${bt} ticket`},{n:"Referral Booster",c:"#3B82F6",v:rRef,s:`${mRef} new jobs`},{n:"Review Booster",c:"#F59E0B",v:rRev,s:`${aLeads} extra leads`},{n:"Support Booster",c:"#8B5CF6",v:rSup,s:`${recEst} est. + ${lapsed} memb.`}].map((r,i)=>{const pct=total>0?Math.round((r.v/total)*100):0;return <div key={i} style={{padding:"14px 18px",borderRadius:14,background:"#F9FAFB",border:"1px solid rgba(0,0,0,0.06)"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}><div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:10,height:10,borderRadius:"50%",background:r.c}}/><span style={{fontSize:13,fontWeight:600}}>{r.n}</span></div><span className="dsp" style={{fontSize:18,fontWeight:800,color:r.c}}>${r.v.toLocaleString()}</span></div>
            <div style={{height:4,borderRadius:2,background:"#E5E7EB",overflow:"hidden",marginBottom:6}}><div style={{height:"100%",borderRadius:2,background:r.c,width:`${pct}%`,transition:"width 0.4s"}}/></div>
            <div style={{fontSize:11,color:"#9CA3AF"}}>{r.s}</div>
          </div>})}
          <a href="#" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:14,borderRadius:12,background:"#4F46E5",color:"#fff",fontSize:15,fontWeight:600,textDecoration:"none",marginTop:4,boxShadow:"0 2px 12px rgba(79,70,229,0.25)"}}>Start capturing this revenue <Arr/></a>
        </div></R>
      </div>
    </div></section>
  </>;
}

// ═══ ABOUT PAGE ═══
function AboutPage({setPage}){
  return <>
    <section style={{paddingTop:164,paddingBottom:80}}><div style={{maxWidth:800,margin:"0 auto",padding:"0 36px",textAlign:"center"}}>
      <R><p className="dsp" style={{fontSize:13,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#4F46E5",marginBottom:10}}>About SalesBooster</p>
        <h1 className="dsp" style={{fontSize:"clamp(36px,5vw,56px)",fontWeight:800,letterSpacing:"-0.035em",lineHeight:1.08,marginBottom:20}}>We exist to help home service businesses<br/><span style={{color:"#4F46E5"}}>capture every dollar they earn.</span></h1>
        <p style={{fontSize:18,color:"#6B7280",lineHeight:1.8,maxWidth:600,margin:"0 auto"}}>Home service businesses lose tens of thousands of dollars every month to manual processes, missed follow-ups, and untracked referrals. We built SalesBooster to close those gaps — automatically.</p></R>
    </div></section>

    {/* The Problem */}
    <section style={{padding:"80px 0",borderTop:"1px solid rgba(0,0,0,0.05)"}}><div style={{maxWidth:1060,margin:"0 auto",padding:"0 36px"}}>
      <R><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center"}}>
        <div>
          <p className="dsp" style={{fontSize:13,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#EF4444",marginBottom:10}}>The Problem</p>
          <h2 className="dsp" style={{fontSize:"clamp(24px,3vw,36px)",fontWeight:800,letterSpacing:"-0.02em",lineHeight:1.15,marginBottom:16}}>The average HVAC company leaves $240K on the table every year.</h2>
          <p style={{fontSize:16,color:"#6B7280",lineHeight:1.8}}>Single-price quotes instead of tiered options. Zero follow-up on unsold estimates. No review system. No referral tracking. Manual collections. Lapsed memberships that silently vanish. These aren't edge cases — they're the industry standard.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          {[{n:"$47K",l:"in unsold estimates gather dust per quarter",c:"#EF4444"},{n:"72%",l:"of customers never asked for a Google review",c:"#F59E0B"},{n:"0",l:"referrals tracked by the average home service company",c:"#3B82F6"},{n:"38%",l:"of membership renewals lapse due to no outreach",c:"#8B5CF6"}].map((s,i)=><div key={i} style={{padding:20,borderRadius:16,background:"#fff",border:"1px solid rgba(0,0,0,0.06)"}}>
            <div className="dsp" style={{fontSize:28,fontWeight:800,color:s.c,marginBottom:6}}>{s.n}</div>
            <div style={{fontSize:13,color:"#6B7280",lineHeight:1.5}}>{s.l}</div>
          </div>)}
        </div>
      </div></R>
    </div></section>

    {/* Our Approach */}
    <section style={{padding:"80px 0",background:"#111827"}}><div style={{maxWidth:1060,margin:"0 auto",padding:"0 36px"}}>
      <R><p className="dsp" style={{fontSize:13,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"rgba(255,255,255,0.2)",marginBottom:10}}>Our Approach</p>
        <h2 className="dsp" style={{fontSize:"clamp(24px,3vw,36px)",fontWeight:800,letterSpacing:"-0.02em",lineHeight:1.15,color:"#fff",marginBottom:48}}>Four products. One integrated system.</h2></R>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
        {PRODUCTS.map((p,i)=><R key={i} d={i*0.08}><div style={{padding:"28px 20px",borderRadius:18,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",textAlign:"center",height:"100%"}}>
          <div style={{width:48,height:48,borderRadius:14,background:p.color+"15",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",fontSize:24}}>{p.icon}</div>
          <h3 className="dsp" style={{fontSize:16,fontWeight:700,color:"#fff",marginBottom:6}}>{p.name}</h3>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.35)",lineHeight:1.6}}>{p.short}</p>
        </div></R>)}
      </div>
      <R d={0.3}><p style={{fontSize:15,color:"rgba(255,255,255,0.3)",textAlign:"center",marginTop:32,maxWidth:520,margin:"32px auto 0"}}>Each product works independently but compounds when used together. Most customers start with one and add the rest within 90 days.</p></R>
    </div></section>

    {/* Values */}
    <section style={{padding:"80px 0"}}><div style={{maxWidth:1060,margin:"0 auto",padding:"0 36px"}}>
      <R><h2 className="dsp" style={{fontSize:"clamp(24px,3vw,36px)",fontWeight:800,letterSpacing:"-0.02em",textAlign:"center",marginBottom:48}}>What we believe</h2></R>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
        {[{icon:"⚡",title:"Automation over headcount",desc:"You shouldn't need to hire a marketing team to follow up on estimates, ask for reviews, or track referrals. AI does it better, faster, and 24/7."},{icon:"📊",title:"Attribution over guessing",desc:"Every referral, every review, every recovered estimate — tracked to the source. If you can't measure it, you can't grow it."},{icon:"🤝",title:"Built for operators, not IT",desc:"No code, no consultants, no six-month implementations. Connect Housecall Pro and you're live in 48 hours."},{icon:"🛡️",title:"Compliance built in",desc:"TCPA compliance, opt-out handling, quiet hours, audit trails — all automatic. We take regulatory requirements as seriously as you do."},{icon:"💰",title:"ROI or nothing",desc:"We price at $199/location because most businesses pay for the platform with a single upsold job. If it doesn't pay for itself, we haven't done our job."},{icon:"🔄",title:"Products that compound",desc:"Sales Booster increases tickets. Review Booster drives leads. Referral Booster adds customers. Support Booster recovers revenue. Together, they multiply."}].map((v,i)=><R key={i} d={i*0.06}><div style={{padding:"24px",borderRadius:16,border:"1px solid rgba(0,0,0,0.06)",background:"#fff",height:"100%"}}>
          <div style={{fontSize:24,marginBottom:12}}>{v.icon}</div>
          <h3 className="dsp" style={{fontSize:16,fontWeight:700,marginBottom:6}}>{v.title}</h3>
          <p style={{fontSize:14,color:"#6B7280",lineHeight:1.7}}>{v.desc}</p>
        </div></R>)}
      </div>
    </div></section>

    {/* CTA */}
    <section style={{padding:"80px 0",background:"#F9FAFB",borderTop:"1px solid rgba(0,0,0,0.05)"}}><div style={{maxWidth:640,margin:"0 auto",padding:"0 36px",textAlign:"center"}}>
      <R><h2 className="dsp" style={{fontSize:"clamp(28px,4vw,44px)",fontWeight:800,letterSpacing:"-0.03em",marginBottom:16}}>Ready to stop leaving money on the table?</h2>
        <p style={{fontSize:16,color:"#6B7280",marginBottom:32}}>Join 340+ home service businesses already using SalesBooster.</p>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12}}>
          <a href="#" style={{display:"inline-flex",alignItems:"center",gap:10,background:"#4F46E5",color:"#fff",fontSize:16,fontWeight:600,padding:"16px 32px",borderRadius:12,textDecoration:"none"}}>Start free trial <Arr/></a>
          <button onClick={()=>setPage("pricing")} style={{fontSize:15,fontWeight:500,color:"#6B7280",background:"none",border:"none",cursor:"pointer",padding:"16px"}}>View pricing →</button>
        </div></R>
    </div></section>
  </>;
}

// ═══ INTEGRATIONS PAGE ═══
function IntegrationsPage({setPage}){
  return <>
    <section style={{paddingTop:164,paddingBottom:80}}><div style={{maxWidth:800,margin:"0 auto",padding:"0 36px",textAlign:"center"}}>
      <R><p className="dsp" style={{fontSize:13,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#4F46E5",marginBottom:10}}>Integrations</p>
        <h1 className="dsp" style={{fontSize:"clamp(36px,5vw,52px)",fontWeight:800,letterSpacing:"-0.035em",lineHeight:1.08,marginBottom:16}}>Connects to the tools<br/>you already use.</h1>
        <p style={{fontSize:18,color:"#6B7280",maxWidth:520,margin:"0 auto"}}>SalesBooster syncs with your field service management software — your pricebook, customers, jobs, estimates, and invoices stay in perfect sync.</p></R>
    </div></section>

    {/* Housecall Pro — Primary */}
    <section style={{padding:"60px 0 80px"}}><div style={{maxWidth:1060,margin:"0 auto",padding:"0 36px"}}>
      <R><div style={{borderRadius:24,background:"#fff",border:"2px solid rgba(79,70,229,0.12)",padding:"48px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center"}}>
        <div>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 14px",borderRadius:100,background:"#10B98108",border:"1px solid #10B98115",marginBottom:20}}><div style={{width:8,height:8,borderRadius:"50%",background:"#10B981"}}/><span style={{fontSize:12,fontWeight:600,color:"#10B981"}}>Live integration</span></div>
          <h2 className="dsp" style={{fontSize:"clamp(28px,3.5vw,40px)",fontWeight:800,letterSpacing:"-0.03em",lineHeight:1.1,marginBottom:16}}>Housecall Pro</h2>
          <p style={{fontSize:16,color:"#6B7280",lineHeight:1.75,marginBottom:24}}>Our deepest integration. SalesBooster connects directly to your Housecall Pro account on the MAX plan via API — syncing your pricebook, customer database, job history, estimates, and invoices in real time.</p>
          <p style={{fontSize:14,color:"#6B7280",lineHeight:1.75,marginBottom:28}}>Every product in SalesBooster is built around this connection. When a job completes in HCP, Review Booster sends a sentiment check. When an estimate is sent, Support Booster schedules follow-up. When an invoice is paid, Referral Booster triggers a reward. It all flows through one integration.</p>
          <a href="#" style={{display:"inline-flex",alignItems:"center",gap:8,background:"#4F46E5",color:"#fff",fontSize:14,fontWeight:600,padding:"12px 24px",borderRadius:10,textDecoration:"none"}}>Start free trial <Arr/></a>
        </div>
        <div>
          <div style={{borderRadius:18,background:"#F9FAFB",border:"1px solid rgba(0,0,0,0.06)",padding:"28px",marginBottom:16}}>
            <h3 className="dsp" style={{fontSize:15,fontWeight:700,marginBottom:16}}>What syncs</h3>
            {[{icon:"📖",label:"Pricebook",desc:"Services, materials, pricing — all synced to generate GBB proposals"},{icon:"👥",label:"Customers",desc:"Customer records, contact info, and service history"},{icon:"📋",label:"Jobs",desc:"Job status, assignments, technicians, and completion data"},{icon:"📊",label:"Estimates",desc:"Multi-option estimates pushed directly from SalesBooster"},{icon:"💰",label:"Invoices",desc:"Payment status, amounts, and due dates for AR collection"},{icon:"🔔",label:"Webhooks",desc:"Real-time events: job completed, estimate sent, invoice paid, and more"}].map((s,i)=><div key={i} style={{display:"flex",alignItems:"flex-start",gap:12,padding:"10px 0",borderBottom:i<5?"1px solid rgba(0,0,0,0.04)":"none"}}>
              <div style={{width:32,height:32,borderRadius:8,background:"#4F46E510",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>{s.icon}</div>
              <div><div style={{fontSize:13,fontWeight:600,color:"#111827"}}>{s.label}</div><div style={{fontSize:12,color:"#9CA3AF"}}>{s.desc}</div></div>
            </div>)}
          </div>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            {["Bidirectional sync","Real-time webhooks","Encrypted API keys"].map((t,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:4,fontSize:12,color:"#6B7280"}}><Ck c="#10B981" s={8}/>{t}</div>)}
          </div>
        </div>
      </div></R>
    </div></section>

    {/* Coming Soon */}
    <section style={{padding:"80px 0",borderTop:"1px solid rgba(0,0,0,0.05)"}}><div style={{maxWidth:1060,margin:"0 auto",padding:"0 36px"}}>
      <R><h2 className="dsp" style={{fontSize:"clamp(24px,3vw,36px)",fontWeight:800,letterSpacing:"-0.02em",textAlign:"center",marginBottom:12}}>Coming soon</h2>
        <p style={{fontSize:16,color:"#6B7280",textAlign:"center",maxWidth:460,margin:"0 auto 48px"}}>We're expanding to the two other most-requested field service platforms.</p></R>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
        {[{name:"ServiceTitan",desc:"Enterprise-grade integration for ServiceTitan shops. Full pricebook sync, customer matching, job and invoice webhooks, and multi-location support. Designed for large operations with complex workflows.",features:["Pricebook sync","Customer matching","Job & invoice webhooks","Multi-entity support"],status:"In development",eta:"Q3 2026"},{name:"Jobber",desc:"Complete integration for Jobber-powered businesses. Quote sync, client database, job tracking, and invoice management — all connected to every SalesBooster product.",features:["Quote sync","Client database","Job tracking","Invoice management"],status:"Planned",eta:"Q4 2026"}].map((int,i)=><R key={i} d={i*0.1}><div style={{borderRadius:20,border:"1px solid rgba(0,0,0,0.06)",background:"#fff",padding:"36px",height:"100%"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
            <h3 className="dsp" style={{fontSize:22,fontWeight:800}}>{int.name}</h3>
            <span style={{padding:"5px 12px",borderRadius:100,background:i===0?"rgba(79,70,229,0.06)":"rgba(0,0,0,0.04)",color:i===0?"#4F46E5":"#9CA3AF",fontSize:12,fontWeight:600}}>{int.status}</span>
          </div>
          <p style={{fontSize:14,color:"#6B7280",lineHeight:1.7,marginBottom:20}}>{int.desc}</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16}}>
            {int.features.map((f,j)=><div key={j} style={{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#6B7280"}}><Ck c="#D1D5DB" s={8}/>{f}</div>)}
          </div>
          <div style={{padding:"12px 16px",borderRadius:10,background:"#F9FAFB",fontSize:13,color:"#9CA3AF"}}>Expected: <strong style={{color:"#111827"}}>{int.eta}</strong></div>
        </div></R>)}
      </div>
    </div></section>

    {/* How integration works */}
    <section style={{padding:"80px 0",background:"#111827"}}><div style={{maxWidth:960,margin:"0 auto",padding:"0 36px"}}>
      <R><h2 className="dsp" style={{fontSize:"clamp(24px,3vw,36px)",fontWeight:800,letterSpacing:"-0.02em",textAlign:"center",color:"#fff",marginBottom:48}}>Setup takes under 5 minutes</h2></R>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
        {[{n:"01",t:"Connect HCP",d:"Enter your Housecall Pro API key. We encrypt it with AES-256-GCM."},{n:"02",t:"Pricebook syncs",d:"Your services, materials, and pricing pull in automatically."},{n:"03",t:"Configure products",d:"Choose which Booster products to activate. Set your preferences."},{n:"04",t:"You're live",d:"First job completes → SalesBooster takes over. Under 48 hours total."}].map((s,i)=><R key={i} d={i*0.08}><div style={{padding:"24px 20px",borderRadius:16,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",textAlign:"center"}}>
          <div className="dsp" style={{fontSize:28,fontWeight:800,color:"#4F46E5",marginBottom:12}}>{s.n}</div>
          <h4 className="dsp" style={{fontSize:15,fontWeight:700,color:"#fff",marginBottom:6}}>{s.t}</h4>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.35)",lineHeight:1.6}}>{s.d}</p>
        </div></R>)}
      </div>
    </div></section>

    {/* CTA */}
    <section style={{padding:"80px 0"}}><div style={{maxWidth:640,margin:"0 auto",padding:"0 36px",textAlign:"center"}}>
      <R><h2 className="dsp" style={{fontSize:"clamp(28px,4vw,40px)",fontWeight:800,letterSpacing:"-0.03em",marginBottom:16}}>Ready to connect?</h2>
        <p style={{fontSize:16,color:"#6B7280",marginBottom:32}}>Start your 14-day free trial. Your pricebook syncs in the first 30 seconds.</p>
        <a href="#" style={{display:"inline-flex",alignItems:"center",gap:10,background:"#4F46E5",color:"#fff",fontSize:16,fontWeight:600,padding:"16px 32px",borderRadius:12,textDecoration:"none"}}>Start free trial <Arr/></a></R>
    </div></section>
  </>;
}

// ═══ MAIN APP — Router ═══
export default function App(){
  const[page,setPage]=useState("home");
  const[scrolled,setScrolled]=useState(false);
  const[showSticky,setShowSticky]=useState(false);

  useEffect(()=>{
    const fn=()=>{setScrolled(window.scrollY>30);setShowSticky(window.scrollY>700)};
    window.addEventListener("scroll",fn);return()=>window.removeEventListener("scroll",fn);
  },[]);

  useEffect(()=>{window.scrollTo(0,0)},[page]);

  return <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200;12..96,400;12..96,600;12..96,700;12..96,800&family=Figtree:wght@300;400;500;600;700&display=swap');
      *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
      body{font-family:'Figtree',sans-serif;color:#111827;background:#F9FAFB;-webkit-font-smoothing:antialiased;overflow-x:hidden}
      ::selection{background:#4F46E5;color:#fff}
      .dsp{font-family:'Bricolage Grotesque',sans-serif}
      .lift{transition:transform 0.4s cubic-bezier(0.22,1,0.36,1),box-shadow 0.4s}.lift:hover{transform:translateY(-4px);box-shadow:0 20px 60px rgba(0,0,0,0.07)}
      .faq-b{overflow:hidden;transition:max-height 0.4s cubic-bezier(0.22,1,0.36,1),opacity 0.3s}
      @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
      .mega-e{animation:fadeUp 0.2s ease-out both}
      @keyframes slideUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      .sticky-p{animation:slideUp 0.4s cubic-bezier(0.22,1,0.36,1) both}
      input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:3px;outline:none;background:#E5E7EB}
      input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:#4F46E5;cursor:pointer;box-shadow:0 2px 8px rgba(79,70,229,0.3)}
    `}</style>

    {showSticky&&page==="home"&&<div className="sticky-p" style={{position:"fixed",bottom:28,left:"50%",transform:"translateX(-50%)",zIndex:99,background:"#111827",color:"#fff",padding:"10px 12px 10px 20px",borderRadius:100,display:"flex",alignItems:"center",gap:12,boxShadow:"0 12px 40px rgba(0,0,0,0.18)",fontSize:14,fontWeight:500}}><span style={{opacity:0.7}}>Ready to boost revenue?</span><a href="#" style={{background:"#4F46E5",color:"#fff",padding:"8px 18px",borderRadius:100,fontSize:13,fontWeight:600,textDecoration:"none"}}>Start Free Trial</a></div>}

    <Nav page={page} setPage={setPage} scrolled={scrolled}/>

    <div key={page}>
      {page==="home"&&<HomePage setPage={setPage}/>}
      {page==="sales"&&<SalesPage setPage={setPage}/>}
      {page==="referral"&&<ReferralPage setPage={setPage}/>}
      {page==="review"&&<ReviewPage setPage={setPage}/>}
      {page==="support"&&<SupportPage setPage={setPage}/>}
      {page==="pricing"&&<PricingPage setPage={setPage}/>}
      {page==="roi"&&<ROIPage/>}
      {page==="about"&&<AboutPage setPage={setPage}/>}
      {page==="integrations"&&<IntegrationsPage setPage={setPage}/>}
    </div>

    <Footer setPage={setPage}/>
  </>;
}

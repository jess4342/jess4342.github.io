const {SectionHeading,Badge,BlogPostCard,TimelineEntry,GalleryTile,Callout,Input,TextArea,Button,SocialLink,WindowCard}=window.Jess4342CybersecurityPortfolioDesignSystem_6543ae;
const ICON='https://unpkg.com/pixelarticons@1.8.1/svg/';

function TypewriterHeading({prefix='',text,fontSize='64px',mono=false,uppercase=true}){
const [n,setN]=React.useState(0);
const [phase,setPhase]=React.useState('typing');
React.useEffect(()=>{
let t;
if(phase==='typing'){
if(n<text.length){t=setTimeout(()=>setN(n+1),110);}else{t=setTimeout(()=>setPhase('pause'),1400);}
}else if(phase==='pause'){t=setTimeout(()=>setPhase('deleting'),900);}
else if(phase==='deleting'){
if(n>0){t=setTimeout(()=>setN(n-1),55);}else{t=setTimeout(()=>setPhase('typing'),400);}
}
return ()=>clearTimeout(t);
},[n,phase,text]);
const caretH=parseInt(fontSize)*0.82;
return(<span style={{fontFamily:mono?'var(--font-mono)':'var(--font-display)',fontSize,lineHeight:'var(--lh-tight)',textTransform:uppercase?'uppercase':'none',display:'inline-block'}}>{prefix}{text.slice(0,n)}<span style={{display:'inline-block',width:mono?'11px':'6px',marginLeft:'4px',background:'var(--indigo)',animation:'blink 1s steps(1) infinite',height:caretH+'px',verticalAlign:'-0.12em'}}></span></span>);
}

function PeccyRun({maximized=false,onClose}={}){
const trackRef=React.useRef(null);
const peccyRef=React.useRef(null);
const obsElRefs=React.useRef([]);
const [obsTypes,setObsTypes]=React.useState(['O','L','S']);
React.useEffect(()=>{
const track=trackRef.current,peccy=peccyRef.current;
const TYPE_KEYS=['O','L','J','S','T','I'];
const peccyX=22,peccyW=52,peccyH=52;
let obstacles=[];
const gap=()=>170+Math.random()*190;
let x=track.clientWidth+80;
const initTypes=[];
for(let i=0;i<3;i++){const type=TYPE_KEYS[Math.floor(Math.random()*TYPE_KEYS.length)];initTypes.push(type);obstacles.push({x,type,slot:i,jumped:false});x+=BB[type].w*CELL+gap();}
setObsTypes(initTypes);
let jumping=false,jumpStart=0;const JUMP_MS=640,JUMP_H=50,TRIGGER_X=94;
let raf,last=performance.now();
function frame(now){
const dt=Math.min(32,now-last);last=now;
const speed=0.12;
obstacles.forEach(o=>{o.x-=speed*dt;});
if(obstacles[0].x+BB[obstacles[0].type].w*CELL<-40){
obstacles.shift();
const tail=obstacles[obstacles.length-1];
const newType=TYPE_KEYS[Math.floor(Math.random()*TYPE_KEYS.length)];
const slot=obstacles.length?(tail.slot+1)%3:0;
const newObs={x:tail.x+BB[tail.type].w*CELL+gap(),type:newType,slot,jumped:false};
obstacles.push(newObs);
setObsTypes(prev=>{const next=prev.slice();next[slot]=newType;return next;});
}
if(!jumping){
const next=obstacles.find(o=>!o.jumped && o.x+BB[o.type].w*CELL<=TRIGGER_X);
if(next){jumping=true;jumpStart=now;next.jumped=true;}
}
let y=0;
if(jumping){
const p=Math.min(1,(now-jumpStart)/JUMP_MS);
y=-Math.sin(p*Math.PI)*JUMP_H;
if(p>=1)jumping=false;
}
if(peccy)peccy.style.transform='translateY('+y+'px)';
obstacles.forEach((o)=>{
const el=obsElRefs.current[o.slot];
if(!el)return;
el.style.left=o.x+'px';
});
raf=requestAnimationFrame(frame);
}
raf=requestAnimationFrame(frame);
return ()=>cancelAnimationFrame(raf);
},[]);
return(<WindowCard title="~/peccy-run.sh" onClose={onClose} style={maximized?{height:'100%',display:'flex',flexDirection:'column',background:'transparent'}:undefined} bodyStyle={maximized?{flex:1,display:'flex',flexDirection:'column'}:undefined}>
<div ref={trackRef} style={{position:'relative',height:maximized?'100%':120,flex:maximized?1:undefined,overflow:'hidden'}}>
<div style={{position:'absolute',left:0,right:0,bottom:24,height:0,borderTop:'var(--border-w) dashed var(--ink-faint)'}}></div>
<img ref={peccyRef} src="./assets/peccy-pixel-sm.png" alt="" style={{position:'absolute',left:22,bottom:24,width:52,height:52,pointerEvents:'none'}} />
{[0,1,2].map(i=>(
<TetrisObstacle key={i} type={obsTypes[i]} setRef={el=>obsElRefs.current[i]=el} />
))}
</div>
</WindowCard>);
}
const CELL=9;
const BB={
O:{cells:[[0,0],[1,0],[0,1],[1,1]],w:2,h:2,color:'var(--amber)'},
L:{cells:[[0,0],[0,1],[0,2],[1,2]],w:2,h:3,color:'var(--teal)'},
J:{cells:[[1,0],[1,1],[1,2],[0,2]],w:2,h:3,color:'var(--indigo)'},
S:{cells:[[1,0],[2,0],[0,1],[1,1]],w:3,h:2,color:'var(--teal-deep)'},
T:{cells:[[0,0],[1,0],[2,0],[1,1]],w:3,h:2,color:'var(--indigo-deep)'},
I:{cells:[[0,0],[0,1],[0,2],[0,3]],w:1,h:4,color:'var(--ink)'}
};
function TetrisObstacle({type,setRef}){
const t=BB[type]||BB.O;
return(<div ref={setRef} style={{position:'absolute',bottom:24,width:t.w*CELL,height:t.h*CELL,pointerEvents:'none'}}>
{t.cells.map((c,i)=>(
<div key={i} style={{position:'absolute',left:c[0]*CELL,bottom:c[1]*CELL,width:CELL,height:CELL,background:t.color,border:'1px solid var(--ink)',boxShadow:'inset -2px -2px 0 rgba(0,0,0,.28), inset 2px 2px 0 rgba(255,255,255,.4)'}}></div>
))}
</div>);
}

function TerminalLine({label,labelColor,value,charMs,onDone}){
const [n,setN]=React.useState(0);
React.useEffect(()=>{
let t;
function step(i){
setN(i);
if(i<value.length){t=setTimeout(()=>step(i+1),charMs);}else if(onDone){onDone();}
}
step(0);
return ()=>clearTimeout(t);
},[]);
const done=n>=value.length;
return(<div><span style={{color:labelColor}}>{label}</span> {value.slice(0,n)}{!done?<span style={{display:'inline-block',width:'7px',marginLeft:'2px',background:'var(--teal)',animation:'blink 1s steps(1) infinite',height:'13px',verticalAlign:'-2px'}}></span>:null}</div>);
}
function WhoamiTerminal(){
const LINES=[
{label:'role:',labelColor:'var(--panel-fg-dim)',value:'Cloud Security Consultant'},
{label:'focus:',labelColor:'var(--panel-fg-dim)',value:'IAM, Threat Modeling, Risk Management'},
{label:'cert:',labelColor:'var(--panel-fg-dim)',value:'CISSP, GCIH'},
{label:'status:',labelColor:'var(--indigo)',value:'ONLINE'}
];
const [active,setActive]=React.useState(0);
return(<div style={{fontFamily:'var(--font-mono)',fontSize:'14px',color:'var(--teal)',lineHeight:1.9}}>
{LINES.slice(0,active+1).map((l,i)=><TerminalLine key={i} label={l.label} labelColor={l.labelColor} value={l.value} charMs={16} onDone={()=>setActive(a=>Math.max(a,i+1))} />)}
</div>);
}
function Home({onNavigate}={}){
const heroRef=React.useRef(null);
const [peccyOpen,setPeccyOpen]=React.useState(false);
const onHeroMove=e=>{
const r=heroRef.current.getBoundingClientRect();
heroRef.current.style.setProperty('--hx',((e.clientX-r.left)/r.width*100)+'%');
heroRef.current.style.setProperty('--hy',((e.clientY-r.top)/r.height*100)+'%');
};
return(<div style={{padding:'0 0 60px'}}>
<div ref={heroRef} onMouseMove={onHeroMove} style={{minHeight:'400px',display:'flex',alignItems:'center',gap:48,padding:'50px 32px 30px',overflow:'hidden',position:'relative',background:'radial-gradient(650px circle at var(--hx,50%) var(--hy,40%), rgba(63,79,196,.24), rgba(0,179,164,.16) 45%, var(--cream) 72%)',transition:'--hx .5s ease-out,--hy .5s ease-out'}}>
<div style={{flex:1,display:'flex',alignItems:'center',gap:48,position:'relative',zIndex:1,background:'linear-gradient(160deg, rgba(255,255,255,.4) 0%, rgba(255,255,255,.14) 60%, rgba(255,255,255,.22) 100%)',backdropFilter:'blur(16px) saturate(180%)',WebkitBackdropFilter:'blur(16px) saturate(180%)',border:'1px solid rgba(255,255,255,.55)',borderRadius:'20px',boxShadow:'inset 0 1px 0 rgba(255,255,255,.6), 0 8px 32px rgba(0,0,0,.12)',padding:'32px'}}>
<div style={{flex:1}}>
<Badge tone="indigo">AVAILABLE FOR ENGAGEMENTS</Badge>
<h1 style={{margin:'24px 0 20px'}}><TypewriterHeading text="JESS4342" /></h1>
<p style={{fontFamily:'var(--font-body)',fontSize:'19px',lineHeight:'var(--lh-normal)',color:'var(--text-soft)',maxWidth:'520px',margin:'0 0 28px'}}>Security consultant specializing in IAM and GenAI security in the cloud.</p>
<div style={{display:'flex',gap:12}}>
<Button variant="accent">View My Work</Button>
<Button variant="secondary">Contact Me</Button>
</div>
</div>
<div style={{flex:1,display:'flex',justifyContent:'center'}}>
<WindowCard dark title="~/whoami" onMaximize={()=>setPeccyOpen(true)}>
<WhoamiTerminal/>
</WindowCard>
</div>
</div>
<div style={{position:'absolute',inset:0,zIndex:2,background:'var(--grid-bg)',pointerEvents:'none'}}></div>
{peccyOpen&&(<div style={{position:'absolute',inset:0,zIndex:3}}><PeccyRun maximized onClose={()=>setPeccyOpen(false)}/></div>)}
</div>
</div>);
}

function About(){
return(<div style={{padding:'60px 32px 80px',maxWidth:960,margin:'0 auto'}}>
<div style={{marginBottom:'var(--space-6)'}}>
<div style={{fontFamily:'var(--font-pixel)',fontSize:'13px',letterSpacing:'var(--ls-pixel)',color:'var(--indigo-deep)',marginBottom:'10px',textTransform:'uppercase'}}>// About</div>
<h2 style={{margin:0}}><TypewriterHeading prefix="$ " text="WHOAMI" fontSize="36px" /></h2>
</div>
<div style={{display:'flex',gap:48}}>
<div style={{flex:1.3}}>
<p style={{fontFamily:'var(--font-body)',fontSize:'16px',lineHeight:'var(--lh-normal)',color:'var(--text-body)',marginBottom:16,textAlign:'justify'}}>I've spent the last four years at AWS working in cloud security, first as a Cloud Security Support Engineer and most recently as a Cloud Security Consultant.<br/><br/>My work sits directly at the intersection of cloud security, threat modeling, and emerging technology. Across customer engagements, I've helped organizations identify risks, threat model architectures, and bake security in GenAI solutions before they're shipped.<br/><br/>I'm especially interested in securing technology that is continuously ever-evolving—embedding security end-to-end and shifting left as threats emerge over time.<br/></p>
<p style={{fontFamily:'var(--font-body)',fontSize:'16px',lineHeight:'var(--lh-normal)',color:'var(--text-soft)',textAlign:'justify'}}>Outside of work, you can usually find me reading sci-fi and fantasy novels, writing speculative fiction, or running in unseasonable, sweltering Texas heat.<br/><br/>Welcome to my little corner of the internet!</p>
<div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:24}}>
{['GCIH','CISSP','Python','Burp Suite','Nmap','SAP-CO2'].map(s=><Badge key={s} tone="outline" shimmer>{s}</Badge>)}
</div>
</div>
<div style={{flex:1}}>
<WindowCard title="~/education.log">
<div style={{fontFamily:'var(--font-body)',fontSize:'14px',lineHeight:1.8,color:'var(--ink)'}}>
<strong>B.S. Information Technology &amp; Systems</strong><br/><span style={{color:'var(--text-faint)'}}>The University of Texas at Dallas, 2022<br/><br/><strong style={{color:'var(--ink)'}}>M.S. Business Analytics</strong><br/>The University of Texas at Dallas, 2023</span>
</div>
</WindowCard>
</div>
</div>
</div>);
}

const MEDIUM_URL='https://medium.com/@jessica-c';
const POSTS=[
{tag:'Essay',date:'2021.11.18',title:'5 Takeaways from AI Superpowers',excerpt:'How will AI impact us and how will it develop in the future?',readTime:'Read on Medium',href:'https://medium.com/@jessica-c/5-takeaways-from-ai-superpowers-70b9acd29a96'}
];
function Blog(){
return(<div style={{padding:'60px 32px 80px',maxWidth:1100,margin:'0 auto'}}>
<SectionHeading eyebrow="Blog" title="Writing" subtitle="published on Medium" />
<div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:20,marginTop:24,alignItems:'stretch'}}>
{POSTS.map(p=><BlogPostCard key={p.title} {...p} />)}
<a href={MEDIUM_URL} target="_blank" rel="noreferrer" style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:10,padding:'22px',textDecoration:'none',border:'var(--border-w) dashed var(--ink)',borderRadius:'var(--radius-sm)',background:'transparent',color:'var(--ink)'}}>
<span style={{fontFamily:'var(--font-pixel)',fontSize:'11px',letterSpacing:'var(--ls-pixel)',color:'var(--indigo-deep)',textTransform:'uppercase'}}>Medium</span>
<span style={{fontFamily:'var(--font-body)',fontWeight:700,fontSize:'19px'}}>@jessica-c</span>
<span style={{fontFamily:'var(--font-mono)',fontSize:'12px',color:'var(--teal-deep)'}}>View full profile &rarr;</span>
</a>
</div>
</div>);
}

const JOBS=[
{date:'2025 — Present',title:'Cloud Security Consultant',org:'AWS',category:'Current',current:true,description:'Helped healthcare and life sciences organizations build secure AWS infrastructure and GenAI solutions, with a focus on threat modeling, risk, resilience, and infrastructure as code.'}
];
const JOBS_PARALLEL=[
{date:'2022-2025',title:'Cloud Security Support Engineer',org:'AWS',category:'Full-time',description:'Solved complex AWS security and infrastructure issues for customers, specializing in IAM, networking, access controls, logging, and cloud security.'},
{date:'2022 — 2023',title:'M.S. Business Analytics',org:'The University of Texas at Dallas',category:'Education',description:''}
];
const JOBS_LAST={date:'2020-2022',title:'B.S. Information Technology & Systems',org:'The University of Texas at Dallas',category:'Education',description:'',last:true};
function ParallelCard({it}){
const hasBody=!!it.description;
const [open,setOpen]=React.useState(true);
return(<div onClick={()=>hasBody&&setOpen(o=>!o)} style={{flex:'1 1 220px',background:'var(--white)',border:'var(--border-w) solid var(--ink)',boxShadow:'var(--shadow-hard-sm)',padding:'16px 18px',cursor:hasBody?'pointer':'default',transition:'transform var(--dur-fast) var(--ease-out)'}} onMouseEnter={e=>{if(hasBody)e.currentTarget.style.transform='translate(-2px,-2px)';}} onMouseLeave={e=>{e.currentTarget.style.transform='none';}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:8,marginBottom:6}}>
<span style={{fontFamily:'var(--font-pixel)',fontSize:11,color:'var(--teal-deep)',letterSpacing:'var(--ls-pixel)'}}>{it.date}</span>
<span style={{fontFamily:'var(--font-pixel)',fontSize:10,letterSpacing:'var(--ls-pixel)',textTransform:'uppercase',padding:'3px 8px',border:'var(--border-w) solid var(--indigo)',color:'var(--indigo-deep)',background:'var(--indigo-dim)'}}>{it.category}</span>
</div>
<div style={{fontFamily:'var(--font-body)',fontWeight:700,fontSize:16,color:'var(--ink)'}}>{it.title}</div>
<div style={{fontFamily:'var(--font-body)',fontSize:13,color:'var(--text-faint)'}}>{it.org}</div>
{hasBody?<div style={{display:'grid',gridTemplateRows:open?'1fr':'0fr',opacity:open?1:0,transition:'grid-template-rows var(--dur-med) var(--ease-out), opacity var(--dur-med) var(--ease-out)'}}>
<p style={{overflow:'hidden',fontFamily:'var(--font-body)',fontSize:14,lineHeight:'var(--lh-normal)',color:'var(--text-soft)',margin:'10px 0 0'}}>{it.description}</p>
</div>:null}
</div>);
}
function ParallelTimelineEntry({items,last}){
return(<div style={{display:'flex',gap:20,paddingBottom:last?0:24,position:'relative'}}>
<div style={{display:'flex',flexDirection:'column',alignItems:'center',flexShrink:0}}>
<div style={{width:28,height:28,background:'var(--white)',border:'var(--border-w-thick) solid var(--ink)',display:'flex',alignItems:'center',justifyContent:'center'}}><img src={ICON+'calendar.svg'} width={14} height={14} alt="" /></div>
{!last?<div style={{width:2,flex:1,background:'var(--ink)',marginTop:6}}></div>:null}
</div>
<div style={{flex:1,display:'flex',gap:14,flexWrap:'wrap'}}>
{items.map((it,i)=><ParallelCard key={i} it={it} />)}
</div>
</div>);
}
function Timeline(){
return(<div style={{padding:'60px 32px 80px',maxWidth:760,margin:'0 auto'}}>
<SectionHeading eyebrow="Timeline" title="How I Got Here" />
{JOBS.map(j=><TimelineEntry key={j.title} {...j} icon={j.current?ICON+'shield.svg':ICON+'calendar.svg'} />)}
<ParallelTimelineEntry items={JOBS_PARALLEL} />
<TimelineEntry {...JOBS_LAST} icon={ICON+'calendar.svg'} />
</div>);
}

function Contact(){
return(<div style={{padding:'60px 32px 100px',maxWidth:760,margin:'0 auto'}}>
<SectionHeading eyebrow="Contact" title="Get In Touch" />
<div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
<SocialLink platform="linkedin" label="LinkedIn" href="https://www.linkedin.com/in/jessica-chen-utd/" />
<SocialLink platform="github" label="GitHub" href="https://github.com/jess4342" />
</div>
</div>);
}

Object.assign(window,{Home,About,Blog,Gallery,Timeline,Contact});
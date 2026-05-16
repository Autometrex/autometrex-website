window.addEventListener('scroll',()=>document.getElementById('navbar').classList.toggle('scrolled',scrollY>30));

(function(){
  const h=[30,50,40,70,55,85,60,95,72,80,90,100],cls=['b1','b2','b3'],c=document.getElementById('dbChart');
  h.forEach((v,i)=>{const b=document.createElement('div');b.className='dbar '+cls[i%3];b.style.cssText=`height:${v}%;animation-delay:${i*.07}s`;c.appendChild(b);});
})();

const ro=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('in');}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

let done=false;
function doTransform(){
  if(done)return;done=true;
  const btn=document.getElementById('tbtn'),lbl=document.getElementById('tlbl'),mb=document.getElementById('mBody'),pw=document.getElementById('tpw'),p=document.getElementById('tp'),ms=document.getElementById('mstrip');
  document.querySelectorAll('.bb').forEach(el=>el.classList.add('show'));
  btn.classList.add('running');lbl.textContent='Transforming...';pw.classList.add('show');mb.classList.add('fading');
  setTimeout(()=>{p.style.width='100%';},50);
  ['as1','as2','as3','as4','as5'].forEach((id,i)=>setTimeout(()=>{const el=document.getElementById(id);if(el)el.classList.add('on');},400+i*500));
  setTimeout(()=>{
    ms.classList.add('show');
    animM('msEff',94,'%');animM('msErr',99,'%');animM('msSpd',40,'×');animM('msCst',87,'%');
    btn.classList.remove('running');btn.classList.add('done');btn.textContent='✓';lbl.innerHTML='Automation<br>Active';
  },3200);
}
function animM(id,t,s){
  const el=document.getElementById(id);if(!el)return;
  let v=0;const step=t/(1200/16),iv=setInterval(()=>{v=Math.min(v+step,t);el.textContent=Math.floor(v)+s;if(v>=t)clearInterval(iv);},16);
}
function handleSubmit(e){
  e.preventDefault();const b=e.target;
  b.textContent='✓ Request Received — We\'ll be in touch shortly';b.style.background='var(--green)';
  setTimeout(()=>{b.textContent='Book an Executive Demo →';b.style.background='';},4000);
}
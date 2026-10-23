(function(){
var $=function(i){return document.getElementById(i);};
var esc=function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});};
var url=function(u){return /^(https?:\/\/|\/|#|mailto:|tel:)/i.test(u||'')?u:'';};
var img=function(u){u=u||'';return /^https?:\/\//i.test(u)?u:/^[\w\/.% -]+$/.test(u)?u.replace(/^\//,'').replace(/ /g,'%20'):'';}; // relative paths so it works from any folder
var I=function(n){return '<svg class="ico"><use href="#i-'+n+'"/></svg>';};
var BR={
instagram:['Instagram','#e1306c','M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.3 5.9a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z'],
facebook:['Facebook','#1877f2','M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'],
linkedin:['LinkedIn','#0a66c2','M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z'],
youtube:['YouTube','#ff0000','M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'],
tiktok:['TikTok','#111111','M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z'],
whatsapp:['WhatsApp','#25d366','M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z']};
var KEYS=['about','domains','workshops','updates','gallery','catalogue','team','faq','social','contact'];
var TITLES={domains:'Our domains',about:'About us',workshops:'Workshops',updates:'Latest updates',gallery:'Gallery',catalogue:'Catalogue',team:'Our team',faq:'FAQ',social:'Social media',contact:'Contact us'};
function acts(x){var o='',f=url(x.file),l=url(x.link);
  if(f){o+='<a class="abtn" href="'+esc(f)+'" target="_blank" rel="noopener">'+I('pdf')+'Download PDF</a>';}
  if(l){o+='<a class="abtn ghost" href="'+esc(l)+'" target="_blank" rel="noopener">View details'+I('arrow')+'</a>';}
  return o?'<div class="acts">'+o+'</div>':'';}
function card(x,ic){var i=img(x.image);
  return '<div class="card">'+(i?'<div class="thumb"><img loading="lazy" alt="" src="'+esc(i)+'"></div>':(ic||''))+(x.date?'<span class="badge">'+esc(x.date)+'</span>':'')+'<h3>'+esc(x.title||x.name)+'</h3>'+(x.text?'<p style="white-space:pre-line">'+esc(x.text)+'</p>':'')+acts(x)+'</div>';}
function render(d){
  var S=d.sections||{},C=d.contact||{},L=d.links||{},F=d.footer||{},T=d.theme||{},A=d.cta||{};
  var root=document.documentElement.style;
  if(T.primary){root.setProperty('--navy',T.primary);} if(T.accent){root.setProperty('--sky',T.accent);}
  if(d.pageTitle){document.title=d.pageTitle;}
  var brand=d.brand||'BuildLabs Pakistan';
  $('brand').innerHTML=esc(brand).replace('Labs','<span>Labs</span>'); $('fBrand').textContent=brand;
  var lg=img(d.logo); if(lg){$('logoImg').src=lg;}
  $('heroPill').textContent=d.heroPill||''; $('heroPill').style.display=d.heroPill?'':'none';
  $('tagline').textContent=d.tagline||''; $('intro').textContent=d.intro||'';
  [['btn1',d.button1Text,d.button1Link],['btn2',d.button2Text,d.button2Link]].forEach(function(b){var e=$(b[0]);e.textContent=b[1]||'';e.href=url(b[2])||'#';e.style.display=b[1]?'':'none';});
 var gImgs=(d.gallery||[]).filter(function(x){return img(x.image);});
if(gImgs.length){
  var doubled=gImgs.concat(gImgs);
  $('imgTrack').innerHTML=doubled.map(function(x){return '<img class="marquee-img" src="'+esc(img(x.image))+'" alt="" loading="lazy">';}).join('');
  $('imgMarquee').style.display='';
} 
 var upd=(d.updates||[]);
if(upd.length){
  var updDoubled=upd.concat(upd);
  $('txtTrack').innerHTML=updDoubled.map(function(x){return '<span class="ticker-item">'+esc(x.title||x.text||'')+'</span>';}).join('');
  $('txtTicker').style.display='';
}
 $('navBtn').textContent=d.navButton||'Contact us';
  var q=d.quick||[]; $('quickSec').style.display=q.length?'':'none';
  $('quick').innerHTML=q.map(function(x){var u=url(x.link);var bt=x.backText||'More details coming soon.';var bb=x.backBtn||'Notify me';return '<a class="qcard" href="'+esc(u||'#')+'"'+(u&&u.charAt(0)!=='#'?' target="_blank" rel="noopener"':'')+(u?'':' data-notify="'+esc(x.title)+'"')+'><div class="qcard-inner"><div class="qcard-front"><span class="qicon">'+I(esc(x.icon||'chat'))+'</span><span><b>'+esc(x.title)+'<i class="qbadge'+(u?' open':'')+'" style="font-style:normal">'+(u?'Open':'Opening soon')+'</i></b><small>'+esc(x.text||'')+'</small>'+(x.date?'<span class="qcount" data-date="'+esc(x.date)+'"></span>':'')+'</span></div><div class="qcard-back"><span class="qcard-back-title">'+esc(x.title)+'</span><p>'+esc(bt)+'</p><span class="qcard-back-btn">'+esc(bb)+'</span></div></div></a>';}).join('');
  var st=d.stats||[]; $('statsSec').style.display=st.length?'':'none';
  $('stats').innerHTML=st.map(function(x){return '<div class="stat"><b>'+esc(x.number)+'</b><span>'+esc(x.label)+'</span></div>';}).join('');
  var dom=(d.domains||[]).map(function(x){var t=(x.description||'').trim();
    return '<div class="card"><span class="qicon">'+I(esc(x.icon||'cube'))+'</span><h3>'+esc(x.name)+'</h3>'+(t&&t.toLowerCase()!=='revealing soon'?'<p>'+esc(t)+'</p>':'')+'</div>';});
  $('domainGrid').innerHTML=dom.join('');
  var wl=d.workshopList||[],up=d.updates||[],ca=d.catalogue||[],tm=d.team||[],fq=d.faq||[];
  $('workGrid').innerHTML=wl.map(function(x){return card(x,'<span class="qicon">'+I(esc(x.icon||'cube'))+'</span>');}).join('');
  if(up.length){
  $('updatesGrid').innerHTML='<div class="upd-carousel"><div class="upd-track" id="updTrack">'+up.map(function(x){return '<div class="upd-slide">'+card(x)+'</div>';}).join('')+'</div></div><div class="upd-arrows"><button class="upd-arr" id="updPrev">&#8592;</button><span class="upd-counter" id="updCounter">1 / '+up.length+'</span><button class="upd-arr" id="updNext">&#8594;</button></div>';
  var uIdx=0,uTotal=up.length,uTrack=$('updTrack'),uTimer;
  function uGo(n){uIdx=(n+uTotal)%uTotal;uTrack.style.transform='translateX(-'+uIdx*100+'%)';$('updCounter').textContent=(uIdx+1)+' / '+uTotal;}
  function uAuto(){uTimer=setInterval(function(){uGo(uIdx+1);},4000);}
  $('updPrev').addEventListener('click',function(){clearInterval(uTimer);uGo(uIdx-1);uAuto();});
  $('updNext').addEventListener('click',function(){clearInterval(uTimer);uGo(uIdx+1);uAuto();});
  uAuto();
} else {
  $('updatesGrid').innerHTML='';
}
  $('catGrid').innerHTML=ca.map(function(x){return card(x,'<span class="qicon">'+I('book')+'</span>');}).join('');
  var g=(d.gallery||[]).filter(function(x){return img(x.image);});
  $('galleryGrid').innerHTML=g.map(function(x,n){return '<div class="tile'+(n===0&&g.length>2?' big':'')+'"><img loading="lazy" alt="'+esc(x.caption||'Workshop photo')+'" src="'+esc(img(x.image))+'"></div>';}).join('');
  var tmData=tm||[];
$('teamGrid').innerHTML=tmData.map(function(x,n){var i=img(x.image);
  return '<div class="card team tm-card" data-tm="'+n+'"><div class="avatar">'+(i?'<img loading="lazy" alt="'+esc(x.name)+'" src="'+esc(i)+'">':I('user'))+'</div><h3>'+esc(x.name)+'</h3><div class="role">'+esc(x.role||'')+'</div></div>';}).join('');
var tmDialog=$('tm');
$('teamGrid').addEventListener('click',function(e){
  var c=e.target.closest('.tm-card');if(!c){return;}
  var x=tmData[+c.getAttribute('data-tm')];if(!x){return;}
  var i=img(x.image);
  $('tmAvatar').innerHTML=i?'<img src="'+esc(i)+'" alt="'+esc(x.name)+'">':'';
  $('tmName').textContent=x.name||'';
  $('tmRole').textContent=x.role||'';
  $('tmMsg').textContent=x.message||'';
  var links='';
  if(url(x.linkedin)){links+='<a href="'+esc(url(x.linkedin))+'" target="_blank" rel="noopener">LinkedIn</a>';}
  if(url(x.instagram)){links+='<a href="'+esc(url(x.instagram))+'" target="_blank" rel="noopener">Instagram</a>';}
  if(url(x.whatsapp)){links+='<a href="'+esc(url(x.whatsapp))+'" target="_blank" rel="noopener">WhatsApp</a>';}
  if(url(x.link)){links+='<a href="'+esc(url(x.link))+'" target="_blank" rel="noopener">Profile</a>';}
  $('tmLinks').innerHTML=links;
  tmDialog.showModal();
});
$('tmClose').addEventListener('click',function(){tmDialog.close();});
tmDialog.addEventListener('click',function(e){if(e.target===tmDialog){tmDialog.close();}});
  $('faqList').innerHTML=fq.map(function(x){return '<details class="faq"><summary>'+esc(x.question)+'</summary><p>'+esc(x.answer||'')+'</p></details>';}).join('');
  var soc=Object.keys(BR).filter(function(k){return url(L[k]);});
  $('socialRow').className='soc';
  $('socialRow').innerHTML=soc.map(function(k){return '<a href="'+esc(L[k])+'" target="_blank" rel="noopener" style="--b:'+BR[k][1]+'"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+BR[k][2]+'"/></svg>'+BR[k][0]+'</a>';}).join('');
  var ct=[['Email',C.email,'mailto:','mail'],['Phone',C.phone,'tel:','phone'],['Location',C.location,'https://www.google.com/maps/search/?api=1&query=','pin'],['Hours',C.hours,'','clock']].filter(function(x){return x[1];});
  $('contactGrid').innerHTML=ct.map(function(x){var v=esc(x[1]),inner=x[2]?'<a href="'+x[2]+(x[0]==='Location'?encodeURIComponent(x[1]):v)+'"'+(x[0]==='Location'?' target="_blank" rel="noopener"':'')+'>'+v+'</a>':v;
    return '<div class="card ccard"><span class="qicon">'+I(x[3])+'</span><div><h3>'+x[0]+'</h3><p>'+inner+'</p></div></div>';}).join('');
  $('ctaBox').innerHTML=A.title?'<div class="cta" style="margin-top:36px"><div><h2>'+esc(A.title)+'</h2><p>'+esc(A.text||'')+'</p></div>'+(A.button?'<a class="btn" href="'+esc(url(A.link)||'#contact')+'">'+esc(A.button)+'</a>':'')+'</div>':'';
  var count={domains:dom.length,workshops:wl.length,updates:up.length,gallery:g.length,catalogue:ca.length,team:tm.length,faq:fq.length,social:soc.length,contact:ct.length+(A.title?1:0),about:0};
  var vis=[];
  KEYS.forEach(function(k){var s=S[k]||{};var ok=s.show!==false;$(k).style.display=ok?'':'none'; if(ok){vis.push(k);}
    var empty=!s.text&&!count[k]; $('t_'+k).textContent=s.title||TITLES[k]; $('x_'+k).textContent=s.text||(empty?'Revealing soon':''); $('x_'+k).style.display=(s.text||empty)?'':'none';});
  var title=function(k){return (S[k]&&S[k].title)||TITLES[k];};
  var links=vis.filter(function(k){return k!=='contact';}).map(function(k){return '<li><a href="#'+k+'">'+esc(title(k))+'</a></li>';}).join('');
  $('navList').innerHTML=links; $('fExplore').innerHTML=links;
  $('fConnect').innerHTML=soc.map(function(k){return '<li><a href="'+esc(L[k])+'" target="_blank" rel="noopener">'+BR[k][0]+'</a></li>';}).join('')+(vis.indexOf('contact')>-1?'<li><a href="#contact">Contact</a></li>':'');
  $('fTag').textContent=F.tagline||d.tagline||''; $('fCopy').textContent=F.copyright||'';
  reveal();
}
function skel(){Array.prototype.forEach.call(document.querySelectorAll('.avatar img,.thumb img,.tile img'),function(m){var d=function(){m.classList.add('ld');m.parentNode.classList.add('ld');};if(m.complete){d();}else{m.addEventListener('load',d);m.addEventListener('error',d);}});}
function reveal(){skel();var els=document.querySelectorAll('.head,.card,.qcard,.stat,.tile,details.faq,.soc a');
  if(!('IntersectionObserver' in window)){return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.08});
  Array.prototype.forEach.call(els,function(e){e.classList.add('rv');io.observe(e);});}
 $('quick').addEventListener('pointermove',function(e){var c=e.target.closest('.qcard');if(!c){return;}var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px');});
setInterval(function(){var n=Date.now();Array.prototype.forEach.call(document.querySelectorAll('.qcount'),function(e){var t=new Date(e.getAttribute('data-date')).getTime();if(isNaN(t)){return;}var s=Math.floor((t-n)/1000);if(s<=0){e.textContent='Happening now';return;}var d=Math.floor(s/86400),h=Math.floor(s%86400/3600),m=Math.floor(s%3600/60),c=s%60;e.textContent='Starts in '+d+'d '+h+'h '+m+'m '+c+'s';});},1000);
 var nm=$('nm'),nmForm=$('nmForm'),nmMsg=$('nmMsg');
$('quick').addEventListener('click',function(e){var c=e.target.closest('.qcard[data-notify]');if(!c){return;}e.preventDefault();var t=c.getAttribute('data-notify');nmForm.reset();$('nmTopic').value=t;$('nmTitle').textContent='Get notified: '+t;nmMsg.textContent='';nm.showModal();$('nmContact').focus();});
$('nmClose').addEventListener('click',function(){nm.close();});
nmForm.addEventListener('submit',function(e){e.preventDefault();nmMsg.textContent='Sending...';fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(nmForm)).toString()}).then(function(r){if(!r.ok){throw 0;}nmMsg.textContent='Thanks! We will notify you when it opens.';setTimeout(function(){nm.close();},1800);}).catch(function(){nmMsg.textContent='Could not send. Please try again.';});});
 var lb=$('lb');
$('galleryGrid').addEventListener('click',function(e){var t=e.target.closest('.tile img');if(t){lb.querySelector('img').src=t.src;lb.classList.add('on');}});
lb.addEventListener('click',function(){lb.classList.remove('on');});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){lb.classList.remove('on');}});
var mb=$('menuBtn'),nv=document.querySelector('nav');
mb.addEventListener('click',function(){var o=nv.classList.toggle('open');mb.setAttribute('aria-expanded',o);});
nv.addEventListener('click',function(e){if(e.target.tagName==='A'){nv.classList.remove('open');}});
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(function(){});}
fetch('content/site.json',{cache:'no-store'}).then(function(r){return r.json();}).then(render).catch(function(){});
})();

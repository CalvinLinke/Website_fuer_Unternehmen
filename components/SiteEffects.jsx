'use client';
import { useEffect } from 'react';

/**
 * SiteEffects — 1:1 Port der Interaktions-/Animationslogik aus der HTML-Referenz.
 * Enthält: Nav-Scroll-State, Scroll-Reveal (IntersectionObserver), FAQ-Accordion,
 * Hintergrund-/Theme-Switcher, magnetische Buttons, das CTA "W-Weave"-Canvas,
 * das Partikel-Netzwerk (#netCanvas) und das driftende Website-Card-Field (#cardField).
 *
 * Wird einmalig am Ende der Seite gerendert und greift per querySelector auf das
 * bereits gerenderte Markup zu. Der Guard verhindert Doppel-Init im React StrictMode.
 */
export default function SiteEffects() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.__wfuEffects) return;
    window.__wfuEffects = true;

    /* ============ NAV scroll state ============ */
    const nav=document.getElementById('nav');
    addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30),{passive:true});
    
    /* ============ Reveal on scroll ============ */
    const io=new IntersectionObserver((es)=>{
      es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
    },{threshold:.16});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
    
    /* stagger steps */
    document.querySelectorAll('.step').forEach((s,i)=>s.style.transitionDelay=(i*0.09)+'s');
    document.querySelectorAll('.serv__grid .card').forEach((s,i)=>s.style.transitionDelay=(i*0.07)+'s');
    document.querySelectorAll('.price__grid .plan').forEach((s,i)=>s.style.transitionDelay=(i*0.09)+'s');
    
    /* ============ FAQ accordion height ============ */
    document.querySelectorAll('.qa').forEach(d=>{
      const a=d.querySelector('.qa__a');
      const set=()=>{a.style.maxHeight=d.open?a.scrollHeight+'px':'0px';};
      d.addEventListener('toggle',set);
      if(d.open) requestAnimationFrame(set);
    });
    
    /* ============ Hero background switcher ============ */
    const hero=document.querySelector('.hero');
    document.querySelectorAll('.switcher button').forEach(btn=>{
      btn.addEventListener('click',()=>{
        btn.parentElement.querySelector('.active')?.classList.remove('active');
        btn.classList.add('active');
        if(btn.dataset.bg){if(hero)hero.dataset.bg=btn.dataset.bg;}
        if(btn.dataset.theme){if(hero)hero.dataset.theme=btn.dataset.theme;nav.dataset.theme=btn.dataset.theme;}
      });
    });
    
    /* ============ Magnetic buttons ============ */
    document.querySelectorAll('.btn--primary').forEach(b=>{
      b.addEventListener('pointermove',e=>{
        const r=b.getBoundingClientRect();
        b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28-2}px)`;
      });
      b.addEventListener('pointerleave',()=>b.style.transform='');
    });
    
    /* ============ W-WEAVE — mouse-reactive woven W-stroke field ============ */
    const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;

    /* cursor handled via CSS cursor: url(...) in globals.css */
    function makeWeave(canvas,conf){
      const ctx=canvas.getContext('2d');
      let w,h,dpr,t=0,raf;
      const m={x:-9999,y:-9999,has:false};
      function size(){
        dpr=Math.min(devicePixelRatio||1,2);
        w=canvas.clientWidth;h=canvas.clientHeight;
        canvas.width=w*dpr;canvas.height=h*dpr;
        ctx.setTransform(dpr,0,0,dpr,0,0);
      }
      size();addEventListener('resize',size);
      canvas.__setMouse=(x,y,has)=>{m.x=x;m.y=y;m.has=has;};
      // triangle wave -> sharp W/V peaks (rounded by lineJoin)
      const tri=p=>{p-=Math.floor(p);return Math.abs(p-0.5)*4-1;};
      function draw(){
        ctx.clearRect(0,0,w,h);
        if(!reduce) t+=conf.speed;
        ctx.globalCompositeOperation=conf.additive?'lighter':'source-over';
        ctx.lineJoin='round';ctx.lineCap='round';
        const P=conf.period;
        for(let b=0;b<conf.bands;b++){
          const baseY=h*(b+0.5)/conf.bands;
          const phase=b*0.41 + t*(1+b*0.04);
          const amp=conf.amp*(0.82+0.32*Math.sin(b*1.7+1));
          // band brightness lift when cursor is near this band
          let lift=0;
          if(m.has){const dB=Math.abs(baseY-m.y);lift=Math.max(0,(conf.R*1.5-dB)/(conf.R*1.5));}
          for(let s=0;s<conf.strokes;s++){
            const off=(s-(conf.strokes-1)/2)*conf.gap;
            ctx.beginPath();
            let started=false;
            for(let x=-P;x<=w+P;x+=9){
              const p=(x/P)+phase;
              let y=baseY+off+tri(p)*amp;
              if(m.has){
                const dx=x-m.x, dy=y-m.y, R=conf.R, d2=dx*dx+dy*dy;
                if(d2<R*R){const d=Math.sqrt(d2)||1, f=1-d/R; y-=(dy/d)*f*f*conf.push;}
              }
              if(!started){ctx.moveTo(x,y);started=true;}else ctx.lineTo(x,y);
            }
            let a=conf.alpha*(0.5+0.5*Math.abs(Math.sin(b*1.3+s*0.6)));
            a*=1+lift*conf.boost;
            ctx.strokeStyle=conf.color.replace('A',Math.min(a,conf.maxA).toFixed(3));
            ctx.lineWidth=conf.lw+lift*conf.lwBoost;
            ctx.stroke();
          }
        }
        ctx.globalCompositeOperation='source-over';
        raf=requestAnimationFrame(draw);
      }
      draw();
      function apply(style){
        if(style==='nightline'){conf.color='rgba(180,142,240,A)';conf.alpha=0.42;conf.lw=1.4;conf.additive=true;conf.maxA=0.95;}
        else if(style==='editorial'){conf.color='rgba(123,63,191,A)';conf.alpha=0.14;conf.lw=1.4;conf.additive=false;conf.maxA=0.5;}
        else{conf.color='rgba(123,63,191,A)';conf.alpha=0.18;conf.lw=1.5;conf.additive=false;conf.maxA=0.6;}
      }
      return {recolor:apply, stop(){cancelAnimationFrame(raf);}};
    }
    
    /* ============ Pointer routing (CTA canvas only) ============ */
    function routeMouse(e){
      document.querySelectorAll('canvas').forEach(c=>{
        if(!c.__setMouse)return;
        const r=c.getBoundingClientRect();
        const x=e.clientX-r.left, y=e.clientY-r.top;
        const inside=x>=-60&&x<=r.width+60&&y>=-60&&y<=r.height+60;
        c.__setMouse(x,y,inside);
      });
    }
    addEventListener('pointermove',routeMouse,{passive:true});
    addEventListener('pointerleave',()=>document.querySelectorAll('canvas').forEach(c=>c.__setMouse&&c.__setMouse(-9999,-9999,false)));
    
    /* ============ Particle network ============ */
    (function(){
      const canvas=document.getElementById('netCanvas');
      if(!canvas)return;
      const ctx=canvas.getContext('2d');
      let w,h,dpr,nodes=[];
      const COUNT=120, LINK=140;
      function size(){dpr=Math.min(devicePixelRatio||1,2);w=canvas.clientWidth;h=canvas.clientHeight;canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);init();}
      function init(){nodes=[];for(let i=0;i<COUNT;i++)nodes.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*0.22,vy:(Math.random()-.5)*0.22,r:Math.random()*1.5+1.1});}
      function draw(){
        const dark=hero?.dataset.theme==='dark';
        ctx.clearRect(0,0,w,h);
        ctx.globalCompositeOperation=dark?'lighter':'source-over';
        const dotC=dark?'200,165,245':'123,63,191', lineC=dark?'168,127,230':'123,63,191';
        for(const n of nodes){n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>w)n.vx*=-1;if(n.y<0||n.y>h)n.vy*=-1;}
        for(let i=0;i<nodes.length;i++){const a=nodes[i];
          for(let j=i+1;j<nodes.length;j++){const b=nodes[j];const dx=a.x-b.x,dy=a.y-b.y;const d=Math.hypot(dx,dy);
            if(d<LINK){const al=(1-d/LINK)*(dark?0.5:0.3);ctx.strokeStyle='rgba('+lineC+','+al.toFixed(3)+')';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}}}
        for(const n of nodes){ctx.fillStyle='rgba('+dotC+','+(dark?0.9:0.68)+')';ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,6.3);ctx.fill();}
        ctx.globalCompositeOperation='source-over';
      }
      size();addEventListener('resize',size);
      function loop(){if(hero?.dataset.bg==='network'&&!reduce)draw();requestAnimationFrame(loop);}
      draw();loop();
    })();
    
    /* ============ Floating website cards ============ */
    (function(){
      const field=document.getElementById('cardField');
      if(!field)return;
      const N=11, cards=[];
      let W,H;
      function size(){W=field.clientWidth;H=field.clientHeight;}
      function mk(accent){
        const el=document.createElement('div');el.className='wcard';
        el.innerHTML='<div class="wcard__bar"><span class="wcard__dot"></span><span class="wcard__dot"></span><span class="wcard__dot"></span></div>'+
          '<div class="wcard__body">'+(accent?'<div class="wcard__hero"></div>':'')+
          '<div class="wcard__row" style="width:92%"></div><div class="wcard__row" style="width:68%"></div>'+
          '<div class="wcard__chip"></div><div class="wcard__row" style="width:80%"></div></div>';
        field.appendChild(el);return el;
      }
      size();addEventListener('resize',size);
      for(let i=0;i<N;i++){
        const depth=0.45+Math.random()*0.55, wpx=Math.round(150+depth*150);
        const el=mk(Math.random()<0.55);el.style.width=wpx+'px';
        el.style.opacity=(0.22+depth*0.62).toFixed(2);el.style.zIndex=Math.round(depth*10);
        cards.push({el,depth,x:W*0.40+Math.random()*W*0.58,y:Math.random()*H,rot:(Math.random()-.5)*9,sway:Math.random()*6.28,swayAmp:8+Math.random()*14,speed:(0.12+Math.random()*0.16)*depth});
      }
      function frame(){
        if(hero?.dataset.bg==='cards'&&!reduce){
          for(const c of cards){c.y-=c.speed;c.sway+=0.005;if(c.y<-280){c.y=H+140;c.x=W*0.40+Math.random()*W*0.58;}
            const dx=Math.sin(c.sway)*c.swayAmp;
            c.el.style.transform='translate('+(c.x+dx).toFixed(1)+'px,'+c.y.toFixed(1)+'px) scale('+c.depth.toFixed(3)+') rotate('+c.rot+'deg)';}
        }
        requestAnimationFrame(frame);
      }
      for(const c of cards)c.el.style.transform='translate('+c.x.toFixed(1)+'px,'+c.y.toFixed(1)+'px) scale('+c.depth.toFixed(3)+') rotate('+c.rot+'deg)';
      frame();
    })();
  }, []);

  return null;
}

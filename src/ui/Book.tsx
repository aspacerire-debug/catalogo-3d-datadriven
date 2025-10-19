import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Page from './pages/Page';
import Cover from './pages/Cover';
import Product from './pages/Product';
import Info from './pages/Info';

export default function Book({ pages }:{ pages:any[] }){
  const [i,setI]=useState(0);
  const canPrev = i>0, canNext = i<pages.length-1;
  const go=(d:number)=> setI(v=> Math.min(Math.max(v+d,0), pages.length-1));
  const page=pages[i];
  const variants:any={ enter:(d:number)=>({ rotateX:d>0?10:-10, y:d>0?40:-40, opacity:0 }), center:{ rotateX:0,y:0,opacity:1 }, exit:(d:number)=>({ rotateX:d>0?-10:10, y:d>0?-40:40, opacity:0 }) };

  return (
    <div className="relative w-full max-w-[480px] mx-auto">
      <div className="aspect-[9/16] bg-white rounded-[18px] border border-black/5 overflow-hidden book-shadow">
        <AnimatePresence mode="wait" custom={1}>
          <motion.div key={i+'-'+(page?.id||'x')} custom={1} initial="enter" animate="center" exit="exit" variants={variants} transition={{type:'spring',stiffness:180, damping:20}} className="h-full">
            <Page>
              {page?.type==='cover' && <Cover data={page} />}
              {page?.type==='product' && <Product data={page} />}
              {page?.type==='info' && <Info data={page} />}
              {!page && <div className="grid place-items-center h-full">Sin datos</div>}
            </Page>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between mt-3">
        <button onClick={()=>go(-1)} disabled={!canPrev} className={`px-4 py-2 rounded-xl border border-black/10 bg-white shadow-sm ${!canPrev?'opacity-40':''}`}>← Anterior</button>
        <div className="text-sm opacity-70">{i+1} / {pages.length||1}</div>
        <button onClick={()=>go(1)} disabled={!canNext} className={`px-4 py-2 rounded-xl border border-black/10 bg-white shadow-sm ${!canNext?'opacity-40':''}`}>Siguiente →</button>
      </div>
    </div>
  );
}

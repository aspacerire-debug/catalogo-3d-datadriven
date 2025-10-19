import React from 'react';
import { ThreeViewer } from '../three/ThreeViewer';

export default function Product({ data }:{data:any}){
  const mediaType = data.media_type || 'model3d';
  return (
    <div className="grid grid-rows-[auto,1fr,auto] h-full">
      <div className="p-3">
        <h3 className="text-xl font-semibold">{data.title}</h3>
        <div className="text-sm opacity-70">{data.category}</div>
      </div>
      <div className="relative">
        {mediaType==='model3d' && <ThreeViewer url={data.media_url} rotation={data.rotation} zoom={Number(data.zoom)||1.0} />}
        {mediaType==='image' && <img src={data.media_url} alt={data.title} className="w-full h-full object-contain" />}
        {mediaType==='video' && <video src={data.media_url} controls className="w-full h-full object-contain" />}
      </div>
      <div className="p-3 space-y-2">
        {data.price && <div className="text-lg font-medium">{data.price}</div>}
        {data.features && <ul className="list-disc pl-5 text-sm opacity-80">{String(data.features).split(';').map((f:string,i:number)=>(<li key={i}>{f}</li>))}</ul>}
        <div className="pt-2">
          {data.link && <a href={data.link} target="_blank" className="inline-block px-4 py-2 rounded-xl bg-black text-white">Comprar</a>}
        </div>
      </div>
    </div>
  );
}
